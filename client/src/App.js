import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/landinpage/landingPage';
function App() {
	return <Route exact path='/' component={LandingPage} />;
}

export default App;
