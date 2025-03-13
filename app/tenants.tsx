import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={stores}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  distance: {
    fontSize: 12,
    color: "#999",
  },
});

export default Tenants;
