import './Accordion.css';
import { AccordionItem } from "../../interfaces/Accordion.interface";
import { AccordionElement } from "./AccordionElement";

export const Accordion = ( { ...props } ): JSX.Element => {
  const { data } = props;
  return data.map( ( value: AccordionItem, index: number ) => <AccordionElement value={ value } key={index}/> );
}