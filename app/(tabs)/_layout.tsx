import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HapticTab } from "@/components/ui/HapticTab/HapticTab";
import { Camera, CameraIcon, CircuitBoard } from "lucide-react-native";
import { icons, LucideProps } from "lucide-react-native";
import { ColorValue } from "react-native";

interface IconProps {
  name: keyof typeof icons;
  color?: ColorValue;
  size?: LucideProps["size"];
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: React.FC<LucideProps & { color?: ColorValue }> =
    icons[name];

  return <LucideIcon color={color} size={size} />;
};
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        headerShown: false,
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
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ color }) => (
            <Icon name="Cable" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "출석",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="qrcode" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="certification"
        options={{
          title: "인증",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill.badge.plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "마이",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
