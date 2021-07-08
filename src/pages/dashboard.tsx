import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { GetAllProjects } from "../services/ProjectService";

export const Dashboard: FC = () => {
	
	const {store} = useContext( Context );
	// const [ projectList, setProjectList ] = useState( {} );
	const [isLogging, setIsLogging] = useState(store.getIsAuth());
	
	
	useEffect( () => {
		//** всю проверку нужно делать - если не авторизован
		
		const code = window.location.search.split( "&" )[0].split( '=' )[1];
		const checkSecretString = window.location.search.split( "&" )[1].split( '=' )[1];
		
		if ( checkSecretString !== process.env.REACT_APP_TODOIST_STATE_SECRET_STRING ) {
			console.error( "It's not our API. Secret string!!!" );
		} else {
			store.login( code ).then(data => setIsLogging(data));
		}
		
	}, [] );
	
	
	const onClickHandler = () => GetAllProjects().then( console.log );
	
	return (
		<>
			<a onClick={ onClickHandler }>получить список проектов</a>
			{isLogging && <p>true123</p>}
		</>
	);
};
