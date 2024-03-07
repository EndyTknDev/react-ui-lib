/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ButtonType } from "../../types/HTMLTypes";

const Button: React.FC<ButtonType> = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ type, children, ...props }, ref) => (
    <button ref={ref} type={type} {...props}>
      {children}
    </button>
  ),
);

export default Button;
