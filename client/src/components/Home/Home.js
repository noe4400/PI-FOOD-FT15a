import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { getDietTypes, searchBy, setLoading } from "../../actions";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import FilterBar from "../FilterBar/FilterBar";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getDietTypes());
    dispatch(searchBy());
  }, [dispatch]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">{/* <h1>Love cooking?</h1> */}</div>
      </div>
      <FilterBar />
      <Pagination />
      <Recipes />
    </>
  );
};
export default Home;
