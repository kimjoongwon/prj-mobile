import { Input, InputProps } from "@/components/ui/common/Input/Input";
import { observer } from "mobx-react-lite";
import { InputValidation } from "../Validation/Validation";

interface PasswordInputProps<T> extends Omit<InputProps<T>, 'label'> {}

export const PasswordInput = observer(
  <T extends object>(props: PasswordInputProps<T>) => {
    const { state, path, ...rest } = props;

    return (
      <InputValidation
        validation={{
          timings: ["onBlur"],
          required: { value: true, message: "패스워드를 입력해주세요." },
        }}
      >
        <Input
          {...rest}
          secureTextEntry
          state={state}
          path={path}
          label={"패스워드"}
          placeholder="패스워드를 입력해주세요."
        />
      </InputValidation>
    );
  }
);
