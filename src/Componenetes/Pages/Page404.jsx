import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RutasApp } from "../Helpers/Rutas";

export const Page404App = () => {
	return (
		<div>
			<Container className="mt-5">
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="text-center">
						<img
							style={{ width: "100%" }}
							src="/img/404-not-found.svg"
							alt="error404"
						/>
						<h2>¿Te Haz Perdido?</h2>
						<p>
							Volver al <Link to={RutasApp.home}>Inicio</Link>{" "}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
