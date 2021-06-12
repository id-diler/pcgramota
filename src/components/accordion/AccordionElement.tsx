import { useState } from "react";

export const AccordionElement = ( { ...props } ): JSX.Element => {

  const { title, description } = props.value;
  const [ isPanelVisible, setIsPanelVisible ] = useState<boolean>( false )

  const accordionHandler = (): void => {
    setIsPanelVisible( state => !state )
  }


  let descriptionResult = isPanelVisible &&
    (
      <div className="panel">
        <p>{ description }</p>
      </div>
    )

  return (
    <>
      <button className="accordion" onClick={ accordionHandler }>{ title }</button>
      { descriptionResult }
    </>
  )
}