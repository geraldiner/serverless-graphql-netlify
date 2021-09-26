import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavLink = ({ index, label, to, exact }) => {
	let match = useRouteMatch({
		path: to,
		exact: exact,
	});
	return (
		<>
			{match && ""}
			<Link to={to} className={`w-1/4 text-center text-sm p-3 hover:bg-yellow hover:text-white ${match ? "active" : ""}`}>
				{label}
			</Link>
		</>
	);
};

export default NavLink;
