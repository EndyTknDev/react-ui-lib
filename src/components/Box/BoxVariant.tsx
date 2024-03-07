import { css } from "styled-components";

const defaultStyle = css`
  min-width: 20px;
  min-height: 20px;
  width: fit-content;
  height: fit-content;
`;

export const Filled = css`
  ${defaultStyle}
  background-color: aliceblue;
`;

export const Inverted = css`
  ${defaultStyle}
  background-color: aquamarine;
`;

export const Underlined = css`
  ${defaultStyle}
  background-color: wheat;
`;

export const BoxVariants = {
  inverted: Inverted,
  filled: Filled,
  underlined: Underlined,
};

export type BoxVariantsProps = keyof typeof BoxVariants;

export default BoxVariants;
