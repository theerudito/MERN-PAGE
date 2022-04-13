import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RolesApp } from "./Roles";

const schema = yup.object().shape({
	name: yup
		.string("El Nombre debe ser un texto")
		.required("Debes Ingresar un nombre"),
	email: yup
		.string("El email debe ser un texto")
		.required("Debes Ingresar un email valido")
		.email("Debes ingresar un email valido"),

	role: yup
		.string("El Rol debe ser texto")
		//.required("Debes elegir un rol valido")
		.oneOf(Object.keys(RolesApp), "El rol no es valido elije otro")
});

export default yupResolver(schema);
