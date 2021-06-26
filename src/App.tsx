import React from 'react';
import './App.css';
import { Accordion, AccordionProps } from "./components/accordion/Accordion";
import { FilterLists } from "./components/filter_lists/FilterLists";

const accordionData: AccordionProps = [
	{
		title: 'Section 1',
		description: 'Lorem ipsum1...',
	},
	{
		title: 'Section 2',
		description: 'Lorem ipsum2...',
	},
	{
		title: 'Section 3',
		description: 'Lorem ipsum3...',
	},
];

const lists: String[] = [
	"Adele",
	"Agnes",
	"Billy",
	"Bob",
	"Calvin",
	"Christina",
	"Cindy",
];

function App() {
	
	return (
		<>
			<Accordion
				// @ts-ignore
				accordionData={ accordionData }/>
			
			<FilterLists lists={ lists }/>
		</>
	);
}

export default App;
