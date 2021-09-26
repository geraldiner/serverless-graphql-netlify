import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

const url =
	process.env.NODE_ENV !== "production" ? "http://localhost:4000" : "https://serverless-graphql-portfolio.netlify.app/.netlify/functions/graphql";

const client = new ApolloClient({
	uri: url,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
