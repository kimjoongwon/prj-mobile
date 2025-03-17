import { cva, VariantProps } from "class-variance-authority";
import { View } from "../View/View";

const card = cva([
  "p-6",
  "bg-light-content1",
  "dark:bg-dark-content3",
  "rounded-lg",
  "gap-y-4",
  "active:opacity-50",
  "shadow-sm",
  "elevation-xl",
  "pointer-events-none",
]);

type CardProps = VariantProps<typeof card> & {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <View
      className={card({
        className,
      })}
    >
      {children}
    </View>
  );
};
