import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/landinpage/landingPage';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Pagination from './components/Pagination/Pagination';
function App() {
	return (
		<div>
			<Route path='/' component={Nav} />
			<Route exact path='/' component={LandingPage} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/home' component={Pagination} />
			<Route exact path='/home' component={Recipes} />
		</div>
	);
}

export default App;
