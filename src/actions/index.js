const searchBegin = () => ({
	type: 'SEARCH_BEGIN'
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

		fetch('http://worldcup.sfg.io/matches/')
		.then(resp => {
			if(!resp.ok) {
				console.log(resp);
				throw new Error(resp.statusText);
			}
			
			return resp.json();
		})
		.then(resp => {
			console.log('-------------------', resp)
			dispatch(searchSuccess(resp));
		})
		.catch(err => {
			console.log(err);
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