//import axios from 'axios';

function getSyncData(){
	return [
		{"name":"Bug 0 ","isClosed":false,"createdAt":"2018-11-22T09:35:33.708Z"},
		{"name":"Bug 1","isClosed":false,"createdAt":"2018-11-22T09:35:35.898Z"},
		{"name":"Bug 2","isClosed":false,"createdAt":"2018-11-22T09:35:37.361Z"},
		{"name":"Bug 3","isClosed":false,"createdAt":"2018-11-22T09:35:41.328Z"}
	];
}
export function load(){
	let bugs = getSyncData();
	let action = { type : 'LOAD', payload : bugs};
	return action;
}