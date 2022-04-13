import { Modal, Alert } from "react-bootstrap";
import useAuth from "../Auth/useAuth";
export const DeleteModalApp = ({ isOpen, close }) => {
	const { Logout } = useAuth();

	const controlarEliminar = () => {
		Logout();
	};

	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Eliminar Cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Alert variant="danger">
					¿Estas Seguro que Quieres Borrar Tu Cuenta?
				</Alert>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => close()}>
					Cancelar
				</button>
				<button className="btn btn-danger" onClick={controlarEliminar}>
					Eliminar Cuenta
				</button>
			</Modal.Footer>
		</Modal>
	);
};
