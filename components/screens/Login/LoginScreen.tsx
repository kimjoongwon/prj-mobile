import { createContext, useContext } from "react";
import { LoginForm } from "@/components/forms/Login/LoginForm";
import { useState } from "./hooks/useState";
import { useHandlers } from "./hooks/useHandlers";
import { Button } from "@/components/ui/common/Button/Button";
import { View } from "@/components/ui/common/View/View";

export const LoginScreen = () => {
  const loginScreen = useLoginScreen();

  return (
    <View className="gap-y-4">
      <LoginForm state={loginScreen.state.form.inputs} />
      <Button
        size="lg"
        variant="solid"
        color="primary"
        disabled={loginScreen.handlers.isGetTokenPending}
        onPress={loginScreen.handlers.onClickLogin}
      >
        로그인
      </Button>
    </View>
  );
};

export interface LoginScreenContext {
  state: ReturnType<typeof useState>;
  handlers: ReturnType<typeof useHandlers>;
}

const LoginScreenContext = createContext<LoginScreenContext>(
  {} as LoginScreenContext
);

export const useLoginScreen = () => {
  return useContext(LoginScreenContext);
};

interface LoginScreenProviderProps {
  children: React.ReactNode;
}

export const LoginScreenProvider = (props: LoginScreenProviderProps) => {
  const { children } = props;
  const state = useState();
  const handlers = useHandlers({
    state,
  });

  return (
    <LoginScreenContext.Provider
      value={{
        state,
        handlers,
      }}
    >
      {children}
    </LoginScreenContext.Provider>
  );
};
