import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RolesApp } from "../Helpers/Roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	// Login
	const Login = (userCretential, fromLocation) => {
		setUser({
			id: 1,
			name: "Jorge Loor",
			email: "erudito@papa.com",
			role: RolesApp.regular
		});
		if (fromLocation) {
			navigate(fromLocation, { replace: true });
		}
	};
	// Login

	// Logout
	const Logout = () => {
		setUser(null);
	};
	// Logout

	// update user
	const updateUser = (data) => {
		setUser({
			...user,
			...data
		});
	};

	// Comprobar si esta logiado
	const isLogged = () => !!user;
	const hasRole = (role) => user?.role === role;
	// Comprobar si esta logiado

	const contextValue = { user, updateUser, isLogged, hasRole, Login, Logout };

	return (
		<AuthContext.Provider value={contextValue}>
			{children}{" "}
		</AuthContext.Provider>
	);
}
