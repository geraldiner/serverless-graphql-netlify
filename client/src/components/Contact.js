import React from "react";

const Contact = () => {
	return (
		<>
			<div className="bg-white rounded-md p-8 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Let's chat!</h3>
				<form name="contact" method="post" className="space-y-5" netlify-honeypot="bot-field" data-netlify="true" action="/thanks/">
					<input type="hidden" name="form-name" value="contact" />
					<p className="hidden">
						<label>
							Don’t fill this out if you’re human: <input name="bot-field" />
						</label>
					</p>
					<div>
						<label htmlFor="name" className="block mb-1 font-bold text-gray-500">
							Name
						</label>
						<input name="name" type="text" className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue" />
					</div>

					<div>
						<label htmlFor="email" className="block mb-1 font-bold text-gray-500">
							Email
						</label>
						<input type="email" name="email" className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue" />
					</div>

					<div>
						<label htmlFor="message" className="block mb-1 font-bold text-gray-500">
							Message
						</label>
						<textarea
							name="message"
							className="form-textarea w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue"
							rows="3"
						></textarea>
					</div>
					<button
						type="submit"
						className="block w-full bg-blue hover:bg-yellow p-4 rounded text-white font-bold hover:text-gray-900 transition duration-300"
					>
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
