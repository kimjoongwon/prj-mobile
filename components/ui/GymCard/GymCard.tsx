import { GymDto } from "@/codegen/model";
import { Card } from "../common/Card/Card";
import { Text } from "../common/Text/Text";
import { View } from "../common/View/View";
import { Image } from "expo-image";
import { Check } from "lucide-react-native";

interface GymCardProps {
  gym: GymDto;
}

export const GymCard = (props: GymCardProps) => {
  const {
    gym = {
      space: {
        name: "버핏 그라운드",
        label: "강남",
      },
      address: "서울특별시 강남구 강남대로 1234",
      phone: "02-1234-5678",
    },
  } = props;
  return (
    <Card className="flex-row gap-x-2 items-start h-30">
      <Image
        style={{
          height: 80,
          width: 80,
        }}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View>
        <Text variant="caption">{gym.space.label}</Text>
        <Text variant="title">{gym.space.name}</Text>
        <Text variant="caption">{gym.address}</Text>
        <Text variant="caption">{gym.phone}</Text>
      </View>
      <View className="flex flex-1 justify-center items-center">
        <Check />
      </View>
    </Card>
  );
};
