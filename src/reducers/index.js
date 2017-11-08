import { combineReducers } from 'redux';

const search = (state = {}, action) => {
	switch(action.type) {
		case 'SEARCH_BEGIN':
			return {
				...state,
				loading: true,
				error: null,
				results: []
			}
		case 'SEARCH_ERROR':
			return {
				...state,
				loading: false,
				error: action.payload,
				results: []
			}
		case 'SEARCH_SUCCESS':
			return {
				...state,
				loading: false,
				error: null,
				results: action.payload
			}
		default:
			return state;
	}
}

export default combineReducers({
	search
});