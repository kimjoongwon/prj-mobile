import { cva, VariantProps } from "class-variance-authority";
import { observer, useLocalObservable } from "mobx-react-lite";
import { TextInput, TextInputProps } from "react-native";
import { View } from "../View/View";
import { Text } from "../Text/Text";
import { useEffect } from "react";
import { reaction } from "mobx";

const input = cva(
  [
    "items-center",
    "justify-center",
    "px-4",
    "min-h-10",
    "rounded-md",
    "bg-light-content3",
    "dark:bg-dark-content3",
    "cursor-text",
    "px-3",
    "h-14",
    "py-2",
    "text-light-foreground",
    "dark:text-dark-foreground",
  ],
  {
    variants: {
      variant: {
        default: [],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type InputProps = TextInputProps &
  VariantProps<typeof input> & {
    label: string;
  };

export const Input = observer((props: InputProps) => {
  const { className, variant, label = "ff", ...rest } = props;
  const localState = useLocalObservable(() => ({
    value: "",
  }));

  useEffect(() => {
    const disposer = reaction(
      () => localState.value,
      (value) => {}
    );

    return disposer;
  }, []);

  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        {...rest}
        className={input({ className, variant })}
        onChangeText={(value) => {}}
      />
    </View>
  );
});
