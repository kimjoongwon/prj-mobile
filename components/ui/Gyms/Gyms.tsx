import { GymDto } from "@/codegen/model";
import { FlatList } from "react-native";
import { GymCard } from "../GymCard/GymCard";

type GymsProps = {
  gyms: GymDto[];
};

export const Gyms = (props: GymsProps) => {
  const { gyms } = props;

  return (
    <FlatList
      data={gyms}
      renderItem={({ item: gym }) => <GymCard gym={gym} />}
      keyExtractor={(gym) => gym.id}
    />
  );
};
