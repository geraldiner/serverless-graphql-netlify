import React from "react";

const BlogCard = ({ domain, title, brief, coverImage, dateAdded, totalReactions, tags, slug }) => {
	return (
		<>
			<div className="text-center mb-8 lg:mx-16 lg:text-left">
				<div className="w-full p-3 rounded-t-md bg-white">
					<h3 className="text-2xl lg:text-3xl my-3">{title}</h3>
					<p className="my-2">{brief}</p>
					<img className="my-4" src={coverImage} alt={brief} />
					<p className="my-4">
						Posted <span className="accent font-bold">{dateAdded}</span> with{" "}
						<span className="accent font-bold">{`${totalReactions} ${totalReactions > 1 ? "reactions" : "reaction"}`}</span>
					</p>
					{tags.length > 0 && (
						<p className="py-3 border-t-2 border-gray-900">
							{tags.map((tag, i) => {
								return (
									<span key={i} className="accent">
										#{tag}{" "}
									</span>
								);
							})}
						</p>
					)}
				</div>
				<div className="text-center">
					<a
						href={`https://${domain}/${slug}`}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-b-md inline-block w-full p-3 bg-yellow text-white font-bold hover:bg-gray-600"
					>
						Read More
					</a>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
