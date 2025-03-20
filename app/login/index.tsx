import { ScreenContainer } from "@/components/containers";
import { LoginScreen, LoginScreenProvider } from "@/components/screens";
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
