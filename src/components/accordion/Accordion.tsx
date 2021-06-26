import './Accordion.css';
import { AccordionElement, AccordionElementProps } from "./AccordionElement";
import { FC } from "react";

export interface AccordionProps extends Array<AccordionElementProps> {
}


// @ts-ignore
export const Accordion: FC<AccordionProps> = ( {accordionData}: AccordionProps ) => {
	
	return accordionData.map( ( value: AccordionElementProps, index: number ) => <AccordionElement { ...value } key={ index }/> );
};