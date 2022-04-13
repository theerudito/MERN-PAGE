import { useEffect } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ValidatiosChangePassWord from "../Helpers/ValidatiosChangePassWord";

export const ChangeModalApp = ({ isOpen, close }) => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors }
	} = useForm({ resolver: ValidatiosChangePassWord });

	const onSubmit = (formData) => {
		reset();
	};

	useEffect(() => {
		if (!isOpen) {
			reset();
		}
	}, [isOpen]);

	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar Contraseña</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Nueva Contraeña</Form.Label>

						<Form.Control
							{...register("password")}
							placeholder="Nueva Contraseña"
							type="password"
						/>
						{errors?.password && (
							<Form.Text>
								<Alert variant="danger">{errors.password.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => close()}>
					Cancelar
				</button>
				<button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
					Actualizar Contraseña
				</button>
			</Modal.Footer>
		</Modal>
	);
};
