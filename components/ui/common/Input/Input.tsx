import { cva, VariantProps } from "class-variance-authority";
import { observer, useLocalObservable } from "mobx-react-lite";
import { TextInput, TextInputProps } from "react-native";
import { View } from "../View/View";
import { Text } from "../Text/Text";
import { useEffect } from "react";
import { action, reaction } from "mobx";
import { UtilService } from "@/services/UtilService";
import { MobxProps } from "@/types";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "nativewind";

const input = cva(
  [
    "items-center",
    "justify-center",
    "px-4",
    "px-3",
    "h-14",
    "py-2",
    "min-h-10",
    "rounded-md",
    "bg-light-content2",
    "dark:bg-dark-content2",
    "cursor-text",
    "text-light-foreground",
    "dark:text-dark-foreground",
    "font-pretendard-medium",
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

export type InputProps<T> = TextInputProps &
  VariantProps<typeof input> & {
    label?: string;
  } & MobxProps<T>;

export const Input = observer(<T extends object>(props: InputProps<T>) => {
  const { className, variant, label, state, path, ...rest } = props;
  const initialValue = UtilService.get(state, path);
  const { colorScheme } = useColorScheme();
  const localState = useLocalObservable(() => ({
    value: initialValue,
  }));

  useEffect(() => {
    const disposer = reaction(
      () => localState.value,
      (value) => {
        UtilService.set(state, path, value);
      }
    );

    return disposer;
  }, []);

  const handleOnChangeText = action((value: string) => {
    localState.value = value;
  });

  console.log("input class", input({ className, variant }));

  return (
    <View className="gap-y-2">
      {label && <Text variant="title">{label}</Text>}
      <TextInput
        {...rest}
        placeholderTextColor={
          colorScheme === "dark" ? Colors.light.content4 : Colors.dark.content4
        }
        className={input({ className, variant })}
        onChangeText={handleOnChangeText}
        value={localState.value}
      />
    </View>
  );
});
