import { cva, VariantProps } from "class-variance-authority";
import { View } from "../View/View";

const spacer = cva([], {
  variants: {
    h: {
      2: ["h-2"],
      4: ["h-4"],
      6: ["h-6"],
      8: ["h-8"],
      10: ["h-10"],
      12: ["h-12"],
    },
  },
});

type SpacerProps = {
  className?: string;
} & VariantProps<typeof spacer>;

export const Spacer = (props: SpacerProps) => {
  const { className, h } = props;

  return <View className={spacer({ className, h })} />;
};
