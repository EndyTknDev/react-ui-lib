/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Box, { BoxProps } from "./Box";
import { BoxVariantsProps } from "./BoxVariant";

export type WithBoxProps = {
  boxProps?: BoxProps;
  boxVariant: BoxVariantsProps;
}

export const withBox = <P extends object>(WrapperComponent: React.ComponentType<P>) => {
  const WithBox: React.FC<P & WithBoxProps> = ({ boxVariant, boxProps, ...props }) => ((
    <Box {...boxProps} variant={boxVariant}>
      <WrapperComponent {...props as P} />
    </Box>
  ));
  WithBox.displayName = "With Box";
  WithBox.defaultProps = { boxProps: {} } as P;

  return WithBox;
};

export default withBox;
