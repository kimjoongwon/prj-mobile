import { LoginPayloadDto } from "@/codegen/model";
import { observable } from "mobx";

type State = {
  form: {
    inputs: LoginPayloadDto;
  };
};

export const useState = (): State => {
  const state = observable({
    form: {
      inputs: {
        email: "",
        password: "",
      },
    },
  });
  return state;
};
