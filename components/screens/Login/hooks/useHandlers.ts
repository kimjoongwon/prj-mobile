import { getGetTokenMutationOptions } from "@/codegen/apis";
import { LoginScreenContext } from "../LoginScreen";
import { cloneDeep } from "lodash-es";
import { useMutation } from "@tanstack/react-query";
import { router } from "@/services/init";

export const useHandlers = (context: Partial<LoginScreenContext>) => {
  const { isPending: isGetTokenPending } = useMutation(
    getGetTokenMutationOptions()
  );

  const onClickLogin = async () => {
    const state = cloneDeep(context.state!);
    router.push("/(tabs)/my");
    // try {
    //   const { data } = await mutateAsync({
    //     data: state.form.inputs,
    //   });

    //   if (data?.accessToken) {
    //     mmkv.set("accessToken", data.accessToken);
    //   }

    //   router.replace("/gym-select");
    // } catch (error) {
    //   if (isAxiosError(error)) {
    //     console.log("error", error.cause);
    //     console.log("error", error.code);
    //     console.log("error", error.request);
    //     console.log("error", error.response);
    //   }
    // }
  };

  return {
    onClickLogin,
    isGetTokenPending,
  };
};
