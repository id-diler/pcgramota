const apiURL = 'https://api.todoist.com/rest/v1/';

const getResource = async ( url: string ) => {
	const res = await fetch(
		`${ apiURL }${ url }`,
		{headers: {"Content-Type": "application/json", "Authorization": `Bearer ${ process.env.REACT_APP_TOKEN }`}},
	);
	if ( !res.ok ) throw new Error( `Could not fetch ${ url }, received ${ res.status }` );
	return await res.json();
};


export interface projectsProps {
	id: number,
	name: string,
	color: string,
	comment_count: number,
	shared: boolean
	url: string
}

export const getAllProjects = async () => {
	return transformProjects( await getResource( `projects` ) );
};

const transformProjects = ( props: [] ) => {
	return props.map( ( {id, name, color, comment_count, shared, url}: projectsProps ) => ({
			id,
			name,
			color,
			comment_count,
			shared,
			url,
		}),
	);
};