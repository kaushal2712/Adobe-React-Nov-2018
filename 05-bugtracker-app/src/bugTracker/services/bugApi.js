import axios from 'axios';
const serviceUrl = 'http://localhost:3030/bugs';

export function getAll(){
	return axios.get(serviceUrl)
			.then(response => response.data)
}

export function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(serviceUrl, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${serviceUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

export function remove(bugData){
	return axios
			.delete(`${serviceUrl}/${bugData.id}`)
			.then(response => response.data);
}