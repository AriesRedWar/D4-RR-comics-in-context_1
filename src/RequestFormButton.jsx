import React, {  } from "react";
import StylesContext from "./Componets/StylesContext"


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}