let bugsDefaultState = {
	bugs : [],
	filter : false
};
function bugsReducer(currentState=bugsDefaultState, action){
	if (action.type === 'LOAD'){
		return {...currentState, bugs : action.payload};
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = { ...currentState, bugs : [...currentState.bugs, newBug] };
		return newState;
	}
	if (action.type === 'UPDATE'){
		let { oldBug, newBug } = action.payload;
		let newbugs = currentState.bugs.map(bug => bug === oldBug ? newBug : bug);
		let newState = { ...currentState, bugs : newbugs }
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newBugs = currentState.bugs.filter(bug => bug.id !== bugToRemove.id);
		let newState = { ...currentState, bugs : newBugs }
		return newState;
	}
	if (action.type === 'TOGGLE_FILTER'){
		let newState = {...currentState, filter : !currentState.filter};
		return newState;
	}
	return currentState;
}

export default bugsReducer;
