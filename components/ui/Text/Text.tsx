import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

const text = cva(["text-black", "dark:text-white"], {
  variants: {
    variant: {
      default: ["text-base", "leading-6", "font-pretendard-regular"],
      defaultSemiBold: ["text-base", "font-pretendard-semibold"],
      title: ["text-3xl", "font-pretendard-bold"],
      subtitle: ["text-xl", "font-bold"],
      link: ["leading-7", "text-base", "text-[`#0a7ea4`]"],
    },
    fontWeight: {
      ultralight: ["font-pretendard-extralight"],
      thin: ["font-pretendard-thin"],
      light: ["font-pretendard-light"],
      medium: ["font-pretendard-medium"],
      regular: ["font-pretendard-regular"],
      semibold: ["font-pretendard-semibold"],
      bold: ["font-pretendard-bold"],
      heavy: ["font-pretendard-extrabold"],
      black: ["font-pretendard-black"],
    },
    color: {
      primary: ["text-primary"],
      secondary: ["text-secondary"],
      success: ["text-success"],
      warning: ["text-warning"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TextProps = RNTextProps & VariantProps<typeof text>;

export function Text({ className, variant, fontWeight, ...rest }: TextProps) {
  return (
    <RNText className={text({ className, variant, fontWeight })} {...rest} />
  );
}
