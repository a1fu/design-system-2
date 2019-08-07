import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//style
import './scss/style.scss'

//components
import Menu from './components/menu'
import Home from './components/home'
import Test from './components/test'
import Grid from './components/grid'
import Flex from './components/flex'

function App() {
	return (
		<Router>
			<div className="grid">
				<div className="col-12 col-md-3">
					<Menu />
				</div>
				<div className="col-12 col-md-9">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/test" component={Test} />
						<Route exact path="/grid" component={Grid} />
						<Route exact path="/flex" component={Flex} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
