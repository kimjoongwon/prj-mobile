import { Button } from "@/components/ui";
import { View } from "@/components/ui/common/View/View";
import { app } from "@/services/init";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const GatewayScreen = () => {
  const router = useRouter();

  useEffect(() => {
    app.isInitialized = true;
    app.setRouter(router);
  }, []);

  return (
    <View>
      <Button onPress={() => router.push("/login")}>Entry</Button>
    </View>
  );
};

export default GatewayScreen;
