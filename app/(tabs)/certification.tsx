import ParallaxScrollView from "@/components/ui/ParallaxScrollView/ParallaxScrollView";
import { StyleSheet, Image, Platform } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol/IconSymbol";
import { View } from "@/components/ui/View/View";
import { Text } from "@/components/ui/Text/Text";
import { Collapsible } from "@/components/ui/Collapsible/Collapsible";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";

export default function Certification() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text variant="title">Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens:{" "}
          <Text variant="defaultSemiBold">app/(tabs)/index.tsx</Text> and{" "}
          <Text variant="defaultSemiBold">app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in{" "}
          <Text variant="defaultSemiBold">app/(tabs)/_layout.tsx</Text> sets up
          the tab navigator.
        </Text>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text variant="link">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text variant="defaultSemiBold">w</Text> in the
          terminal running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the{" "}
          <Text variant="defaultSemiBold">@2x</Text> and{" "}
          <Text variant="defaultSemiBold">@3x</Text> suffixes to provide files
          for different screen densities
        </Text>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Text variant="link">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Text>
          Open <Text variant="defaultSemiBold">app/_layout.tsx</Text> to see how
          to load{" "}
          <Text style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </Text>
        </Text>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <Text variant="link">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{" "}
          <Text variant="defaultSemiBold">useColorScheme()</Text> hook lets you
          inspect what the user's current color scheme is, and so you can adjust
          UI colors accordingly.
        </Text>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Text variant="link">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{" "}
          <Text variant="defaultSemiBold">components/HelloWave.tsx</Text>{" "}
          component uses the powerful{" "}
          <Text variant="defaultSemiBold">react-native-reanimated</Text> library
          to create a waving hand animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The{" "}
              <Text variant="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </Text>{" "}
              component provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
