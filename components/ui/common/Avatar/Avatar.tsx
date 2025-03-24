import { cva } from "class-variance-authority";
import { View } from "../View/View";
import { Image, ImageProps } from "../Image/Image";
import { ViewProps } from "react-native";

const avatarContainer = cva([]);
const avatarImage = cva([]);

type AvatarProps = {
  container?: ViewProps;
  image: ImageProps;
};

export const Avatar = (props: AvatarProps) => {
  const { container, image } = props;

  return (
    <View
      {...container}
      className={avatarContainer({
        className: container?.className,
      })}
    >
      <Image
        {...image}
        style={{ width: "100%", height: "100%", borderRadius: 50 }}
      />
    </View>
  );
};
