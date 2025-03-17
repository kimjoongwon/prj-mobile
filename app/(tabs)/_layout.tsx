import { Tabs, useRouter } from "expo-router";
import { Platform } from "react-native";
import TabBarBackground from "@/components/ui/common/TabBarBackground/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HapticTab } from "@/components/ui/common/HapticTab/HapticTab";
import {
  Users,
  Calendar,
  CheckCheckIcon,
  User,
  LucideScanQrCode,
} from "lucide-react-native";
import { Button } from "@/components/ui/common/Button/Button";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        headerShown: true,
        headerLeft: () => (
          <Button onPress={() => router.push("/gym-select")}>가즈아</Button>
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "예약",
          tabBarIcon: ({ color }) => <Calendar size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ color }) => <Users size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "출석",
          tabBarIcon: ({ color }) => (
            <LucideScanQrCode size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="certification"
        options={{
          title: "인증",
          tabBarIcon: ({ color }) => <CheckCheckIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "마이",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
