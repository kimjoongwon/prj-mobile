import React from "react";
import { useGetGymsByQuery } from "@/codegen/apis";
import { SearchAndSelect } from "@/components/ui/common/SearchAndSelect/SearchAndSelect";
import { GymCard } from "@/components/ui/GymCard/GymCard";

const GymSelect = () => {
  const { data: getGymsByQueryResponse } = useGetGymsByQuery();
  const gyms = getGymsByQueryResponse?.data ?? [];

  return (
    <SearchAndSelect
      data={gyms}
      renderItem={(item) => <GymCard gym={item} />}
      selectionMode="single"
    />
  );
};

export default GymSelect;
