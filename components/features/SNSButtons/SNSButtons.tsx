import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { View } from '../../ui/data-display/View';
import { Button } from '../../ui/inputs';

export interface SNSButtonsProps {
	onGooglePress?: () => void;
	onApplePress?: () => void;
	onKakaoPress?: () => void;
	style?: ViewStyle;
	showGoogle?: boolean;
	showApple?: boolean;
	showKakao?: boolean;
}

export const SNSButtons: React.FC<SNSButtonsProps> = ({
	onGooglePress,
	onApplePress,
	onKakaoPress,
	style,
	showGoogle = true,
	showApple = true,
	showKakao = true,
}) => {
	return (
		<View style={[styles.container, style]}>
			{showGoogle && (
				<Button
					variant="secondary"
					size="lg"
					onPress={onGooglePress}
					style={styles.button}
				>
					Google로 로그인
				</Button>
			)}

			{showApple && (
				<Button
					variant="primary"
					size="lg"
					onPress={onApplePress}
					style={styles.appleButton}
				>
					Apple로 로그인
				</Button>
			)}

			{showKakao && (
				<Button
					variant="primary"
					size="lg"
					onPress={onKakaoPress}
					style={styles.kakaoButton}
				>
					카카오로 로그인
				</Button>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 12,
		width: '100%',
	},
	button: {
		width: '100%',
	},
	appleButton: {
		width: '100%',
		backgroundColor: '#000000',
	},
	kakaoButton: {
		width: '100%',
		backgroundColor: '#FEE500',
	},
});

export default SNSButtons;
