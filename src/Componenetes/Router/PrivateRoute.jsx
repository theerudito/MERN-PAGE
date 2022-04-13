import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import { RutasApp } from "../Helpers/Rutas";

export const PrivateRoute = ({ children, hasRole: roles }) => {
	const location = useLocation();
	//console.log(location);

	const { hasRole, isLogged } = useAuth();

	if (roles && !hasRole(roles)) return <Navigate to={RutasApp.home} />;
	if (!isLogged())
		return <Navigate to={RutasApp.login} state={{ from: location }} />;

	return children;
};
