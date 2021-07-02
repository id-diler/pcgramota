import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllProjects, projectsProps } from "./services/GetDataFromAPI";
import { Container } from "./components/layers/container/Container";
import { LeftMenu } from "./components/navigation/LeftMenu/LeftMenu";

export default function App() {
	
	// useEffect( () => {
	//
	// 	if ( !localStorage.getItem( "toDoIstAccessToken" ) ) {
	// 		const authUrl = `https://todoist.com/oauth/access_token
	// 		?client_id=${ process.env.REACT_APP_TODOIST_CLIENTID }
	// 		&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }
	// 		&code=${ process.env.REACT_APP_TOKEN }
	// 		&redirect_uri=http://localhost:3000`;
	//
	// 		fetch( authUrl, {
	// 			method: 'POST',
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 		} )
	// 			.then( res => res.json() )
	// 			.then( token => {
	// 				localStorage.setItem( "toDoIstAccessToken", token );
	// 				console.log( token );
	// 			} );
	// 	}
	//
	//
	// 	console.log(process.env.REACT_APP_TOKEN);
	// }, [] );
	//
	
	const [ allProjects, setAllProjects ] = useState<projectsProps[]>( [] );
	
	
	useEffect( () => {
		getAllProjects()
			.then( ( data ) => setAllProjects( data ) )
			.catch( console.log );
	}, [] );
	
	
	const printAllProjects = () => {
		return (
			// <LeftMenu {...allProjects}/>
			
			<ul>
				{ allProjects.map( ( value ) => <li key={ value.id }>{ value.name } { value.comment_count } { value.url }</li> ) }
			</ul>
		);
	};
	
	
	return (
		<Container>
			{ printAllProjects() }
		</Container>
	);
}
