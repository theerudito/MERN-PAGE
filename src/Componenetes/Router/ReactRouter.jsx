import { Routes, Route } from "react-router-dom";
import { RolesApp } from "../Helpers/Roles";
import { RutasApp } from "../Helpers/Rutas";
import { AccountPageApp } from "../Pages/AccountPage";
import { HomePageApp } from "../Pages/HomePage";
import { LoginPageApp } from "../Pages/LoginPage";
import { Page404App } from "../Pages/Page404";
import { ProyectPageApp } from "../Pages/ProyectPage";
import { RegisterApp } from "../Pages/RegisterApp";
import { UserPageApp } from "../Pages/Users/UsersPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const ReactRouterApp = () => {
	return (
		<div>
			{/* <BrowserRouter> */}

			<Routes>
				<Route path={RutasApp.home} element={<HomePageApp />} />
				<Route
					path={RutasApp.login}
					element={
						<PublicRoute>
							{" "}
							<LoginPageApp />
						</PublicRoute>
					}
				/>
				<Route
					path={RutasApp.register}
					element={
						<PublicRoute>
							{" "}
							<RegisterApp />{" "}
						</PublicRoute>
					}
				/>

				<Route
					exact
					path={RutasApp.account}
					element={
						<PrivateRoute>
							{" "}
							<AccountPageApp />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path={RutasApp.proyects}
					element={
						<PrivateRoute>
							{" "}
							<ProyectPageApp />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path={RutasApp.proyect()}
					element={
						<PrivateRoute>
							{" "}
							<ProyectPageApp />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path={RutasApp.admin.user}
					element={
						<PrivateRoute hasRole={RolesApp.admin}>
							<UserPageApp />
						</PrivateRoute>
					}
				/>

				<Route path="*" element={<Page404App />} />
			</Routes>

			{/* </BrowserRouter> */}
		</div>
	);
};
