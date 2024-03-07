import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "value",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    boxVariant: "inverted",
  },
};

export const Inverted: Story = {
  args: {
    boxVariant: "inverted",
  },
};

export const Underlined: Story = {
  args: {
    boxVariant: "underlined",
  },
};
