import { View } from "../View/View";
import { Text } from "../Text/Text";
import { Input } from "../Input/Input";
import { MobxProps } from "@/types";
import { useLocalObservable } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";

type SearchAndSelectProps = {
  label: string;
} & MobxProps;

function SearchAndSelectState() {
  return makeAutoObservable({
    query: "",
    setQuery(query: string) {
      this.query = query;
    },
  });
}

export const SearchAndSelect = (props: SearchAndSelectProps) => {
  const { label, state, path } = props;

  const localState = useLocalObservable(() => SearchAndSelectState());

  return (
    <View className="flex-1 bg-light-background p-4">
      <Input
        placeholder="검색어를 입력하세요"
        label="검색어"
        path="query"
        state={localState}
      />
    </View>
  );
};
