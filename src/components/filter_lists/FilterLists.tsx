import React, { FC, useState } from "react";
import './FilterLists.css';

export interface FilterListsProps {
	lists: String[]
}

export const FilterLists: FC<FilterListsProps> = ( {lists} ) => {
	const [ listsSate, setListsSate ] = useState( lists );
	const result = listsSate.map( value => <li key={Math.floor(Math.random()*1000)+1000}><a href="/">{ value }</a></li> );
	
	const filteredLists = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		// console.log( e.target.value );
		setListsSate( lists.filter( value => value.toLowerCase().includes( e.target.value.toLowerCase() ) ) );
	};
	
	return (
		<>
			<input type="text" id="myInput" onChange={ filteredLists } placeholder="Search for names.."/>
			<ul id="myUL">
				{ result }
			</ul>
		</>
	);
};