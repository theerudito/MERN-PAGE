import { Container, Row, Col, Card } from "react-bootstrap";
import useAuth from "../Auth/useAuth";
import { DeleteModalApp } from "../AccountPage/DeleteModal";
import { ChangeModalApp } from "../AccountPage/ChangePassword";
import { useModal } from "../Hooks/useModal";
import { EditModalApp } from "../AccountPage/EditModal";
import { ProfileModalApp } from "../AccountPage/ProfileModal";

export const AccountPageApp = () => {
	// Profile
	const [isOpenProfileModal, openProfileModal, closeProfileModal] = useModal();

	// Borrar Cuentas
	const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();

	// Cambiar Contraseña
	const [isOpenChangeModal, openChangeModal, closeChangeModal] = useModal();

	// Edit Modal
	const [isOpenEditModal, openEditModal, closeEditModal] = useModal();

	const { user } = useAuth();
	return (
		<>
			<Container>
				<Row>
					<Col xs={12} className="text-center mt-4 pb-2">
						<img
							style={{
								cursor: "pointer",
								width: "200px",
								Height: "200px",
								borderRadius: "50%",
								objectFit: "cover"
							}}
							onClick={() => openProfileModal()}
							src={user?.profilePic || "/img/male_avatar.svg"}
							alt="profile"
						/>
					</Col>
					<Col className="mt-4">
						<Card style={{ margin: "10px auto", maxWidth: "360px" }}>
							<p className="text.center ">
								<b>Nombre: </b>
								{user.name}{" "}
							</p>
							<p className="text.center ">
								<b>Email: </b>
								{user.email}{" "}
							</p>
							<p className="text.center ">
								<b>Role: </b>
								{user.role}{" "}
							</p>
							<button
								style={{ width: "200px", margin: "10px auto" }}
								className="btn btn-warning "
								onClick={() => openEditModal()}>
								Editar Cuenta
							</button>
							<button
								style={{ width: "200px", margin: "10px auto" }}
								className="btn btn-success "
								onClick={() => openChangeModal()}>
								Cambiar Contraseña
							</button>
							<button
								style={{ width: "200px", margin: "10px auto" }}
								className="btn btn-danger "
								onClick={() => openDeleteModal()}>
								Eliminar Cuenta
							</button>
						</Card>
					</Col>
				</Row>
			</Container>

			<DeleteModalApp isOpen={isOpenDeleteModal} close={closeDeleteModal} />

			<ChangeModalApp isOpen={isOpenChangeModal} close={closeChangeModal} />

			<EditModalApp
				user={user}
				isOpen={isOpenEditModal}
				close={closeEditModal}
			/>

			<ProfileModalApp
				user={user}
				isOpen={isOpenProfileModal}
				close={closeProfileModal}
			/>
		</>
	);
};
