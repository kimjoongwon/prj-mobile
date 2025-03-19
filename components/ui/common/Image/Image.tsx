import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";

export type ImageProps = ExpoImageProps & {};

export const Image = (props: ImageProps) => {
  return <ExpoImage {...props} />;
};
