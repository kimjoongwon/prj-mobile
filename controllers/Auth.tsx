import { Text, View } from "@/components/ui";
import { app, token } from "@/services/init";
import { Redirect } from "expo-router";
import { observer } from "mobx-react-lite";

export const AuthController = observer(() => {
  // 유저의 토큰이 존재하는지 확인
  // 유저의 토근이 존재한다면 유효한 토큰인지 확인
  // 유저의 토큰이 유효하지 않다면 로그인 페이지로 이동
  // 유저의 토큰이 유효하다면 메인 페이지로 이동
  // 유저의 토큰이 존재하지 않는다면 로그인 페이지로 이동
  if (app.isInitialized) {
    if (app.auth?.user.isLoggedIn) {
      if (token.valid) {
        return <Redirect href="/(tabs)/my" />;
      } else {
        return <Redirect href="/login" />;
      }
    } else {
      return <Redirect href="/login" />;
    }
  }

  return (
    <View>
      <Text>Not Initialized</Text>
    </View>
  );
});
