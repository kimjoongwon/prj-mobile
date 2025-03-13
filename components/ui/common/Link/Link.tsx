import { LinkProps, Link as ExpoLink } from "expo-router";
import { Text } from "@/components/ui/common/Text/Text";

export const Link = (props: LinkProps) => {
  const { children, ...rest } = props;

  return (
    <ExpoLink {...rest}>
      <Text variant="link">{children}</Text>
    </ExpoLink>
  );
};
