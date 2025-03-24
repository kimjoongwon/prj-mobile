import { ProfileCard } from "@/components/ui";
import { View } from "@/components/ui/common/View/View";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

const My = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View className="gap-y-4">
      <View className="w-[90%] mx-auto mt-10">
        <ProfileCard />
      </View>
    </View>
  );
};

export default My;
