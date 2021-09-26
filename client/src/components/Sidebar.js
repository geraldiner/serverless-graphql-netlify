import React from "react";
import { useQuery } from "@apollo/client";
import { AboutQuery } from "../queries/github-queries";
import Loading from "./Loading";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LINKS, SOCIALS } from "./constants/links";

const Sidebar = () => {
	const { loading, error, data } = useQuery(AboutQuery);
	const me = data && data.getAbout;

	return (
		<>
			{/* Mobile Parts */}
			<div className="lg:hidden">
				<div className="text-white bg-transparent align-center p-4">
					<h1 className="text-lg">Geraldine.</h1>
				</div>
			</div>
			{/* Default Styles */}
			<div className="text-center min-w-min lg:ml-32 lg:mt-16 lg:fixed lg:w-1/5 lg:text-left">
				<section id="top-desc" className="p-3 bg-white rounded-md m-4 ">
					<Loading loading={loading} source="GitHub" />
					{error && `Error! ${error.message}`}
					<h1 className="hidden lg:text-5xl lg:block my-3">{data && me.name}.</h1>
					<h2 className="text-lg lg:text-2xl my-2 lg:my-5">Full-Stack Software Engineer</h2>
					<p className="text-sm lg:text-base">{data && me.bio}</p>
				</section>
				<section id="social-links" className="hidden bg-white rounded-md m-4 lg:flex lg:justify-center lg:items-center">
					{SOCIALS.map((social, i) => {
						return (
							<a
								key={i}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-center text-2xl p-3 rounded-sm w-1/${SOCIALS.length}`}
							>
								<FontAwesomeIcon icon={["fab", social.name]} className={`${social.name}  hover:text-yellow-400`} />
							</a>
						);
					})}
				</section>
				<section className="hidden lg:block bg-white rounded-md m-4 my-3">
					{me && (
						<div className="py-2 px-3 flex">
							<span className="mr-2" dangerouslySetInnerHTML={{ __html: me.status.emojiHTML }}></span>
							<span className="text-sm">{`${me.status.message}`}</span>
						</div>
					)}
				</section>
			</div>
			{/* Mobile Parts */}
			<div className="fixed left-0 bottom-0 z-10 lg:hidden">
				<nav className="flex w-screen justify-around bg-gray-900 text-white">
					{LINKS.map((link, i) => {
						return <NavLink key={i} index={i} label={link.name} to={link.path} exact={link.exact} />;
					})}
					<a
						className="w-1/4 text-center font-bold text-sm p-3 bg-blue hover:bg-gray-900  hover:text-white"
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

export default Sidebar;
