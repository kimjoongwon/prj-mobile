import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "../ui/common/View/View";
import { cva } from "class-variance-authority";

type ScreenContainerProps = {
  children: React.ReactNode;
  safeArea?: boolean;
  className?: string;
};

const screenContainer = cva([
  "flex flex-1 dark:bg-dark-background bg-light-background px-5",
]);

export const ScreenContainer = (props: ScreenContainerProps) => {
  const { children, safeArea, className } = props;

  const insets = useSafeAreaInsets();

  return (
    <View
      className={screenContainer({ className })}
      style={{ paddingTop: safeArea ? insets.top : 0 }}
    >
      {children}
    </View>
  );
};
