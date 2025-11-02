import type React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import { type Theme, useTheme } from '../../hooks/useTheme';
import { Button } from '../../ui/Button';
import { Divider } from '../../ui/Divider';
import { Logo } from '../../ui/Logo';
import { ScrollView } from '../../ui/ScrollView';
import { Text } from '../../ui/Text';
import { View } from '../../ui/View';

export interface LoginScreenViewProps {
	email: string;
	password: string;
	onLogin?: (email: string, password: string, keepLoggedIn: boolean) => void;
	onSignUp?: () => void;
	onForgotPassword?: () => void;
	onGoogleLogin?: () => void;
	onAppleLogin?: () => void;
	onKakaoLogin?: () => void;
	onBack?: () => void;
	style?: ViewStyle;
}

export const LoginScreenView: React.FC<LoginScreenViewProps> = ({
	email,
	password,
	onLogin,
	onSignUp,
	onForgotPassword,
	onGoogleLogin,
	onAppleLogin,
	onKakaoLogin,
	onBack,
	style,
}) => {
	const { theme } = useTheme();
	const dynamicStyles = createStyles(theme);

	return (
		<View style={dynamicStyles.container}>
			<ScrollView
				variant="default"
				style={[dynamicStyles.scrollView]}
				contentContainerStyle={[dynamicStyles.content, style]}
				keyboardShouldPersistTaps="handled"
			>
				{/* 로고 영역 */}
				<View style={dynamicStyles.logoSection}>
					<Logo size="lg" />
				</View>

				{/* 헤더 영역 */}
				<View style={dynamicStyles.headerSection}>
					<Text variant="h3" style={dynamicStyles.title}>
						로그인
					</Text>
					<Text variant="body1" color="default" style={dynamicStyles.subtitle}>
						계정에 로그인하세요
					</Text>
				</View>

				{/* 로그인 폼 */}
				<View style={dynamicStyles.formSection}>
					{/* <LoginForm state={loginState} /> */}

					{/* 로그인 버튼 */}
					<Button
						variant="solid"
						color="primary"
						size="lg"
						style={dynamicStyles.loginButton}
						onPress={() => onLogin?.(email, password, false)}
					>
						로그인
					</Button>
				</View>

				{/* 구분선 */}
				<Divider style={dynamicStyles.divider}>또는</Divider>

				{/* 하단 링크들 */}
				<View style={dynamicStyles.linksSection}>
					<Button
						variant="ghost"
						size="md"
						onPress={onSignUp}
						style={dynamicStyles.linkButton}
					>
						회원가입
					</Button>
					<Button
						variant="ghost"
						size="md"
						onPress={onForgotPassword}
						style={dynamicStyles.linkButton}
					>
						비밀번호 찾기
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};

const createStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
		},
		scrollView: {
			flex: 1,
		},
		content: {
			padding: 24,
			paddingTop: 20,
			paddingBottom: 40,
		},
		logoSection: {
			alignItems: 'center',
			marginBottom: 40,
		},
		headerSection: {
			alignItems: 'center',
			marginBottom: 32,
		},
		title: {
			marginBottom: 8,
			color: theme.colors.foreground,
		},
		subtitle: {
			textAlign: 'center',
			color: theme.colors.default[600],
		},
		formSection: {
			marginBottom: 24,
		},
		loginButton: {
			marginTop: 8,
		},
		divider: {
			marginVertical: 24,
		},
		linksSection: {
			alignItems: 'center',
			gap: 8,
		},
		linkButton: {
			marginVertical: 4,
		},
	});
