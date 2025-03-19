import { GymDto } from "@/codegen/model";
import { Card } from "../common/Card/Card";
import { Text } from "../common/Text/Text";
import { View } from "../common/View/View";
import { Image } from "expo-image";
import { Pressable } from "react-native";

interface GymCardProps {
  gym: GymDto;
  onPress?: (gym: GymDto) => void;
}

export const GymCard = (props: GymCardProps) => {
  const { gym, onPress } = props;

  const CardContent = (
    <Card className="flex-row gap-x-2 items-start h-30">
      <Image
        style={{
          height: 70,
          width: 70,
        }}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View>
        <Text variant="caption">{gym?.space?.label}</Text>
        <Text variant="title">{gym?.space?.name}</Text>
        <Text variant="caption">주소: {gym.address}</Text>
        <Text variant="caption">연락처: {gym.phone}</Text>
      </View>
    </Card>
  );

  return onPress ? (
    <Pressable onPress={() => onPress(gym)}>{CardContent}</Pressable>
  ) : (
    CardContent
  );
};
