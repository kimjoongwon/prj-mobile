import { useTheme } from "@/hooks/useTheme";
import { Button } from "heroui-native";
import type React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Background } from "../../surfaces/Background";
import { ScrollView } from "../../surfaces/ScrollView";
import { Text } from "../Text";

export type ContainerSize = "small" | "medium" | "large" | "full";

export interface ComponentShowcaseProps {
	/** 컴포넌트 이름 */
	title: string;
	/** 컴포넌트 설명 (문자열 또는 배열) */
	description: string | string[];
	/** 표시할 컴포넌트 */
	children: React.ReactNode;
	/** 정렬 방향 */
	align?: "center" | "left" | "right";
	/** 제목 표시 여부 */
	showTitle?: boolean;
	/** 간격 조정 (기본: 16) */
	spacing?: number;
	/** Actions 섹션 표시 여부 */
	showActions?: boolean;
	/** Actions 섹션 정렬 */
	actionsAlign?: "center" | "left" | "right";
	/** 테마 전환 버튼 표시 */
	showThemeSwitch?: boolean;
	/** 컨테이너 크기 조절 표시 */
	showContainerResize?: boolean;
	/** 기본 컨테이너 크기 */
	defaultContainerSize?: ContainerSize;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
	title,
	description,
	children,
	align = "center",
	showTitle = true,
	spacing = 16,
	showActions = true,
	actionsAlign = "center",
	showThemeSwitch = true,
	showContainerResize = true,
	defaultContainerSize = "full",
}) => {
	const { isDark, setTheme } = useTheme();
	const [containerSize, setContainerSize] =
		useState<ContainerSize>(defaultContainerSize);

	const alignmentClass =
		align === "center"
			? "items-center"
			: align === "left"
				? "items-start"
				: "items-end";

	const actionsAlignClass =
		actionsAlign === "center"
			? "items-center"
			: actionsAlign === "left"
				? "items-start"
				: "items-end";

	const textAlignStyle =
		align === "center" ? "center" : align === "left" ? "left" : "right";

	const descriptions = Array.isArray(description) ? description : [description];

	const getContainerWidth = () => {
		switch (containerSize) {
			case "small":
				return 320;
			case "medium":
				return 768;
			case "large":
				return 1024;
			case "full":
			default:
				return "100%";
		}
	};

	const containerWidth = getContainerWidth();
	const isFullWidth = containerSize === "full";

	return (
		<Background className="flex-1 w-full" style={{ gap: spacing }}>
			<View className="px-4 mb-2 w-full">
				{showTitle && (
					<Text
						variant="h6"
						className="mb-2"
						style={{ textAlign: textAlignStyle }}
					>
						{title}
					</Text>
				)}

				{/* Actions Section */}
				{showActions && (showThemeSwitch || showContainerResize) && (
					<View className={`mb-4 gap-3 ${actionsAlignClass}`}>
						{/* Theme Switch */}
						{showThemeSwitch && (
							<View className="gap-2">
								<Text variant="caption">테마</Text>
								<View className="flex-row gap-2">
									<Button
										size="sm"
										variant={isDark ? "ghost" : "primary"}
										onPress={() => setTheme("light")}
										className="min-w-[60px] h-7"
									>
										☀️
									</Button>
									<Button
										size="sm"
										variant={isDark ? "primary" : "ghost"}
										onPress={() => setTheme("dark")}
										className="min-w-[60px] h-7"
									>
										🌙
									</Button>
								</View>
							</View>
						)}

						{/* Container Resize */}
						{showContainerResize && (
							<View className="gap-2">
								<Text variant="caption">크기</Text>
								<View className="flex-row gap-2 flex-wrap">
									<Button
										size="sm"
										variant={containerSize === "small" ? "primary" : "ghost"}
										onPress={() => setContainerSize("small")}
										className="min-w-[50px] h-7"
									>
										📱
									</Button>
									<Button
										size="sm"
										variant={containerSize === "medium" ? "primary" : "ghost"}
										onPress={() => setContainerSize("medium")}
										className="min-w-[50px] h-7"
									>
										📐
									</Button>
									<Button
										size="sm"
										variant={containerSize === "large" ? "primary" : "ghost"}
										onPress={() => setContainerSize("large")}
										className="min-w-[50px] h-7"
									>
										🖥️
									</Button>
									<Button
										size="sm"
										variant={containerSize === "full" ? "primary" : "ghost"}
										onPress={() => setContainerSize("full")}
										className="min-w-[50px] h-7"
									>
										⬜
									</Button>
								</View>
							</View>
						)}
					</View>
				)}

				{descriptions.map((desc, index) => (
					<Text
						key={index}
						variant="body2"
						style={{ textAlign: textAlignStyle }}
					>
						{desc}
					</Text>
				))}
			</View>

			{/* Dynamic Container with Visual Indicator */}
			<ScrollView className="flex-1">
				<View className="w-full items-center">
					<View
						className={`border-2 border-dashed border-primary/30 p-4 ${alignmentClass}`}
						style={{ width: containerWidth }}
					>
						{children}
						{/* Container Size Label */}
						<View className="absolute top-1 right-1 bg-primary/10 px-2 py-1 rounded">
							<Text variant="caption" color="primary" className="font-mono">
								{isFullWidth ? "100%" : `${containerWidth}px`}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</Background>
	);
};

ComponentShowcase.displayName = "ComponentShowcase";
