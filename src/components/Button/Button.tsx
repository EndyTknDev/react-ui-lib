/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { ButtonType } from "../../types/HTMLTypes";
import withBox from "../Box/WithBox";

export const BaseButton: React.FC<ButtonType> = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ type, children, ...props }, ref) => (
    <button ref={ref} type={type} {...props}>
      {children}
    </button>
  ),
);

const Button = styled(withBox<ButtonType>(BaseButton))`
  all: unset;
`;

export default Button;
