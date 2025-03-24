import { Button } from "@/components/ui";
import { View } from "@/components/ui/common/View/View";
import { useNavigation, useRouter } from "expo-router";

const GatewayScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Button onPress={() => router.push("/login")}>Entry</Button>
    </View>
  );
};

export default GatewayScreen;
