import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "../Recipe/Recipe";
import { orderResults, setLoading } from "../../actions";
import "./Recipes.css";
import Loading from "../Loading/Loading";
const Recipes = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const foundResults = useSelector((state) => state.foundResults);
  const currentPage = useSelector((state) => state.currentPage);
  const resultsPerPage = useSelector((state) => state.resultsPerPage);
  let searchResults = useSelector((state) => state.searchResults);
  const orderBy = useSelector((state) => state.orderBy);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(orderResults(searchResults, orderBy));
  }, [dispatch, orderBy, searchResults]);

  console.log(indexOfFirstResult, indexOfLastResult);

  if (isLoading) {
    return <Loading />;
  }
  if (!foundResults) {
    return <h2 className="loading-message">Not results were found....</h2>;
  }
  if (filter !== "ALL") {
    searchResults = searchResults.filter((result) =>
      result.diets.includes(filter)
    );
  }

  const currrentRecipes = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const displayResults = currrentRecipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      name={recipe.title}
      img={
        recipe.image
          ? recipe.image
          : "data:image/jpeg;base64,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"
      }
      diets={recipe.diets}
    />
  ));
  console.log(currrentRecipes);
  return <div className="results-container">{displayResults}</div>;
};

export default Recipes;
