import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigationContainerRef, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { useMMKVDevTools } from "@dev-plugins/react-native-mmkv";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-reanimated";
import "../global.css";
import "@/components/sheets";
import { SheetProvider } from "react-native-actions-sheet";

export const mmkv = new MMKV();
const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  useReactQueryDevTools(queryClient);
  useMMKVDevTools();

  const router = useRouter();
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    "Pretendard-Black": require("../assets/fonts/Pretendard-Black.otf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-ExtraBold": require("../assets/fonts/Pretendard-ExtraBold.otf"),
    "Pretendard-ExtraLight": require("../assets/fonts/Pretendard-ExtraLight.otf"),
    "Pretendard-Light": require("../assets/fonts/Pretendard-Light.otf"),
    "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Thin": require("../assets/fonts/Pretendard-Thin.otf"),
  });

  setColorScheme("light");

  const accessToken = mmkv.getString("accessToken");
  useEffect(() => {
    if (loaded) {
      if (accessToken) {
        router.replace("/(tabs)");
      } else {
        router.replace("/login");
      }
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <SheetProvider>
            <Stack>
              <Stack.Screen
                name="tenants"
                options={{
                  headerTitle: "지점",
                  headerShown: true,
                  presentation: "modal",
                }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </SheetProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
