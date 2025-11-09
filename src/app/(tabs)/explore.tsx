import { Button } from 'heroui-native';
import { Text, View } from 'react-native';

export default function TabTwoScreen() {
	return (
		<View>
			<Text>dd</Text>
			<View className="flex-1 justify-center items-center bg-background">
				<Button onPress={() => console.log('Pressed!')}>Get Started</Button>
			</View>			
		</View>
	);
}
