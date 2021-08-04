import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/landinpage/landingPage';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
function App() {
	return (
		<div>
			<Route path='/' component={Nav} />
			<Route exact path='/' component={LandingPage} />
			<Route exact path='/home' component={Home} />
		</div>
	);
}

export default App;
