import axios from "axios";
import swal from "sweetalert";

export function getDietTypes() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/types")
      .then((response) => {
        dispatch({
          type: "GET_DIET_TYPES",
          payload: response.data.map((e) => e.name),
        });
      })
      .catch((err) => {
        dispatch({
          type: "SERVER _ERR",
          payload: err,
        });
      });
  };
}

export function searchByName(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then((response) => {
        dispatch({
          type: "GET_SEARCH_RESULTS",
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if ((error.response.status = "404")) {
            return dispatch({
              type: "FOUND_RESULTS",
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        }
      });
  };
}
export function searchBy() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/recipes`)
      .then((response) => {
        dispatch({
          type: "GET_SEARCH_RESULTS",
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if ((error.response.status = "404")) {
            return dispatch({
              type: "FOUND_RESULTS",
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("unable to connect to the server, please try again!");
          console.log(error.request);
        }
      });
  };
}

export function postRecipe(obj) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3001/recipe", {
        title: obj.name,
        summary: obj.summary,
        score: obj.score,
        healthscore: obj.healthScore,
        instructions: obj.steps,
        dietTypes: obj.dietTypesArray,
      })
      .then((res) => {
        swal("Great!", "Your recipe was added successffuly!", "success");
        return dispatch({
          type: "POST_ERROR",
          payload: false,
        });
      })
      .catch((err) => {
        return dispatch({
          type: "POST_ERROR",
          payload: true,
        });
      });
  };
}

export function setLoading(param) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_LOADING",
      payload: param,
    });
  };
}

export function setPageNumbers(array) {
  return function (dispatch) {
    dispatch({
      type: "SET_PAGE_NUMBERS",
      payload: array,
    });
  };
}

export function setCurrentPage(currentPage) {
  return function (dispatch) {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: currentPage,
    });
  };
}
export function orderResults(results, order) {
  return function (dispatch) {
    dispatch({
      type: `ORDER_${order}`,
      payload: results,
    });
  };
}
export function setOrderBy(order) {
  return function (dispatch) {
    dispatch({
      type: "SET_ORDER",
      payload: order,
    });
  };
}

export function setFilter(filter) {
  return function (dispatch) {
    dispatch({
      type: "SET_FILTER",
      payload: filter,
    });
  };
}
