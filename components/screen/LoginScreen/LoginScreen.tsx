import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import type { Theme } from '../../../hooks/useTheme';
import { useTheme } from '../../../hooks/useTheme';
import { Divider } from '../../ui/data-display/Divider';
import { Logo } from '../../ui/data-display/Logo';
import { Text } from '../../ui/data-display/Text';
import { View } from '../../ui/data-display/View';
import { Button } from '../../ui/inputs';
import { ScrollView } from '../../ui/surfaces/ScrollView';

export interface LoginScreenProps {
	onLogin?: (email: string, password: string, keepLoggedIn: boolean) => void;
	onSignUp?: () => void;
	onForgotPassword?: () => void;
	onGoogleLogin?: () => void;
	onAppleLogin?: () => void;
	onKakaoLogin?: () => void;
	onBack?: () => void;
	style?: ViewStyle;
}

/**
 * LoginScreen Component
 * 로그인 화면 컴포넌트
 *
 * Features:
 * - MobX state management for form data
 * - Social login options
 * - Sign up and forgot password links
 *
 * Usage:
 * ```tsx
 * <LoginScreen
 *   onLogin={(email, password, keepLoggedIn) => {}}
 *   onSignUp={() => {}}
 *   onForgotPassword={() => {}}
 * />
 * ```
 */
export const LoginScreen: React.FC<LoginScreenProps> = observer(
	({
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

		const [loginState] = React.useState(() =>
			observable({
				email: '',
				password: '',
			})
		);

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
						<Text
							variant="body1"
							color="default"
							style={dynamicStyles.subtitle}
						>
							계정에 로그인하세요
						</Text>
					</View>

					{/* 로그인 폼 */}
					<View style={dynamicStyles.formSection}>
						{/* <LoginForm state={loginState} /> */}

						{/* 로그인 버튼 */}
						<Button
							variant="primary"
							size="lg"
							style={dynamicStyles.loginButton}
							onPress={() =>
								onLogin?.(loginState.email, loginState.password, false)
							}
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
	}
);

LoginScreen.displayName = 'LoginScreen';

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

export default LoginScreen;
