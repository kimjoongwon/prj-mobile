import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { LoginScreenView, type LoginScreenViewProps } from "./LoginScreenView";

export type LoginScreenProps = Omit<LoginScreenViewProps, "email" | "password">;

/**
 * LoginScreen component with MobX state management.
 * Manages login form state and wraps LoginScreenView.
 */
export const LoginScreen: React.FC<LoginScreenProps> = observer((props) => {
	const [loginState] = React.useState(() =>
		observable({
			email: "",
			password: "",
		}),
	);

	return (
		<LoginScreenView
			{...props}
			email={loginState.email}
			password={loginState.password}
		/>
	);
});

export default LoginScreen;
