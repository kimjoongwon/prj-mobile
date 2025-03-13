import { GymDto } from "@/codegen/model";
import { Text } from "../Text/Text";
import { View } from "../View/View";
import { Space } from "../Space/Space";

interface GymProps extends Omit<GymDto, "space" | "depot"> {
  space: {
    name: string;
    label: string;
  };
}

export const Gym = (props: GymProps) => {
  const { address, businessNumber, email, phone, space } = props;
  return (
    <View>
      <Space {...space} />
      <Text>{address}</Text>
      <Text>
        <Text>{phone}</Text>
        <Text>{email}</Text>
      </Text>
      <Text>{businessNumber}</Text>
    </View>
  );
};
