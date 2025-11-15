import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField } from '../../ui/inputs/TextField';
import { Card } from '../../ui/surfaces/Card';

export interface LoginFormState {
	email: string;
	password: string;
}

export interface LoginFormProps {
	state: LoginFormState;
}

export const LoginForm: React.FC<LoginFormProps> = ({ state }) => {
	return (
		<Card style={styles.container}>
			<TextField state={state} path="email">
				<TextField.Label>이메일</TextField.Label>
				<TextField.Input
					placeholder="이메일을 입력하세요"
					keyboardType="email-address"
					autoCapitalize="none"
					autoComplete="email"
				/>
			</TextField>

			<TextField state={state} path="password">
				<TextField.Label>비밀번호</TextField.Label>
				<TextField.Input
					placeholder="비밀번호를 입력하세요"
					secureTextEntry
					autoComplete="password"
				/>
			</TextField>
		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 16,
		width: '100%',
	},
});

export default LoginForm;
