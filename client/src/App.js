import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/landinpage/landingPage";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Pagination from "./components/Pagination/Pagination";
import RecipeForm from "./components/ActivityForm/RecipeForm";
import FilterBar from "./components/FilterBar/FilterBar";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/home" component={FilterBar} />
      <Route exact path="/home" component={Pagination} />
      <Route exact path="/home" component={Recipes} /> */}
      <Route exact path="/addRecipe" component={RecipeForm} />
      <Route path="/recipeDetails/:id" component={RecipeDetails} />
    </div>
  );
}

export default App;
