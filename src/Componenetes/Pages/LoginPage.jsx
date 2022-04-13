import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const userCretential = {};

export const LoginPageApp = () => {
	const location = useLocation();

	const { Login } = useAuth();
	return (
		<div>
			<h4>LoginPage</h4>
			<button onClick={() => Login(userCretential, location.state?.from)}>
				Iniciar Seccion
			</button>
		</div>
	);
};
