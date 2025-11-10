import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField } from 'heroui-native';
import { Card } from '../../ui/surfaces/Card';
import { Text } from '../../ui/display/Text';

export interface LoginFormState {
	email: string;
	password: string;
}

export interface LoginFormProps {
	state: LoginFormState;
	onEmailChange?: (email: string) => void;
	onPasswordChange?: (password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ state, onEmailChange, onPasswordChange }) => {
	return (
		<Card style={styles.container}>
			<TextField>
				<TextField.Label>
					<Text>이메일</Text>
				</TextField.Label>
				<TextField.Input
					placeholder="이메일을 입력하세요"
					keyboardType="email-address"
					autoCapitalize="none"
					autoComplete="email"
					value={state.email}
					onChangeText={onEmailChange}
				/>
			</TextField>

			<TextField>
				<TextField.Label>
					<Text>비밀번호</Text>
				</TextField.Label>
				<TextField.Input
					placeholder="비밀번호를 입력하세요"
					secureTextEntry
					autoComplete="password"
					value={state.password}
					onChangeText={onPasswordChange}
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
