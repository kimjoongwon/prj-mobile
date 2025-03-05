import { ScreenContainer } from "@/components/containers/ScreenContainer";
import {
  LoginScreen,
  LoginScreenProvider,
} from "@/components/screens/Login/LoginScreen";

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
