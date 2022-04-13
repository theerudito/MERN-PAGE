import { useEffect } from "react";
import { Modal, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import EditAccountResolver from "../Helpers/EditAccountResolver";
import { RolesApp } from "../Helpers/Roles";
import useAuth from "../Auth/useAuth";

export const EditModalApp = ({ isOpen, close, user }) => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, dirtyFields }
	} = useForm({ resolver: EditAccountResolver });

	const { updateUser, hasRole } = useAuth();

	// sin modifica nada no hace peticion
	const isDirty = !!Object.keys(dirtyFields).length;

	const onSubmit = (formData) => {
		if (!isDirty) return;
		updateUser(formData);
		close();
	};

	useEffect(() => {
		if (!isOpen) {
			reset();
		}
	}, [isOpen, reset]);

	// Llenar datos del formulario
	useEffect(() => {
		if (user) {
			reset({
				name: user.name,
				email: user.email,
				role: user.role
			});
		}
	}, [user, reset]);

	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Editar Cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="ingresa un nombre"
							{...register("name")}
						/>
						{errors?.name && (
							<Form.Text>
								<Alert variant="danger">{errors.name.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>

					{/*  */}

					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="ingresa un email"
							{...register("email")}
						/>
						{errors?.email && (
							<Form.Text>
								<Alert variant="danger">{errors.email.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
					{/*  */}

					<Form.Group>
						<Form.Label>Rol</Form.Label>
						<Form.Control
							as="select"
							disabled={!hasRole("admin")}
							{...register("role")}>
							{Object.keys(RolesApp).map((rol) => (
								<option key={rol}>{rol} </option>
							))}
						</Form.Control>
						{errors?.role && (
							<Form.Text>
								<Alert variant="danger">{errors.role.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => close()}>
					Cancelar
				</button>
				<button
					className="btn btn-primary"
					onClick={handleSubmit(onSubmit)}
					disabled={!isDirty}>
					Actualizar mi Cuenta
				</button>
			</Modal.Footer>
		</Modal>
	);
};
