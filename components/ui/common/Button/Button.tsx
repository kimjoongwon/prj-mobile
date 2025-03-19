import React from "react";
import { Pressable, PressableProps as RNPressableProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { Text } from "@/components/ui/common/Text/Text";

export const button = cva(
  [
    "h-10",
    "px-4",
    "min-w-20",
    "dark:bg-dark-default",
    "bg-light-default",
    "rounded-md",
    "items-center",
    "justify-center",
    "active:opacity-50",
  ],
  {
    variants: {
      variant: {
        bordered: [
          "border-light-primary",
          "dark:border-dark-primary",
          "bg-transparent",
          "dark:bg-transparent",
          "border-2",
        ],
        solid: [],
        light: ["bg-transparent", "dark:bg-transparent"],
        default: [],
      },
      color: {
        default: ["dark:bg-dark-default", "bg-light-default"],
        primary: ["dark:bg-dark-primary", "bg-light-primary"],
        secondary: ["dark:bg-dark-secondary-500", "bg-light-secondary-500"],
        success: ["dark:bg-dark-success", "bg-light-success"],
        warning: ["dark:bg-dark-warning", "bg-light-warning"],
        danger: ["dark:bg-dark-danger", "bg-light-danger"],
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
      size: {
        sm: ["h-8", "px-3"],
        md: ["h-10", "px-4"],
        lg: ["h-12", "px-5"],
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
      disabled: false,
      size: "md",
    },
  }
);

export const text = cva([], {
  variants: {
    variant: {
      bordered: [],
      solid: [],
      light: [],
      default: [],
    },
    color: {
      default: ["dark:text-dark-default", "text-light-default"],
      primary: ["dark:text-dark-primary", "text-light-primary"],
      secondary: ["dark:text-dark-secondary-500", "text-light-secondary-500"],
      success: ["dark:text-dark-success", "text-light-success"],
      warning: ["dark:text-dark-warning", "text-light-warning"],
      danger: ["dark:text-dark-danger", "text-light-danger"],
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type ButtonProps = RNPressableProps & VariantProps<typeof button>;

export const Button = (props: ButtonProps) => {
  const { children, variant, color, disabled, className, size, ...rest } =
    props;

  console.log("variant", variant);
  console.log("color", color);
  console.log("text class", text({ variant, color }));
  return (
    <Pressable
      {...rest}
      className={button({ className, variant, color, disabled, size })}
    >
      {typeof children === "string" ? (
        <Text className={text({ variant, color })}>
          {typeof children === "string" && children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
