/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DivType } from "../../types/HTMLTypes";
import BoxVariant, { BoxVariantsProps } from "./BoxVariant";

export type BoxProps = {
  variant: BoxVariantsProps;
} & DivType;

/**
@extends {React.Component<BoxProps>}
*/
export const Box: React.FC<BoxProps> = styled.div<BoxProps>`${({ variant }) => BoxVariant[variant]}`;

Box.defaultProps = {
  variant: "inverted",
};

Box.displayName = "Box";

Box.propTypes = {
  /**
   * Style of Box which is div component, may be one of:
   * @type {'filled' | 'inverted' | 'underlined'}
   */
  variant: PropTypes.oneOf<BoxVariantsProps>(Object.keys(BoxVariant) as BoxVariantsProps[]).isRequired,
};

export default Box;
