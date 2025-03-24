import { ScreenContainer } from "@/components/containers";
import { LoginScreen, LoginScreenProvider } from "@/components/screens";

const Login = () => {
  return (
    <LoginScreenProvider>
      <ScreenContainer>
        <LoginScreen />
      </ScreenContainer>
    </LoginScreenProvider>
  );
};

export default Login;
