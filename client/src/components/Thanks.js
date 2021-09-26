import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
	return (
		<>
			<div className="bg-white rounded-md p-8 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Thanks for reaching out!</h3>
				<p className="my-4">
					<Link to="/" className="accent">
						&#8592; Go back home
					</Link>
				</p>
			</div>
		</>
	);
};

export default Thanks;
