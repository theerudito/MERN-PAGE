import { Navigation } from "../Navigate/Navigation";

export const LayoutApp = ({ children }) => {
	return (
		<div>
			<Navigation />
			{children}
			{/* <h3>Footer</h3> */}
		</div>
	);
};
