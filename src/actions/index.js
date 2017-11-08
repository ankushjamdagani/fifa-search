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

		fetch('http://worldcup.sfg.io/matches/country?fifa_code=' + countryStr)
		.then(resp => {
			if(resp.ok) {
				return resp.json();
			}
			else {
				console.log('ERROR ----> ', resp);

				let err = new Error();
	            err.name = resp.status;
	            err.message = resp.statusText;
	            err.headers = {};
	            resp.headers.forEach(function(val, key) {
	                err['headers'][key] = val
	            });

	            throw err;
			}
		})
		.then(resp => {
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