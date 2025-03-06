import { Text } from "@/components/ui/Text/Text";
import { View } from "@/components/ui/View/View";
import { useRouter } from "expo-router";
import { useEffect } from "react";
// import { mmkv } from "./_layout";

const GatewayScreen = () => {
  const router = useRouter();

  // useEffect(() => {
  //   const accessToken = mmkv.getString("accessToken");
  //   if (accessToken) {
  //     router.push("/login");
  //   } else {
  //     router.push("/(tabs)");
  //   }
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>sss</Text>
    </View>
  );
};

export default GatewayScreen;
