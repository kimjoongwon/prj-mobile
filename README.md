# Plate - Expo & React Native 프로젝트

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 📋 목차

- [빠른 시작](#빠른-시작)
- [설치](#설치)
- [개발 서버 실행](#개발-서버-실행)
- [네이티브 빌드 (Prebuild)](#네이티브-빌드-prebuild)
- [Storybook](#storybook)
- [프로젝트 구조 및 명명 규칙](#프로젝트-구조-및-명명-규칙)
- [스크립트 참조표](#스크립트-참조표)
- [트러블슈팅](#트러블슈팅)

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 시작
npm start

# 3. 플랫폼 선택
# iOS: i
# Android: a
# Web: w
```

## 📦 설치

### 필수 요구사항

- Node.js 16+
- npm 또는 yarn
- iOS 개발 (Mac 필수): Xcode
- Android 개발: Android Studio 또는 Android SDK

### 설치 단계

```bash
npm install
```

## ▶️ 개발 서버 실행

### `npm start` (기본 실행)

개발 서버를 시작합니다. Metro bundler가 캐시된 번들을 재사용합니다.

```bash
npm start
```

**사용 시기:**

- 처음 앱을 시작할 때
- 파일 저장으로 HMR(Hot Module Replacement)이 잘 작동할 때
- 번들러 캐시 문제가 없을 때

**출력 옵션:**

- `i` - iOS Simulator 실행
- `a` - Android Emulator 실행
- `w` - 웹 브라우저에서 실행

---

### `npm run start:clear` (캐시 초기화)

Metro bundler의 캐시를 삭제하고 처음부터 번들을 생성합니다.

```bash
npm run start:clear
```

**사용 시기:**

- 번들러 캐시 문제로 `npm start`가 정상 작동하지 않을 때
- 새로운 의존성을 추가한 후
- 스타일 또는 설정 변경이 적용되지 않을 때
- Metro 오류가 발생했을 때

**언제 사용할까 판단:**

```
npm start → 에러 발생?
   ↓ YES
npm run start:clear → 해결?
   ↓ YES: 계속 사용
   ↓ NO: 아래 Prebuild 섹션 참고
```

---

### 플랫폼별 실행

#### iOS

**기본 실행:**

```bash
npm run ios
```

**캐시 초기화 후 실행:**

```bash
npm run ios:clear
```

#### Android

**기본 실행:**

```bash
npm run android
```

**캐시 초기화 후 실행:**

```bash
npm run android:clear
```

#### 웹

**기본 실행:**

```bash
npm run web
```

**캐시 초기화 후 실행:**

```bash
npm run web:clear
```

---

## 🏗️ 네이티브 빌드 (Prebuild)

Prebuild는 **Expo 구성을 기반으로 iOS(`ios/`) 및 Android(`android/`) 네이티브 프로젝트를 생성**합니다.

### Prebuild가 필요한 케이스

| 상황                                      | 필요 | 명령어                        |
| ----------------------------------------- | :--: | ----------------------------- |
| 처음 iOS/Android 빌드하기                 |  ✅  | `npm run prebuild:clean`      |
| 네이티브 패키지 추가 (`npx expo install`) |  ✅  | `npm run prebuild:clean`      |
| app.json 설정 변경                        |  ✅  | `npm run prebuild:clean`      |
| 번들 설정 변경                            |  ✅  | `npm run prebuild:clean`      |
| 의존성 버전 업그레이드                    |  ✅  | `npm run prebuild:clean`      |
| 네이티브 코드 수정                        |  ✅  | `npm run prebuild:clean`      |
| 파일 저장으로 HMR 적용                    |  ❌  | `npm start` (prebuild 불필요) |
| CSS 스타일 변경                           |  ❌  | `npm start` (prebuild 불필요) |

---

### `npm run prebuild` (증분 빌드)

기존 iOS/Android 디렉토리가 있으면 **건너뛰고**, 없으면 **새로 생성**합니다.

```bash
npm run prebuild
```

**사용 시기:**

- 네이티브 프로젝트가 이미 존재하고
- 작은 변경사항만 적용되었을 때
- 빠른 빌드를 원할 때

**속도:** 빠름 ⚡

---

### `npm run prebuild:clean` (완전 재생성)

iOS/Android 디렉토리를 **완전히 삭제**하고 **처음부터 다시 생성**합니다.

```bash
npm run prebuild:clean
```

**사용 시기:**

- 처음 네이티브 프로젝트를 생성할 때
- 네이티브 설정 충돌이 발생했을 때
- 의존성이 추가/제거되었을 때
- 완전한 초기화가 필요할 때

**속도:** 느림 (전체 재구성)

**중요:** `--clean` 플래그는 **기존 코드를 모두 삭제**합니다. 네이티브 코드 커스터마이징이 있었다면 미리 백업하세요.

---

### 플랫폼별 Prebuild

#### iOS만

```bash
# 기본
npm run prebuild:ios

# 완전 재생성
npm run prebuild:ios:clean
```

#### Android만

```bash
# 기본
npm run prebuild:android

# 완전 재생성
npm run prebuild:android:clean
```

---

## 📖 Storybook

컴포넌트 개발 및 문서화를 위한 Storybook 가이드입니다.

### 웹 Storybook

웹 브라우저에서 Storybook을 실행합니다 (Vite 기반).

```bash
# 개발 모드
npm run storybook

# 빌드
npm run build-storybook
```

Open [http://localhost:6006](http://localhost:6006)

---

### 네이티브 Storybook

React Native 앱에 Storybook UI를 포함하여 실행합니다.

```bash
# 기본 실행
npm run storybook:native

# iOS 에뮬레이터
npm run storybook:native:ios

# Android 에뮬레이터
npm run storybook:native:android
```

**Storybook 모드의 특징:**

- 네이티브 Storybook UI가 전체 화면에 표시됨
- 앱의 일반 라우팅은 우회됨
- 컴포넌트를 개별적으로 테스트 가능

---

## 🏗️ 프로젝트 구조 및 명명 규칙

### 폴더 및 컴포넌트 명명 규칙

이 프로젝트는 일관된 폴더 구조와 명명 규칙을 따릅니다.

#### 기본 원칙

1. **카테고리 폴더**: 소문자 사용
2. **컴포넌트 폴더**: PascalCase 사용
3. **컴포넌트 파일**: 폴더명과 동일한 PascalCase 사용

---

### 폴더 명명 규칙

#### 1. 공통 접미사를 가진 컴포넌트 폴더

여러 컴포넌트가 공통된 접미사(예: `Screen`)를 공유하는 경우, **접미사를 포함한 소문자 복수형 폴더**를 생성하고 내부에 각 컴포넌트를 PascalCase 폴더(접미사 포함)로 배치합니다.

**예시:**

```
components/
└── screens/                ← 소문자 복수형 카테고리 폴더 (접미사 포함)
    ├── LoginScreen/        ← PascalCase 컴포넌트 폴더 (접미사 포함)
    │   ├── LoginScreen.tsx
    │   ├── LoginScreen.styles.ts
    │   ├── LoginScreen.stories.tsx
    │   └── index.tsx
    └── HomeScreen/         ← PascalCase 컴포넌트 폴더 (접미사 포함)
        ├── HomeScreen.tsx
        └── index.tsx
```

**규칙:**

- `LoginScreen`, `HomeScreen` 등의 컴포넌트가 있다면
- 카테고리 폴더명: `screens/` (소문자, 복수형, 접미사 포함)
- 컴포넌트 폴더명: `LoginScreen/`, `HomeScreen/` (PascalCase, 접미사 포함)

---

#### 2. 공통 규칙이 없는 컴포넌트 폴더

여러 컴포넌트가 공통된 접미사나 명명 패턴이 없는 경우, **복수형 소문자 폴더**를 사용합니다.

**예시:**

```
components/
├── forms/                  ← 소문자 복수형 카테고리 폴더
│   ├── Input/              ← PascalCase 컴포넌트 폴더
│   │   ├── Input.tsx
│   │   ├── Input.styles.ts
│   │   └── index.tsx
│   ├── RadioGroup/         ← PascalCase 컴포넌트 폴더
│   │   ├── RadioGroup.tsx
│   │   └── index.tsx
│   └── LoginForm/          ← PascalCase 컴포넌트 폴더
│       ├── LoginForm.tsx
│       └── index.tsx
└── ui/                     ← 소문자 복수형 카테고리 폴더
    ├── Button/
    ├── Card/
    └── Text/
```

**규칙:**

- `Input`, `RadioGroup`, `LoginForm` 등 공통 패턴이 없다면
- 카테고리 폴더명: `forms/` (소문자, 복수형)
- 컴포넌트 폴더명: `Input/`, `RadioGroup/` (PascalCase, 전체 이름)

---

### 컴포넌트 폴더 구조 및 역할 분리

각 컴포넌트는 **Custom Hooks를 활용한 로직 분리**를 통해 관심사를 명확히 구분합니다.

#### 기본 구조

```
ComponentName/
├── ComponentName.tsx           # 메인 컴포넌트 (UI + hooks 사용)
├── useComponentName.ts         # 비즈니스 로직 (Custom Hook)
├── ComponentName.styles.ts     # 스타일 정의 (선택)
├── ComponentName.stories.tsx   # Storybook 스토리 (선택)
└── index.ts                    # Export 진입점
```

#### 파일별 역할

| 파일                        | 역할              | 포함 내용                                                                                                                             |
| --------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `ComponentName.tsx`         | **메인 컴포넌트** | - UI 렌더링<br>- Custom Hook 사용<br>- Props 정의<br>- JSX/TSX 구조                                                                   |
| `useComponentName.ts`       | **로직 레이어**   | - 비즈니스 로직<br>- 상태 관리 (useState, useReducer)<br>- Side Effects (useEffect)<br>- API 호출<br>- 데이터 가공<br>- 이벤트 핸들러 |
| `ComponentName.styles.ts`   | **스타일 정의**   | - StyleSheet 정의<br>- 테마 기반 스타일                                                                                               |
| `ComponentName.stories.tsx` | **스토리북**      | - 컴포넌트 문서화<br>- 다양한 상태 시각화                                                                                             |
| `index.ts`                  | **Export**        | - 모듈 진입점<br>- Re-export만 담당                                                                                                   |

---

### 상세 예시: `screens/LoginScreen/` 구조

#### 폴더 구조

```
components/
└── screens/                      ← 카테고리 폴더 (소문자 복수형)
    └── LoginScreen/              ← 컴포넌트 폴더 (PascalCase, 접미사 포함)
        ├── LoginScreen.tsx       ← 메인 컴포넌트
        ├── useLoginScreen.ts     ← 비즈니스 로직 (Custom Hook)
        ├── LoginScreen.styles.ts ← 스타일
        ├── LoginScreen.stories.tsx ← Storybook
        └── index.ts              ← Export
```

**폴더명 규칙:**

- 카테고리 폴더: `screens/` (소문자 복수형, 접미사 포함)
- 컴포넌트 폴더명: `LoginScreen/` (PascalCase, 접미사 포함)
- 실제 컴포넌트명: `LoginScreen` (전체 이름 사용)

#### 코드 예시

**`useLoginScreen.ts` (Custom Hook - 로직 레이어):**

```typescript
import { useState, useEffect } from 'react';

export interface LoginScreenData {
	title: string;
	items: string[];
}

/**
 * LoginScreen 컴포넌트의 비즈니스 로직을 담당하는 Custom Hook
 */
export function useLoginScreen() {
	// 상태 관리
	const [data, setData] = useState<LoginScreenData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// 데이터 로드
	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const response = await fetch('/api/login-screen-data');
				const result = await response.json();
				setData(result);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	// 이벤트 핸들러
	const handleRefresh = async () => {
		setLoading(true);
		// 새로고침 로직
	};

	const handleItemPress = (item: string) => {
		console.log('Item pressed:', item);
		// 네비게이션 또는 다른 비즈니스 로직
	};

	// Hook의 반환값 (컴포넌트에서 사용할 데이터와 함수)
	return {
		data,
		loading,
		error,
		handleRefresh,
		handleItemPress,
	};
}
```

**`LoginScreen.tsx` (메인 컴포넌트 - UI 레이어):**

```typescript
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useLoginScreen } from './useLoginScreen';
import styles from './LoginScreen.styles';
import { Button } from '@/components/ui/Button';

export interface LoginScreenProps {
  // 외부에서 주입받을 props (선택적)
  title?: string;
}

/**
 * LoginScreen Component
 * Custom Hook(useLoginScreen)을 사용하여 로직을 분리
 */
export default function LoginScreen({ title }: LoginScreenProps) {
  // Custom Hook에서 로직 가져오기
  const { data, loading, error, handleRefresh, handleItemPress } = useLoginScreen();

  // 로딩 상태
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <Button onPress={handleRefresh} title="Retry" />
      </View>
    );
  }

  // 정상 렌더링
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || data?.title}</Text>

      <FlatList
        data={data?.items}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() => handleItemPress(item)}
          >
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button onPress={handleRefresh} title="Refresh" />
    </View>
  );
}
```

**`LoginScreen.styles.ts` (스타일):**

```typescript
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	item: {
		padding: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	errorText: {
		color: 'red',
		fontSize: 16,
		marginBottom: 16,
	},
});
```

**`LoginScreen.stories.tsx` (Storybook):**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import ScreenContainer from './Screen';

const meta = {
	title: 'Container/ScreenContainer',
	component: ScreenContainer,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof ScreenContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 완전한 컴포넌트를 스토리로 문서화
export const Default: Story = {
	args: {
		title: 'My Screen',
	},
};

export const CustomTitle: Story = {
	args: {
		title: 'Custom Title Override',
	},
};
```

**`index.ts` (Export 진입점):**

```typescript
// 단순 Re-export만 담당
export { default } from './Screen';
export { default as ScreenContainer } from './Screen';
export * from './useScreen';
```

---

### 다른 카테고리 예시

#### `forms/Login/` 구조

```
forms/
└── Login/
    ├── Login.tsx              # 로그인 폼 UI
    ├── useLoginForm.ts        # 폼 상태, 유효성 검사, 제출 로직
    ├── Login.styles.ts
    └── index.ts
```

**`useLoginForm.ts`:**

```typescript
export function useLoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const validate = () => {
		// 유효성 검사 로직
	};

	const handleSubmit = async () => {
		if (validate()) {
			// API 호출
		}
	};

	return { email, setEmail, password, setPassword, errors, handleSubmit };
}
```

#### `screens/Login/` 구조

```
screens/
└── Login/
    ├── Login.tsx              # 로그인 스크린 UI
    ├── useLoginScreen.ts      # 인증 처리, 네비게이션, 상태 관리
    ├── Login.styles.ts
    └── index.ts
```

**`useLoginScreen.ts`:**

```typescript
export function useLoginScreen() {
	const navigation = useNavigation();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLoginSuccess = () => {
		setIsAuthenticated(true);
		navigation.navigate('Home');
	};

	return { isAuthenticated, handleLoginSuccess };
}
```

---

### 전체 구조 예시

```
components/
├── container/              # 공통 접미사 "Container"를 가진 컴포넌트들 (현재 사용하지 않음)
│   └── ScreenContainer/    # 폴더명은 접미사 포함
│       ├── ScreenContainer.tsx
│       ├── useScreenContainer.ts
│       └── index.ts
├── forms/                  # 폼 관련 컴포넌트들 (공통 규칙 없음)
│   ├── Input/
│   ├── RadioGroup/
│   └── LoginForm/
│       ├── LoginForm.tsx
│       ├── useLoginForm.ts
│       └── index.ts
├── ui/                     # UI 컴포넌트들 (공통 규칙 없음)
│   ├── Button/
│   ├── Card/
│   └── Text/
└── screens/                # 공통 접미사 "Screen"을 가진 컴포넌트들
    └── LoginScreen/        # 폴더명은 접미사 포함
        ├── LoginScreen.tsx
        ├── useLoginScreen.ts
        └── index.ts
```

````

---

### 명명 규칙 요약

| 상황 | 카테고리 폴더명 | 컴포넌트 폴더명 | 예시 |
|------|----------------|----------------|------|
| 공통 접미사 있음 (예: `Screen`) | 접미사 포함한 소문자 복수형 | 접미사 포함한 PascalCase | `screens/LoginScreen/` |
| 공통 규칙 없음 | 소문자 복수형 | 전체 이름 PascalCase | `forms/LoginForm/`, `ui/Button/` |

**컴포넌트 파일명**: 항상 전체 이름 사용 (예: `LoginScreen.tsx`, `LoginForm.tsx`)

---

### 이 패턴의 장점

#### ✅ **1. 관심사 분리 (Separation of Concerns)**
```typescript
// 로직과 UI가 명확히 분리
useScreen.ts  → 비즈니스 로직만
Screen.tsx    → UI 렌더링만
````

#### ✅ **2. 로직 재사용성**

```typescript
// Custom Hook은 여러 컴포넌트에서 재사용 가능
import { useScreen } from '@/components/container/Screen';

function AnotherComponent() {
	const { data, loading } = useScreen(); // 동일한 로직 재사용
	// 다른 UI로 렌더링 가능
}
```

#### ✅ **3. 테스트 용이성**

```typescript
// Hook 단위 테스트 (비즈니스 로직)
import { renderHook } from '@testing-library/react-hooks';
import { useScreen } from './useScreen';

test('should fetch data on mount', () => {
	const { result } = renderHook(() => useScreen());
	expect(result.current.loading).toBe(true);
});

// 컴포넌트는 Storybook으로 시각적 테스트
```

#### ✅ **4. 현대 React 패턴**

- React 공식 권장 패턴 (2019+)
- Hooks 생태계와 자연스럽게 통합
- 팀원들에게 익숙한 구조

#### ✅ **5. 명확한 역할 구분**

```
View 파일:  순수 UI만 → Storybook 테스트 쉬움
메인 파일:  상태 관리만 → 목 주입 쉬움
useXXX 파일: 로직만 → 유닛 테스트 쉬움
```

#### ✅ **6. 확장성**

```typescript
// 다른 상태 관리 도구로 쉽게 전환
// InputView.tsx는 그대로 유지
// Input.tsx만 교체

// MobX → Redux
Input.tsx; // Redux 통합으로 변경
InputView.tsx; // 변경 없음

// 또는 동시 지원
MobxInput.tsx; // MobX 버전
ReduxInput.tsx; // Redux 버전
InputView.tsx; // 공통 UI
```

#### ✅ **7. 점진적 복잡도**

```
단순 → 복잡
Button.tsx (순수 UI만)
  ↓
InputView.tsx + Input.tsx (UI + 상태)
  ↓
ScreenView.tsx + Screen.tsx + useScreen.ts (UI + 상태 + 로직)
```

---

### useComponent Hook 생성 기준

#### 생성해야 할 때:

✅ **복잡한 유효성 검사**

```typescript
// useEmailInput.ts
export function useEmailInput() {
	const validateEmail = (email: string) => {
		if (!email.includes('@')) return 'Invalid format';
		const domain = email.split('@')[1];
		const blockedDomains = ['tempmail.com', 'throwaway.email'];
		if (blockedDomains.includes(domain)) return 'Domain not allowed';
		// ... 더 복잡한 검증
	};
}
```

✅ **값 변환/포매팅 로직**

```typescript
// usePhoneInput.ts
export function usePhoneInput() {
	const formatPhone = (value: string) => {
		const numbers = value.replace(/\D/g, '');
		if (numbers.length <= 3) return numbers;
		if (numbers.length <= 7)
			return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
		return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
	};
}
```

✅ **여러 컴포넌트에서 재사용할 로직**

```typescript
// useFormValidation.ts - 여러 폼에서 사용
export function useFormValidation() {
	const required = (value: any) => (!value ? 'Required field' : undefined);
	const minLength = (min: number) => (value: string) =>
		value.length < min ? `Minimum ${min} characters` : undefined;
	// ...
}
```

#### 생성하지 않아도 될 때:

❌ **단순 상태 관리** (MobX가 담당)

```typescript
// ❌ 불필요한 Hook
function useInput() {
  const [value, setValue] = useState('');
  return { value, setValue };
}

// ✅ MobX로 충분
const Input = observer(({ state, path }) => {
  return <InputView value={state[path]} onChangeText={...} />;
});
```

❌ **간단한 onChange 핸들러**

```typescript
// ❌ 불필요한 Hook
function useInput() {
	const handleChange = (value: string) => {
		console.log(value);
	};
}

// ✅ 컴포넌트에 직접 작성
const Input = observer(() => {
	const handleChange = action((value: string) => {
		localState.value = value;
	});
});
```

├── screens/ # 공통 접미사 "Screen"을 가진 컴포넌트들
│ └── LoginScreen/
│ ├── LoginScreen.tsx
│ └── index.tsx
└── providers/ # Provider 컴포넌트들
└── ThemeProvider/
├── ThemeProvider.tsx
└── index.tsx

````

---

### 명명 규칙 요약

| 상황 | 카테고리 폴더명 | 예시 |
|------|----------------|------|
| 공통 접미사 있음 (예: `Container`) | 접미사 제거한 소문자 단수형 | `container/` |
| 공통 접미사 있음 (예: `Screen`) | 접미사 제거한 소문자 복수형 | `screens/` |
| 공통 규칙 없음 | 소문자 복수형 | `forms/`, `ui/` |

**컴포넌트 폴더명**: 항상 PascalCase 전체 이름 사용

---

## 📋 스크립트 참조표

### 개발 서버 (Dev Server)

| 명령어 | 설명 |
|--------|------|
| `npm start` | 개발 서버 시작 (Metro bundler 캐시 유지) |
| `npm run start:clear` | 개발 서버 시작 (Metro bundler 캐시 초기화) |
| `npm run ios` | iOS Simulator에서 앱 실행 |
| `npm run android` | Android Emulator에서 앱 실행 |
| `npm run web` | 웹 브라우저에서 앱 실행 |
| `npm run ios:clear` | 캐시 초기화 후 iOS 실행 |
| `npm run android:clear` | 캐시 초기화 후 Android 실행 |
| `npm run web:clear` | Vite 캐시 초기화 후 웹 실행 |

### Prebuild (네이티브 빌드)

| 명령어 | 설명 | 속도 |
|--------|------|------|
| `npm run prebuild` | iOS/Android 생성 (기존 유지) | ⚡ 빠름 |
| `npm run prebuild:clean` | iOS/Android 완전 재생성 | 🐢 느림 |
| `npm run prebuild:ios` | iOS만 생성 | ⚡ 빠름 |
| `npm run prebuild:android` | Android만 생성 | ⚡ 빠름 |
| `npm run prebuild:ios:clean` | iOS 완전 재생성 | 🐢 느림 |
| `npm run prebuild:android:clean` | Android 완전 재생성 | 🐢 느림 |

### Storybook

| 명령어 | 설명 |
|--------|------|
| `npm run storybook` | 웹 Storybook 개발 서버 |
| `npm run build-storybook` | 웹 Storybook 정적 빌드 |
| `npm run storybook-generate` | Storybook 스토리 자동 생성 |
| `npm run storybook:native` | 네이티브 Storybook 시작 |
| `npm run storybook:native:ios` | iOS에서 네이티브 Storybook 실행 |
| `npm run storybook:native:android` | Android에서 네이티브 Storybook 실행 |

### 기타

| 명령어 | 설명 |
|--------|------|
| `npm run lint` | ESLint 실행 |

---

## 🐛 트러블슈팅

### 1. "Failed to create native project" 에러

**해결책:**
```bash
npm run prebuild:clean
````

캐시 문제일 가능성이 높습니다. `--clean` 플래그로 완전 재생성합니다.

---

### 2. 메트로 번들러 캐시 문제

**증상:** 파일 저장 후 변경사항이 반영되지 않음

**해결책:**

```bash
npm run start:clear
```

Metro bundler 캐시를 초기화합니다.

---

### 3. 의존성 설치 후 앱이 실행되지 않음

**해결책:**

```bash
npm run prebuild:clean
```

새 의존성이 네이티브 연동이 필요한 경우가 많으므로 Prebuild를 다시 실행합니다.

---

### 4. iOS/Android 특정 플랫폼만 문제

**iOS 문제:**

```bash
npm run prebuild:ios:clean
```

**Android 문제:**

```bash
npm run prebuild:android:clean
```

---

## 📚 더 알아보기

- [Expo 문서](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native 문서](https://reactnative.dev/)
- [Storybook](https://storybook.js.org/)

---

## 👥 커뮤니티

- [Expo Discord](https://chat.expo.dev)
- [Expo GitHub](https://github.com/expo/expo)
