const initialState = {
	dietTypes: [],
	searchResults: [],
	isLoading: false,
	currentPage: 1,
	resultsPerPage: 10,
	pageNumbers: [],
	foundResults: true,
	serverUp: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DIET_TYPES':
			return {
				...state,
				dietTypes: [...action.payload],
			};
		case 'GET_SEARCH_RESULTS':
			return {
				...state,
				searchResults: [...action.payload],
				isLoading: false,
				foundResults: true,
				serverUp: true,
			};

		case 'CHANGE_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			};
		case 'FOUND_RESULTS':
			return {
				...state,
				foundResults: false,
				isLoading: false,
				serverUp: true,
			};

		case 'SERVER_UP':
			return {
				...state,
				serverUp: false,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default reducer;
