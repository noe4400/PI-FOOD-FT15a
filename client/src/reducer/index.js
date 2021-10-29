const initialState = {
  dietTypes: [],
  searchResults: [],
  isLoading: false,
  currentPage: 1,
  resultsPerPage: 10,
  pageNumbers: [],
  orderBy: "ASC",
  foundResults: true,
  serverErrors: null,
  filter: "ALL",
  totalResults: 0,
  postErr: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DIET_TYPES":
      return {
        ...state,
        dietTypes: [...action.payload],
      };
    case "GET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: [...action.payload],
        isLoading: false,
        foundResults: true,
        serverErrors: null,
        currentPage: 1,
      };

    case "CHANGE_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "FOUND_RESULTS":
      return {
        ...state,
        foundResults: false,
        isLoading: false,
        serverErrors: null,
      };

    case "SERVER _ERR":
      return {
        ...state,
        serverErrors: null,
        isLoading: false,
      };
    case "ORDER_ASC":
      return {
        ...state,
        isLoading: false,
        searchResults: state.searchResults.sort((a, b) =>
          a.title > b.title ? 1 : -1
        ),
      };
    case "ORDER_DESC":
      return {
        ...state,
        isLoading: false,
        searchResults: state.searchResults
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .reverse(),
      };
    case "ORDER_GS":
      return {
        ...state,
        isLoading: false,
        searchResults: state.searchResults.sort((a, b) =>
          a.score < b.score ? 1 : -1
        ),
      };
    case "ORDER_LS":
      return {
        ...state,
        isLoading: false,
        searchResults: state.searchResults
          .sort((a, b) => (a.score < b.score ? 1 : -1))
          .reverse(),
      };
    case "SET_ORDER":
      return {
        ...state,
        orderBy: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "POST_ERROR":
      return {
        ...state,
        postErr: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
