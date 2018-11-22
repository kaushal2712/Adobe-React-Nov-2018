export function addNew(newBugName){
	var newBug = {
		name : newBugName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW', payload : newBug};
	return action;
};