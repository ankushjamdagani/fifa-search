const searchBegin = (payload) => ({
	type: 'SEARCH_BEGIN',
	payload
})

const searchError = (payload) => ({
	type: 'SEARCH_ERROR',
	payload
})

const searchSuccess = (payload) => ({
	type: 'SEARCH_SUCCESS',
	payload
})

const searchByCountry = (countryStr) => {
	return (dispatch) => {
		dispatch(searchBegin());

		fetch('http://worldcup.sfg.io/matches/country?fifa_code=' + countryStr)
		.then(resp => resp.json())
		.then(resp => {
			if(resp.ok)
				dispatch(searchSuccess(resp));
			else
				dispatch(searchError(err));
		})
		.catch(err => {
			dispatch(searchError(err));
		})
	}
}

export default {
	searchBegin,
	searchError,
	searchSuccess,
	searchByCountry	
}