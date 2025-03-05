import { Text } from "@/components/ui/Text/Text";
import { observer } from "mobx-react-lite";
import { EmailInput } from "@/components/inputs/Email/EmailInput";
import { PasswordInput } from "@/components/inputs/Password/PasswordInput";
import { Card } from "@/components/ui/Card/Card";
import { Link } from "expo-router";

export type LoginFormProps = {
  state: {
    email: string;
    password: string;
  };
};

export const LoginForm = observer((props: LoginFormProps) => {
  const { state } = props;

  return (
    <Card>
      <Text variant="title">로그인</Text>
      <EmailInput state={state} path="email" />
      <PasswordInput state={state} path="password" />
    </Card>
  );
});
