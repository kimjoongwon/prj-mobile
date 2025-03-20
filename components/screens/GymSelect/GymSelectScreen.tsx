import React from "react";
import { useGetGymsByQuery } from "@/codegen/apis";
import { GymCard } from "@/components/ui/GymCard/GymCard";
import { ItemSelector, Text } from "@/components/ui";
import { useRouter } from "expo-router";
import { GymDto } from "@/codegen/model";
import { mmkv } from "@/app/_layout";

export const GymSelectScreen = () => {
  const { gyms, onPressGymCard } = useGymSelectScreen();

  return (
    <>
      <Text variant="title">내 지점 선택</Text>
      <ItemSelector
        data={gyms}
        renderItem={(item) => (
          <GymCard gym={item} onPress={() => onPressGymCard(item)} />
        )}
      />
    </>
  );
};

const useHandlers = () => {
  const router = useRouter();
  const onPressGymCard = (item: GymDto) => {
    router.push("/(tabs)");
  };

  return {
    onPressGymCard,
  };
};

export const useGymSelectScreen = () => {
  const { data: getGymsByQueryResponse } = useGetGymsByQuery();
  const gyms = getGymsByQueryResponse?.data ?? [];
  const { onPressGymCard } = useHandlers();

  return { gyms, onPressGymCard };
};
