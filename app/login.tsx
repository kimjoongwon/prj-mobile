import { ScreenContainer } from "@/components/containers/ScreenContainer";
import {
  LoginScreen,
  LoginScreenProvider,
} from "@/components/screens/Login/LoginScreen";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  return (
    <LoginScreenProvider>
      <ScreenContainer>
        <LoginScreen />
      </ScreenContainer>
    </LoginScreenProvider>
  );
};

export default Login;
