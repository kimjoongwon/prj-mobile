import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { ComponentShowcase } from '../../data-display/ComponentShowcase';
import { Button } from '../../inputs/Button';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'components/ui/surfaces/Card',
	component: Card,
	decorators: [
		Story => (
			<ComponentShowcase
				title="Card"
				description={[
					'구조화된 콘텐츠를 위한 유연한 레이아웃 섹션을 가진 카드 컨테이너입니다.',
					'Header, Body, Footer, Title, Description 컴포넌트를 제공합니다.',
				]}
				showThemeSwitch={true}
				showContainerResize={true}
			>
				<Story />
			</ComponentShowcase>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
	render: () => (
		<Card>
			<Card.Body>
				<Card.Title>기본 카드</Card.Title>
				<Card.Description>심플한 카드 컨테이너입니다.</Card.Description>
			</Card.Body>
		</Card>
	),
};

export const 제목과설명: Story = {
	render: () => (
		<Card>
			<Card.Body>
				<Card.Title>카드 제목</Card.Title>
				<Card.Description>
					카드는 관련된 콘텐츠를 그룹화하는 표면 컴포넌트입니다. 테마와 일관된
					스타일, 그림자 및 테두리를 제공합니다.
				</Card.Description>
			</Card.Body>
		</Card>
	),
};

export const 헤더와푸터: Story = {
	render: () => (
		<Card>
			<Card.Header>
				<Card.Title>헤더 영역</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Description>
					헤더와 푸터를 포함한 구조화된 카드입니다.
				</Card.Description>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary" size="sm">
					확인
				</Button>
			</Card.Footer>
		</Card>
	),
};

export const 변형: Story = {
	render: () => (
		<View style={{ gap: 16, width: '100%' }}>
			<Card variant="default">
				<Card.Body>
					<Card.Title>Default 변형</Card.Title>
					<Card.Description>기본 카드 변형입니다.</Card.Description>
				</Card.Body>
			</Card>

			<Card variant="secondary">
				<Card.Body>
					<Card.Title>Secondary 변형</Card.Title>
					<Card.Description>2차 카드 변형입니다.</Card.Description>
				</Card.Body>
			</Card>

			<Card variant="tertiary">
				<Card.Body>
					<Card.Title>Tertiary 변형</Card.Title>
					<Card.Description>3차 카드 변형입니다.</Card.Description>
				</Card.Body>
			</Card>
		</View>
	),
};

export const 완전한예제: Story = {
	render: () => (
		<Card>
			<Card.Body style={{ gap: 16, marginBottom: 16 }}>
				<View style={{ gap: 8 }}>
					<Card.Title>리빙룸 소파 • 2025 컨렉션</Card.Title>
					<Card.Title style={{ color: '#ec4899' }}>$450</Card.Title>
				</View>
				<Card.Description>
					이 소파는 모던 트로피컬 공간과 바로크 스타일의 공간에 완벽합니다.
				</Card.Description>
			</Card.Body>
			<Card.Footer style={{ gap: 12 }}>
				<Button variant="primary">지금 구매</Button>
				<Button variant="ghost">장바구니 추가</Button>
			</Card.Footer>
		</Card>
	),
};
