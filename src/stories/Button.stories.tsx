import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/ui/button/Button";
import BookmarkIcon from "../components/ui/button/BookmarkIcon";
import ArrowIcon from "../components/ui/button/ArrowIcon";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export default meta;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const PrimaryWithStartIcon: Story = {
  args: {
    ...Primary.args,
    startIcon: <BookmarkIcon />,
  },
};

export const SecondaryWithStartIcon: Story = {
  args: {
    ...Secondary.args,
    startIcon: <BookmarkIcon />,
  },
};

export const PrimaryWithEndIcon: Story = {
  args: {
    ...Primary.args,
    endIcon: <ArrowIcon />,
  },
};

export const SecondaryWithEndIcon: Story = {
  args: {
    ...Secondary.args,
    endIcon: <ArrowIcon />,
  },
};
