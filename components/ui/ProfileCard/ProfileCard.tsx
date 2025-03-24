import React from "react";
import { Text } from "../common/Text/Text";
import { Button } from "../common/Button/Button";
import { Card } from "../common/Card/Card";
import { useRouter } from "expo-router";
import { Avatar } from "../common/Avatar/Avatar";
import { View } from "../common";

export const ProfileCard = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.replace("/gateway");
  };

  return (
    <Card>
      <View className="flex-row">
        <Avatar
          container={{ className: "h-24 w-24" }}
          image={{
            className: "rounded-full",
            source: require("../../../assets/images/moka.png"),
          }}
        />
        <View className="p-4">
          <Text variant="title">모카</Text>
          <Text variant="subtitle">아일릿@hive.com</Text>
        </View>
      </View>
      <Button variant="light" onPress={handleLogout} color="danger">
        로그아웃
      </Button>
    </Card>
  );
};
