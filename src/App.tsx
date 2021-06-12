import React from 'react';
import './App.css';
import { AccordionItems } from "./interfaces/Accordion.interface";
import { Accordion } from "./components/accordion/Accordion";

const accordionData: AccordionItems = [
  {
    title: 'Section 1',
    description: 'Lorem ipsum1...'
  },
  {
    title: 'Section 2',
    description: 'Lorem ipsum2...'
  },
  {
    title: 'Section 3',
    description: 'Lorem ipsum3...'
  },
]

function App() {
  return (
    <Accordion data={accordionData}/>
  );
}

export default App;
