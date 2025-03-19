import { View } from "@/components/ui/common/View/View";
import { useEffect } from "react";
import { mmkv } from "./_layout";
import { Redirect, useRouter } from "expo-router";

const GatewayScreen = () => {
  console.log("GatewayScreen");
  const router = useRouter();

  const accessToken = mmkv.getString("accessToken");
  if (accessToken) {
    if (!mmkv.getString("gymId")) {
      return <Redirect href="/gym-select" />;
    }

    return <Redirect href="/(tabs)/my" />;
  } else {
    return <Redirect href="/login" />;
  }
};

export default GatewayScreen;
