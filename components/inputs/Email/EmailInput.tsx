import { Input, InputProps } from "@/components/ui/Input/Input";
import { observer } from "mobx-react-lite";

type EmailInputProps<T> = Omit<InputProps<T>, "label">;

export const EmailInput = observer(
  <T extends object>(props: EmailInputProps<T>) => {
    const { state, path, ...rest } = props;

    return (
      <Input
        {...rest}
        label="이메일"
        placeholder={"이메일을 입력해주세요."}
        state={state}
        path={path}
      />
    );
  }
);
