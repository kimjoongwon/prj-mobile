import React from "react";
import { useGetGymsByQuery } from "@/codegen/apis";
import { GymCard } from "@/components/ui/GymCard/GymCard";
import { ItemSelector, Text, View } from "@/components/ui";

const GymSelect = () => {
  const { data: getGymsByQueryResponse } = useGetGymsByQuery();
  const gyms = getGymsByQueryResponse?.data ?? [];

  return (
    <View>
      <Text variant="title">내 지점 선택</Text>
      <ItemSelector
        data={gyms}
        renderItem={(item) => <GymCard gym={item} />}
        selectionMode="single"
      />
    </View>
  );
};

export default GymSelect;
