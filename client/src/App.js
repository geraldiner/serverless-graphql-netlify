import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Main from "./components/Main";
import Feed from "./components/Feed";
import About from "./components/About";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
	return (
		<Router>
			<div className="flex flex-wrap min-h-screen">
				<div className="sidebar w-full lg:w-1/3">
					<Sidebar />
				</div>
				<div className="w-full lg:w-2/3 flex flex-col">
					<TopNav />
					<div className="mt-4 mb-24 lg:mt-8">
						<Switch>
							<Route path="/" exact component={Main} />
							<Route path="/blog" component={Feed} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/thanks" component={Thanks} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
