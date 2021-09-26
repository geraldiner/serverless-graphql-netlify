import React from "react";
import { BarLoader } from "react-spinners";

const Loading = ({ loading, source }) => {
	return (
		<>
			{loading ? (
				<section>
					<BarLoader color={"#006a9a"} />
					<span>Loading data from {source}</span>
				</section>
			) : null}
		</>
	);
};

export default Loading;
