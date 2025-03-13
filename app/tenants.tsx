import React from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

const stores = [
  {
    id: "1",
    name: "종로수송",
    address: "서울특별시 종로구 종로5길30 (청진동) 1~3층",
    distance: "123m",
    image: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    name: "종로R",
    address: "서울특별시 종로구 종로 51(종로2가)",
    distance: "169m",
    image: "https://example.com/image2.jpg",
  },
  {
    id: "3",
    name: "종로구청",
    address: "서울특별시 종로구 삼봉로 71(수송동)",
    distance: "201m",
    image: "https://example.com/image3.jpg",
  },
  {
    id: "4",
    name: "광화문DE타워",
    address: "서울특별시 종로구 종로3길17 (청진동) DE타워",
    distance: "203m",
    image: "https://example.com/image4.jpg",
  },
  {
    id: "5",
    name: "종각",
    address: "서울특별시 종로구 종로64 (종로2가)",
    distance: "274m",
    image: "https://example.com/image5.jpg",
  },
];

const Tenants = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text className="text-primary-500">{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
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
