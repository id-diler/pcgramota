import { FC, useState } from "react";

export interface AccordionElementProps {
	title: string,
	description: string
}

export const AccordionElement: FC<AccordionElementProps> = ( props ) => {
	
	const {title, description} = props;
	const [ isPanelVisible, setIsPanelVisible ] = useState<boolean>( false );
	
	const accordionHandler = (): void => {
		setIsPanelVisible( state => !state );
	};
	
	
	return (
		<>
			<button className="accordion" onClick={ accordionHandler }>{ title }</button>
			{ isPanelVisible &&
			(
				<div className="panel">
					<p>{ description }</p>
				</div>
			)
			}
		</>
	);
};