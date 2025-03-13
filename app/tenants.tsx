import React from "react";
import { View } from "@/components/ui";
import { GymCard } from "@/components/ui/GymCard/GymCard";
import { FlatList, StyleSheet } from "react-native";

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

const Tenants = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <GymCard name={item.name} label={item.address} />
      </View>
    );
  };

  return (
    <FlatList
      className="bg-light-content2 p-2"
      contentContainerClassName="gap-y-2"
      data={stores}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "#555",
  },
  distance: {
    fontSize: 12,
    color: "#999",
  },
});

export default Tenants;
