import { getGetTokenMutationOptions } from "@/codegen/apis";
import { LoginScreenContext } from "../LoginScreen";
import { cloneDeep } from "lodash-es";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { mmkv } from "@/app/_layout";
import { useRouter } from "expo-router";

export const useHandlers = (context: Partial<LoginScreenContext>) => {
  const { mutateAsync, isPending: isGetTokenPending } = useMutation(
    getGetTokenMutationOptions()
  );

  const router = useRouter();

  const onClickLogin = async () => {
    const state = cloneDeep(context.state!);
    try {
      const { data } = await mutateAsync({
        data: state.form.inputs,
      });

      if (data?.accessToken) {
        mmkv.set("accessToken", data.accessToken);
      }

      router.replace("/(tabs)");
    } catch (error) {
      if (isAxiosError(error)) {
        console.log("error", error.response);
      }
    }
  };

  return {
    onClickLogin,
    isGetTokenPending,
  };
};
