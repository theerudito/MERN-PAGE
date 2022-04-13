import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	password: yup
		.string("La Contraseña debeser un texto")
		.required("Debes Ingresar una contaseña")
		.min("La contraseña debe tener al menos 6 caracteres")
});

export default yupResolver(schema);
