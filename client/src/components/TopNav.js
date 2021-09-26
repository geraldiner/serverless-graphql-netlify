import React from "react";
import { LINKS } from "./constants/links";
import NavLink from "./NavLink";

const TopNav = () => {
	return (
		<>
			<div className="hidden z-10 w-8/12 lg:fixed lg:block bg-gray-900 text-white">
				<nav className="flex justify-center">
					{LINKS.map((link, i) => {
						return <NavLink key={i} index={i} label={link.name} to={link.path} exact={link.exact} />;
					})}
					<a
						className="w-1/4 text-center font-bold text-sm p-3 bg-blue hover:bg-gray-900 hover:text-white"
						href="../assets/GeraldineRagsac_Resume_2021.pdf"
						download
					>
						Resume
					</a>
				</nav>
			</div>
		</>
	);
};

export default TopNav;
