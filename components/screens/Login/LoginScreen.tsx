import { LoginPayloadDto } from "@/codegen/model";
import { LoginForm } from "@/components/forms/Login/LoginForm";
import { observable } from "mobx";
import React, { createContext, useContext } from "react";
import { useState } from "./hooks/useState";
import { useHandlers } from "./hooks/useHandlers";

export const LoginScreen = () => {
  const loginScreen = useLoginScreen();

  return <LoginForm state={loginScreen.state.form.inputs} />;
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
