/*export function addNew(newBugName){
	var newBug = {
		name : newBugName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW', payload : newBug};
	return action;
};*/

import * as bugApi from '../services/bugApi';
export function addNew(newBugName){
	return function(dispatch){
		var newBugData = {
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		bugApi
			.save(newBugData)
			.then(newBug => {
				let action = { type : 'ADD_NEW', payload : newBug};
				dispatch(action);		
			})
		
	}
}