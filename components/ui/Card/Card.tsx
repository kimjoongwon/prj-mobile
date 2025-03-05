import { cva, VariantProps } from "class-variance-authority";
import { View } from "../View/View";
import { ClassProp } from "class-variance-authority/dist/types";

const card = cva([
  "bg-light-content1",
  "dark:bg-dark-content3",
  "p-6",
  "rounded-md",
  "shadow-inner",
  "gap-y-4",
]);

type CardProps = VariantProps<typeof card> & {
  children: React.ReactNode;
  className?: ClassProp | undefined;
};

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return <View className={card(className)}>{children}</View>;
};
