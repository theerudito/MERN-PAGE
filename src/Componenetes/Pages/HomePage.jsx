import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";

export const HomePageApp = () => {
	return (
		<div>
			<Container className="mt-5">
				<Row>
					<Col xs={{ span: 12 }} className="mb-5">
						<h2>Bienvenid@ al gestor de tares</h2>
						<p>!Aqui podras gestionar tus proyectos¡</p>
						<p>
							Marcas tus tareas como terminadas, agregadas, eliminada, o
							actualizada
						</p>
						<div>
							Ingresa O <Link to={RutasApp.register}>Crea Una Cuenta</Link>
						</div>
						<Col>
							<img
								className="img-fluid"
								src="/img/task-manager.svg"
								alt="tareas"
							/>
						</Col>

						<p>Mejora tu prioridades</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
