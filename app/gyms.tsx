import React from "react";
import { View } from "@/components/ui";
import { FlatList } from "react-native";

const stores = [
  {
    id: "1",
    name: "종로수송",
    address: "서울특별시 종로구 종로5길30 (청진동) 1~3층",
    distance: "123m",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "2",
    name: "종로R",
    address: "서울특별시 종로구 종로 51(종로2가)",
    distance: "169m",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "3",
    name: "종로구청",
    address: "서울특별시 종로구 삼봉로 71(수송동)",
    distance: "201m",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "4",
    name: "광화문DE타워",
    address: "서울특별시 종로구 종로3길17 (청진동) DE타워",
    distance: "203m",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "5",
    name: "종각",
    address: "서울특별시 종로구 종로64 (종로2가)",
    distance: "274m",
    image: "https://picsum.photos/id/237/200/300",
  },
];

const Gyms = () => {
  const renderItem = () => {
    return <View></View>;
  };

  return (
    <FlatList
      data={stores}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Gyms;
