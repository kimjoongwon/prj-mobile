import ParallaxScrollView from "@/components/ui/ParallaxScrollView/ParallaxScrollView";
import { View } from "@/components/ui/View/View";
import { Text } from "@/components/ui/Text/Text";
import { Image, StyleSheet } from "react-native";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "expo-router";

const HomeScreen = observer(() => {
  const localstate = useLocalObservable(() => ({
    value: "",
  }));
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Button disabled variant="default">
        Default
      </Button>
      <Button variant="default" onPress={() => router.push("/login")}>
        onPress
      </Button>
      <Button variant="solid">Solid</Button>
      <Button variant="bordered">Bordered</Button>
      <Button variant="light">Light</Button>
      <Input
        state={localstate}
        path="value"
        label={"이메일"}
        placeholder="hahah"
      />
      <Text>{localstate.value}</Text>
      <View className="h-20 w-20 items-center justify-center dark:bg-dark-content4 bg-light-content4">
        <Text>Content4</Text>
      </View>
      <View className="h-20 w-20 items-center justify-center dark:bg-dark-content3 bg-light-content3">
        <Text>Content3</Text>
      </View>
      <View className="h-20 w-20 items-center justify-center dark:bg-dark-content2 bg-light-content2">
        <Text>Content2</Text>
      </View>
      <View className="h-20 w-20 items-center justify-center dark:bg-dark-content1 bg-light-content1">
        <Text>Content1</Text>
      </View>
    </ParallaxScrollView>
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
