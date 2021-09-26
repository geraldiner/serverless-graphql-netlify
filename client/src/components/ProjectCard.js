import React from "react";

const ProjectCard = ({ name, commitCount, description, homepageUrl, languages, imageUrl, topics, updatedAt, repoUrl }) => {
	return (
		<>
			<div className="text-center mb-8 lg:mx-16 lg:text-left">
				<div className="w-full p-3 rounded-t-md bg-white">
					<h3 className="text-2xl lg:text-3xl my-3">
						{name
							.split("-")
							.map(w => w[0].toUpperCase().concat(w.slice(1)))
							.join(" ")}
					</h3>
					<p className="my-2">{description}</p>
					<img className="my-4" src={imageUrl} alt={description} />
					<p className="my-4">
						Last updated <span className="accent font-bold">{updatedAt}</span> with <span className="accent font-bold">{commitCount} commits</span>
					</p>
					{topics.length > 0 && (
						<p className="py-3 border-t-2 border-gray-900">
							{topics.map((topic, i) => {
								return (
									<span key={i} className="accent">
										#{topic.topic.name}{" "}
									</span>
								);
							})}
						</p>
					)}
				</div>
				<div className="flex-1 text-center">
					<a
						href={repoUrl ? repoUrl : `#`}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-block hover:bg-gray-600 ${
							homepageUrl ? "w-1/2 rounded-bl-md" : "w-full rounded-b-md"
						} p-3 bg-blue-dark text-white font-bold`}
					>
						{`</>`} Code
					</a>
					{homepageUrl && (
						<a
							href={homepageUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-br-md inline-block w-1/2 p-3 bg-yellow text-white font-bold hover:bg-gray-600"
						>
							Live Site
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
