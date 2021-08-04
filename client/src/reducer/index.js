const initialState = {
	dietTypes: [],
	searchResults: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DIET_TYPES':
			return {
				...state,
				dietTypes: [...action.payload],
			};

		default:
			return {
				state,
			};
	}
};

export default reducer;
