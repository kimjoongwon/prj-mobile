import { cva, VariantProps } from "class-variance-authority";
import { Pressable } from "react-native";

const card = cva([
  "bg-light-content1",
  "dark:bg-dark-content3",
  "p-6",
  "rounded-lg",
  "shadow-inner",
  "gap-y-4",
  "active:opacity-50",
]);

type CardProps = VariantProps<typeof card> & {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <Pressable
      className={card({
        className,
      })}
    >
      {children}
    </Pressable>
  );
};
