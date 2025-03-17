import React from "react";
import { FlatList, FlatListProps, TouchableOpacity } from "react-native";
import { View } from "../View/View";
import { observer, useLocalObservable } from "mobx-react-lite";
import { cva } from "class-variance-authority";
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
import { action } from "mobx";

type SearchAndSelectProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  selectionMode: "single" | "multiple";
};

type ObjectWithId = object & { id: string };

const itemContainer = cva(["p-1"], {
  variants: {
    selected: {
      true: ["bg-light-primary", "dark:bg-dark-primary", "opacity-50"],
      false: [],
    },
  },
});

export const SearchAndSelect = observer(
  <T extends ObjectWithId>(props: SearchAndSelectProps<T>) => {
    const { data, selectionMode = "single" } = props;

    const localState = useLocalObservable(() => ({
      selectedRowIds: [] as string[],
      query: "",
    }));

    const handleOnPress = action((item: T) => {
      if (selectionMode === "single") {
        localState.selectedRowIds = [item.id];
        return;
      }

      if (selectionMode === "multiple") {
        if (localState.selectedRowIds.includes(item.id)) {
          localState.selectedRowIds = localState.selectedRowIds.filter(
            (id) => id !== item.id
          );
        } else {
          localState.selectedRowIds = [...localState.selectedRowIds, item.id];
        }
      }
    });

    const renderItem: FlatListProps<T>["renderItem"] = ({ item }) => {
      const selected = localState.selectedRowIds.includes(item.id);
      return (
        <TouchableOpacity
          className={itemContainer({ selected })}
          onPress={() => {
            handleOnPress(item);
          }}
        >
          {props.renderItem(item)}
        </TouchableOpacity>
      );
    };

    return (
      <View className="flex-1">
        <Input
          label={"검색어"}
          placeholder="검색어를 입력해주세요."
          path="query"
          state={localState}
        />
        <FlatList data={data} renderItem={renderItem} />
      </View>
    );
  }
);
