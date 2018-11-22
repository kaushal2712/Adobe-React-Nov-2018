import React, { Component } from 'react';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './actions';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, removeClosed, addNew, bugsCount, toggleFilter, filtered } = this.props;
		let filterButtonValue = filtered ? 'Remove Filter' : 'Apply Filter';
		return(
			<div>
				<BugStats {...{bugs, bugsCount}} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<input type="button" value={filterButtonValue} onClick={() => toggleFilter()} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

function mapStateToBugTrackerProps(appState){
	let bugs = appState.bugsData.bugs;
	let spinnerValue = appState.spinnerData;
	if(appState.bugsData.filter){
		return { 
			bugs : bugs.filter((bug, index) => index % 2 === spinnerValue % 2), 
			bugsCount : bugs.length, 
			filtered : appState.bugsData.filter 
		};
	} 
	return { 
		bugs : bugs, 
		bugsCount : bugs.length, 
		filtered : appState.bugsData.filter
	};

}

/* Action Creation for BugTracker*/
function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);