export function toggle(bug){
	let toggledBug = {...bug, isClosed : !bug.isClosed};
	let action = { type : 'UPDATE', payload : {oldBug : bug, newBug:toggledBug}};
	return action;
}