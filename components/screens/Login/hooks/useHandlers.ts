import { getGetTokenMutationOptions } from "@/codegen/apis";
import { LoginScreenContext } from "../LoginScreen";
import { cloneDeep } from "lodash-es";
import { useMutation } from "@tanstack/react-query";

export const useHandlers = (context: Partial<LoginScreenContext>) => {
  const { mutateAsync, isPending } = useMutation(getGetTokenMutationOptions());

  const login = async () => {
    const state = cloneDeep(context.state!);
    await mutateAsync({ data: state.form.inputs });
  };

  return {
    loginForm: {
      isPending,
      login,
    },
  };
};
