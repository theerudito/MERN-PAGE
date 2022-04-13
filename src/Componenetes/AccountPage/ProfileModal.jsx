import { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Form } from "react-bootstrap";
import useAuth from "../Auth/useAuth";

export const ProfileModalApp = ({ isOpen, close }) => {
	const [fileName, setFileName] = useState("imagen");
	const [selectedFile, setSelectedFile] = useState(null);
	const { updateUser } = useAuth();

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		// Tamaño de la imagen
		const SIZE_50MB = 50 * 1024;
		const isValidSize = file.size < SIZE_50MB;

		// para no subir archivos q no es imagen
		const isNameOfOneImageRegEx = /.(jpe?g|gif|png|svg)$/i;
		const isValidType = isNameOfOneImageRegEx.test(file.name);
		if (!isValidSize) return toast.error("Imagen muy pesada, maximo 50MB");
		if (!isValidType) return toast.error("Solo puedes subir imagenes");

		setFileName(file.name);

		const readerPic = new FileReader();
		readerPic.onloadend = async () => {
			setSelectedFile(readerPic.result);
		};
		readerPic.readAsDataURL(file);
	};

	const handleUpdateProfile = () => {
		if (!selectedFile) return toast.error("Debes Selecionar una imagen");
		updateUser({ profilePic: selectedFile });
		close();
	};

	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar mi Foto de Perfil </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Control
					type="file"
					data-browse="Subir"
					accept=".jpg, .jpge, .gif,.png, .svg"
					label={fileName}
					onChange={handleFileChange}
				/>
				<p>Previsualizar image</p>
				<img
					style={{
						width: "460px",
						height: "300px",
						borderRadius: "20px",
						display: "flex",
						margin: "auto",
						objectFit: "cover",
						border: "solid 1px black"
					}}
					src={selectedFile}
					alt="profile"
				/>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => close()}>
					Cancelar
				</button>
				<button className="btn btn-danger" onClick={handleUpdateProfile}>
					Actualizar Imagen
				</button>
			</Modal.Footer>
		</Modal>
	);
};
