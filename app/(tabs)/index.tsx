import ParallaxScrollView from "@/components/ui/ParallaxScrollView/ParallaxScrollView";
import { View } from "@/components/ui/View/View";
import { Text } from "@/components/ui/Text/Text";
import { Image, StyleSheet, Platform } from "react-native";

export default function HomeScreen() {
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
      <Text variant="title" fontWeight="black">
        안녕
      </Text>
      <View className="flex">
        <View>
          <Text variant="title">Welcome1</Text>
        </View>
        <View>
          <Text variant="title">Welcome2</Text>
        </View>
      </View>
      <View style={styles.stepContainer}>
        <Text
          variant="subtitle"
          style={{
            fontWeight: "ultralight",
          }}
        >
          Step 1: Try it-
        </Text>
        <Text>
          Edit <Text variant="defaultSemiBold">app/(tabs)/index.tsx</Text> to
          see changes. Press{" "}
          <Text variant="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text variant="subtitle">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text variant="subtitle">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{" "}
          <Text variant="defaultSemiBold">npm run reset-project</Text> to get a
          fresh <Text variant="defaultSemiBold">app</Text> directory. This will
          move the current <Text variant="defaultSemiBold">app</Text> to{" "}
          <Text variant="defaultSemiBold">app-example</Text>.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

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
