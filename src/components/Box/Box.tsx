/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DivType } from "../../types/HTMLTypes";
import BoxVariant, { BoxVariantsProps } from "./BoxVariant";

export type BoxProps = {
  boxStyle: BoxVariantsProps;
} & DivType;

/**
@extends {React.Component<BoxProps>}
*/
export const Box: React.FC<BoxProps> = styled.button<BoxProps>`${({ boxStyle }) => BoxVariant[boxStyle]}`;

Box.defaultProps = {
  boxStyle: "inverted",
};

Box.displayName = "Box";

Box.propTypes = {
  /**
   * Style of Box which is div component, may be one of:
   * @type {'filled' | 'inverted' | 'underlined'}
   */
  boxStyle: PropTypes.oneOf<BoxVariantsProps>(Object.keys(BoxVariant) as BoxVariantsProps[]).isRequired,
};

export default Box;
