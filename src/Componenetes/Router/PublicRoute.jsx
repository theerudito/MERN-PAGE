import { Navigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import { RutasApp } from "../Helpers/Rutas";

export const PublicRoute = ({ children }) => {
	const { isLogged } = useAuth();
	if (isLogged()) return <Navigate to={RutasApp.proyects} />;
	return children;
};
