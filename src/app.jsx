import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';
console.log(actions);

const App = () => (
	<div className="fifa-search">
		This is FIFA SEARCH
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		...state,
		...props
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		// ....dispatch
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
