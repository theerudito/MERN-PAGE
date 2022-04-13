import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import { RutasApp } from "../Helpers/Rutas";
export const Navigation = () => {
	const { Logout } = useAuth();
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
			<Navbar.Brand as={Link} to={RutasApp.home}>
				Home
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to={RutasApp.proyects}>
						Proyects
					</Nav.Link>
					<NavDropdown title="Admin">
						<NavDropdown.Item as={Link} to={RutasApp.admin.user}>
							Users
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link as={Link} to={RutasApp.login}>
						Login
					</Nav.Link>
					<Nav.Link as={Link} to={RutasApp.register}>
						Register
					</Nav.Link>
					<Nav.Link as={Link} to={RutasApp.account}>
						Account
					</Nav.Link>
					<Nav.Link as={Link} to={RutasApp.home} onClick={() => Logout()}>
						Cerrar Seccion
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
