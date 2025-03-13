// import { GymCard } from "@/components/ui/GymCard/GymCard";
// import { FlatList } from "react-native";
// import ActionSheet from "react-native-actions-sheet";
// const stores = [
//   {
//     id: "1",
//     name: "종로수송",
//     address: "서울특별시 종로구 종로5길30 (청진동) 1~3층",
//     distance: "123m",
//     image: "https://example.com/image1.jpg",
//   },
//   {
//     id: "2",
//     name: "종로R",
//     address: "서울특별시 종로구 종로 51(종로2가)",
//     distance: "169m",
//     image: "https://example.com/image2.jpg",
//   },
//   {
//     id: "3",
//     name: "종로구청",
//     address: "서울특별시 종로구 삼봉로 71(수송동)",
//     distance: "201m",
//     image: "https://example.com/image3.jpg",
//   },
//   {
//     id: "4",
//     name: "광화문DE타워",
//     address: "서울특별시 종로구 종로3길17 (청진동) DE타워",
//     distance: "203m",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: "5",
//     name: "종각",
//     address: "서울특별시 종로구 종로64 (종로2가)",
//     distance: "274m",
//     image: "https://example.com/image5.jpg",
//   },
// ];
// export const GymActionSheet = () => {
//   const renderItem = () => <GymCard gym={undefined} />;
//   return (
//     <ActionSheet>
//       <FlatList
//         data={stores}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </ActionSheet>
//   );
// };
