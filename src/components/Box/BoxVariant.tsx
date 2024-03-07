import { css } from "styled-components";

export const Filled = css`
  background-color: aliceblue;
`;

export const Inverted = css`
  background-color: aquamarine;
`;

export const Underlined = css`
  background-color: wheat;
`;

export const BoxVariants = {
  inverted: Inverted,
  filled: Filled,
  underlined: Underlined,
};

export type BoxVariantsProps = keyof typeof BoxVariants;

export default BoxVariants;
