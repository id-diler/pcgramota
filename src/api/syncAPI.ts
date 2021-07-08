import axios from "axios";

const API_URL_AUTH = "https://api.todoist.com/sync/v8";
export const $syncApi = axios.create( {
	// withCredentials: false,
	baseURL: API_URL_AUTH,
} );

$syncApi.interceptors.request.use(
	( config ) => {
		config.headers = {
			"Content-Type": "application/json",
			"Authorization": `${ sessionStorage.getItem( "tokenType" ) } ${ sessionStorage.getItem( "token" ) }`,
			"Origin": "http://localhost:3000",
			
		};
		return config;
	},
	async ( e ) => {
		console.log( e.config );
	},
);

$syncApi.interceptors.response.use( data => {
	//** сделать проброс исключений и убрать из кода логирование
	
	if ( data.status !== 200 ) {
		console.error( `ERROR ApiAuth response: ${ data.request.baseURL }, ${ data.request.method }` );
	}
	
	return data;
} );