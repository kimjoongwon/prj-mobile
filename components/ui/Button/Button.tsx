import React from "react";
import { Button as RNButton, ButtonProps as RNButtonProps } from "react-native";

interface ButtonProps extends RNButtonProps {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <RNButton {...props} />;
};
