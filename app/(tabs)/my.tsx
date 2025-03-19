import { ProfileCard } from "@/components/ui";
import { View } from "@/components/ui/common/View/View";

const My = () => {
  return (
    <View className="gap-y-4">
      <View className="w-[90%] mx-auto mt-10">
        <ProfileCard />
      </View>
    </View>
  );
};

export default My;
