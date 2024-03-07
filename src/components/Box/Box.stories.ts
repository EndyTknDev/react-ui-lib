import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled: Story = {
  args: {
    boxStyle: "filled",
  },
};

export const Inverted: Story = {
  args: {
    boxStyle: "inverted",
  },
};

export const Underlined: Story = {
  args: {
    boxStyle: "underlined",
  },
};
