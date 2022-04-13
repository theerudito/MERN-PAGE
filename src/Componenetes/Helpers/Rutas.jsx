export const RutasApp = {
	home: "/",
	login: "/login",
	register: "/register",
	account: "/account",
	proyects: "/proyects",
	proyect: (proyectId) =>
		proyectId ? `/proyects/:${proyectId}` : "/proyects/:proyectId",
	admin: {
		user: "/admin/users"
	}
};
