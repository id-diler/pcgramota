import axios from "axios";

const API_URL_AUTH = "https://todoist.com/oauth";
export const $authApi = axios.create( {
	baseURL: API_URL_AUTH,
} );

$authApi.interceptors.request.use(
	( config ) => {
		config.method = "POST";
		config.headers = {
			"Content-Type": "application/json",
		};
		return config;
	},
	async ( e ) => {
		console.log( e.config );
	},
);

$authApi.interceptors.response.use( data => {
	
	return data;
}, reject => {
	
	console.error( `ERROR ApiAuth response: ${ reject.request.baseURL }, ${ reject.request.method }` );
	
} );