import React from "react";
import "./Button.scss";

export default function Button({
  children,
  buttonType = "",
  method, dataTestId, 
  ...props
}) {
  return (
    <button className={"btn-" + buttonType} onClick={method} {...props} data-testid={dataTestId}>
      {children}
    </button>
  );
}
