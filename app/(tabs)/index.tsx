import { View } from "@/components/ui/View/View";
import { Text } from "@/components/ui/Text/Text";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { SplashScreen, useRouter } from "expo-router";
import { useEffect } from "react";

const HomeScreen = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  const router = useRouter();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {},
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
