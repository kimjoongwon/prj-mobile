import React from "react";
import { useGetGymsByQuery } from "@/codegen/apis";
import { GymCard } from "@/components/ui/GymCard/GymCard";
import { ItemSelector, Spacer, Text } from "@/components/ui";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/containers/ScreenContainer";

const GymSelect = () => {
  const { data: getGymsByQueryResponse } = useGetGymsByQuery();
  const router = useRouter();
  const gyms = getGymsByQueryResponse?.data ?? [];

  return (
    <ScreenContainer className="gap-4">
      <Spacer h={4} />
      <Text variant="title">내 지점 선택</Text>
      <ItemSelector
        data={gyms}
        renderItem={(item) => (
          <GymCard gym={item} onPress={() => router.push("/(tabs)")} />
        )}
      />
    </ScreenContainer>
  );
};

export default GymSelect;
