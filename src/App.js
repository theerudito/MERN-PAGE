import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Componenetes/Auth/AuthProvider";
import { ReactRouterApp } from "./Componenetes/Router/ReactRouter";
import { LayoutApp } from "./Componenetes/Layout/Layout";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
	return (
		<div className="App">
			<h1>MERM</h1>
			<BrowserRouter>
				<AuthProvider>
					<LayoutApp>
						<ReactRouterApp />
					</LayoutApp>
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
}
