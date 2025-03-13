import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "../ui/common/View/View";

type ScreenContainerProps = {
  children: React.ReactNode;
};

export const ScreenContainer = (props: ScreenContainerProps) => {
  const { children } = props;

  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex flex-1 dark:bg-dark-background bg-light-background px-5"
      style={{ paddingTop: insets.top }}
    >
      {children}
    </View>
  );
};
