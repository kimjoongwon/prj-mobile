import { Text } from "../Text/Text";
import { View } from "../View/View";

type SpaceProps = {
  name: string;
  label: string;
};

export const Space = (props: SpaceProps) => {
  const { name, label } = props;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{label}</Text>
    </View>
  );
};
