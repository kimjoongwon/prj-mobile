import { View } from "@/components/ui/common/View/View";
import { Text } from "@/components/ui/common/Text/Text";
import { observer } from "mobx-react-lite";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/common/Button/Button";
import { SheetManager } from "react-native-actions-sheet";

const HomeScreen = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  return (
    <View>
      <Button onPress={() => SheetManager.show("gyms")}>Action Sheet</Button>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;
