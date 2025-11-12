# Component Architecture Guidelines

Guidelines for building consistent, maintainable components with Unistyles 3.0 dynamic functions.

## Core Principles

1. **All Logic in .styles.ts**: All styling logic MUST be in dynamic functions
2. **Direct Parameter Passing**: Pass raw values (boolean, string, number) - NO intermediate variables
3. **No Type Casting**: No `as any`, all types must be clean
4. **Minimal Component Logic**: Component only handles state and rendering
5. **Dynamic Function Parameters**: Accept all style-affecting values as parameters

## Anti-Patterns (What NOT to Do)

### ❌ Static Variant + State Pattern

```typescript
// DON'T: Pre-computing all combinations
export const createStyles = StyleSheet.create(theme => ({
	fieldContainerDefaultBase: {
		/* ... */
	},
	fieldContainerDefaultFocused: {
		/* ... */
	},
	fieldContainerOutlinedBase: {
		/* ... */
	},
	fieldContainerOutlinedFocused: {
		/* ... */
	},
	// ... combinatorial explosion
}));

// DON'T: String concatenation to select styles
const style = createStyles[`fieldContainer${variant}${state}`];
```

### ❌ Intermediate State Variables

```typescript
// DON'T: Create intermediate state variables
const fieldState = isDisabled ? 'disabled' : isFocused ? 'focused' : 'base';
const containerStyle = createStyles.fieldContainer(variant, fieldState, size);
```

### ❌ Type Casting

```typescript
// DON'T: Use type casting to bypass type safety
const style = [createStyles.field, customStyle] as any;
```

### ❌ Helper Functions

```typescript
// DON'T: Create wrapper functions
const getFieldStyle = (variant, disabled) => {
	return createStyles[`field${variant}${disabled ? 'Disabled' : 'Base'}`];
};
```

### ❌ Size Lookup Objects

```typescript
// DON'T: Maintain separate size config objects
export const sizes = {
	sm: { height: 44, fontSize: 14 },
	md: { height: 48, fontSize: 15 },
};
const sizeConfig = sizes[size];
```

### ❌ Array Spreading with Type Casting

```typescript
// DON'T: Spread styles into arrays then cast
const style = [createStyles.field, customStyle] as any;
```

### ❌ Unnecessary useMemo

```typescript
// DON'T: Memoize simple function calls
const style = useMemo(
	() => createStyles.field(isDisabled, size),
	[isDisabled, size]
);
```

---

## Correct Pattern (What TO Do)

### ✅ Dynamic Functions with Direct Parameters

**Input.styles.ts:**

```typescript
import { StyleSheet } from 'react-native-unistyles';
import type { UnistyleTheme } from '@/unistyles';

export const createStyles = StyleSheet.create((theme: UnistyleTheme) => ({
	// ════════════════════════════════════════════════════════════════════════════
	// FIELD CONTAINER
	// Accepts ALL state-affecting parameters directly
	// ════════════════════════════════════════════════════════════════════════════
	fieldContainer: (
		variant: 'default' | 'outlined',
		isDisabled: boolean, // State flags - NOT intermediate variable
		isFocused: boolean, // directly from component state
		isInvalid: boolean, // directly from component props
		size: 'sm' | 'md' | 'lg', // Size directly as parameter
		customStyle?: Record<string, any> // Custom style override
	) => {
		// Size configuration INSIDE function
		const sizeStyles = {
			sm: { height: 44, paddingHorizontal: 12 },
			md: { height: 48, paddingHorizontal: 12 },
			lg: { height: 52, paddingHorizontal: 16 },
		};

		// State determination INSIDE function
		const isOutlined = variant === 'outlined';
		let borderColor = 'transparent';
		if (isOutlined) {
			if (isFocused) {
				borderColor = theme.colors.primary.DEFAULT;
			} else if (isInvalid) {
				borderColor = theme.colors.danger.DEFAULT;
			} else {
				borderColor = theme.colors.default[200];
			}
		}

		// Opacity based on disabled state
		const opacity = isDisabled ? theme.opacity.disabled : 1;

		return {
			flexDirection: 'row',
			alignItems: 'center',
			borderRadius: theme.radius.md,
			backgroundColor: isOutlined
				? theme.colors.background
				: theme.colors.content1.DEFAULT,
			borderWidth: isOutlined ? 1 : 0,
			borderColor,
			opacity,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// TEXT INPUT
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	textInput: (
		isDisabled: boolean,
		size: 'sm' | 'md' | 'lg',
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { fontSize: 14 },
			md: { fontSize: 15 },
			lg: { fontSize: 16 },
		};

		return {
			flex: 1,
			fontFamily: 'Pretendard-Regular',
			color: isDisabled ? theme.colors.default[400] : theme.colors.foreground,
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// LABEL
	// Size parameter integrated
	// ════════════════════════════════════════════════════════════════════════════
	label: (
		isInvalid: boolean,
		size: 'sm' | 'md' | 'lg',
		customStyle?: Record<string, any>
	) => {
		const sizeStyles = {
			sm: { fontSize: 12 },
			md: { fontSize: 13 },
			lg: { fontSize: 14 },
		};

		return {
			fontWeight: '500',
			fontFamily: 'Pretendard-Medium',
			marginBottom: theme.spacing[1],
			color: isInvalid
				? theme.colors.danger.DEFAULT
				: theme.colors.default[600],
			...sizeStyles[size],
			...customStyle,
		};
	},

	// ════════════════════════════════════════════════════════════════════════════
	// STATIC STYLES (No parameters needed)
	// ════════════════════════════════════════════════════════════════════════════
	rootContainer: {
		width: '100%',
	},

	requiredIndicator: {
		fontWeight: '600',
		color: theme.colors.danger.DEFAULT,
	},

	startContentContainer: {
		marginRight: theme.spacing[2],
		justifyContent: 'center',
		alignItems: 'center',
	},

	clearButtonContainer: {
		padding: theme.spacing[1],
		justifyContent: 'center',
		alignItems: 'center',
	},

	endContentContainer: {
		marginLeft: theme.spacing[2],
		justifyContent: 'center',
		alignItems: 'center',
	},

	supportTextContainer: {
		marginTop: theme.spacing[1],
	},

	descriptionText: {
		fontSize: 12,
		lineHeight: 16,
		fontFamily: 'Pretendard-Regular',
		color: theme.colors.default[500],
	},

	errorText: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: '500',
		fontFamily: 'Pretendard-Medium',
		color: theme.colors.danger.DEFAULT,
	},
}));
```

**InputView.tsx (Native):**

```typescript
export const InputView = forwardRef<InputRef, InputProps>(
  ({
    variant = 'default',
    size = 'md',
    isDisabled = false,
    isFocused,
    isInvalid = false,
    style,
    inputStyle,
    labelStyle,
    // ... other props
  }, ref) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);  // State only

    // ════════════════════════════════════════════════════════════════════════════
    // STYLE SELECTION - Direct function calls, NO intermediate variables
    // ════════════════════════════════════════════════════════════════════════════

    // Pass state flags DIRECTLY to functions - NO intermediate variable
    const fieldContainerStyle = createStyles.fieldContainer(
      variant,
      isDisabled,      // ← boolean directly
      isFocused,       // ← boolean directly
      isInvalid,       // ← boolean directly
      size,
      style            // ← custom override
    );

    const textInputStyle = createStyles.textInput(isDisabled, size, inputStyle);
    const labelStyle_ = createStyles.label(isInvalid, size, labelStyle);

    // Only compute what can't be expressed as parameters
    const clearButtonSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;

    return (
      <View style={createStyles.rootContainer}>
        {label && <Text style={labelStyle_}>{label}</Text>}
        <TouchableOpacity style={fieldContainerStyle}>
          <TextInput style={textInputStyle} />
        </TouchableOpacity>
      </View>
    );
  }
);
```

**InputView.web.tsx (Web):**

```typescript
export const InputView = forwardRef<InputRef, InputProps>(
  ({
    variant = 'default',
    size = 'md',
    isDisabled = false,
    isFocused,
    isInvalid = false,
    style,
    inputStyle,
    labelStyle,
    // ... other props
  }, ref) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    // ════════════════════════════════════════════════════════════════════════════
    // STYLE SELECTION - Same function calls for both platforms
    // ════════════════════════════════════════════════════════════════════════════

    // SAME function calls as native - logic is identical
    const fieldContainerStyles = createStyles.fieldContainer(
      variant,
      isDisabled,
      isFocused,
      isInvalid,
      size,
      style
    );

    const labelStyles = createStyles.label(isInvalid, size, labelStyle);
    const textInputStyles = createStyles.textInput(isDisabled, size, inputStyle);

    // Convert Unistyles to CSS - ONLY platform-specific conversion
    const fieldContainerStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: fieldContainerStyles.alignItems || 'center',
      borderRadius: `${fieldContainerStyles.borderRadius}px`,
      height: `${fieldContainerStyles.height}px`,
      paddingLeft: `${fieldContainerStyles.paddingHorizontal}px`,
      paddingRight: `${fieldContainerStyles.paddingHorizontal}px`,
      backgroundColor: fieldContainerStyles.backgroundColor,
      borderWidth: fieldContainerStyles.borderWidth,
      borderColor: fieldContainerStyles.borderColor || 'transparent',
      opacity: fieldContainerStyles.opacity || 1,
      borderStyle: 'solid',
    };

    return (
      <div style={{ width: '100%' }}>
        {label && <label style={labelStyle_}>{label}</label>}
        <div style={fieldContainerStyle}>
          <input style={inputTextStyle} />
        </div>
      </div>
    );
  }
);
```

---

## Key Principles Explained

### 1. All Parameters Direct, Not Intermediate

**Why:** Eliminates one layer of indirection and makes the data flow clear.

```typescript
// ❌ Wrong
const state = isDisabled ? 'disabled' : 'base';
const style = createStyles.field(variant, state, size);

// ✅ Right
const style = createStyles.field(variant, isDisabled, size);
```

### 2. Size as Parameter, Not Lookup

**Why:** No separate size objects, all logic in one place, easier to refactor.

```typescript
// ❌ Wrong
const sizeConfig = sizes[size];
return <View style={{ height: sizeConfig.height }} />;

// ✅ Right
const fieldContainer = createStyles.fieldContainer(variant, isDisabled, isFocused, isInvalid, size);
// sizeConfig is computed inside the function
```

### 3. Custom Styles as Parameter

**Why:** Merge happens inside function with spread operator, no type casting needed.

```typescript
// ❌ Wrong
const style = [createStyles.field, customStyle] as any;

// ✅ Right
const style = createStyles.field(isDisabled, size, customStyle);
// Inside function: { ...baseStyles, ...customStyle }
```

### 4. Same Functions for Both Platforms

**Why:** Logic is identical, only CSS conversion differs.

```typescript
// Both platforms call same function
const fieldStyle = createStyles.fieldContainer(variant, isDisabled, isFocused, isInvalid, size);

// Native: use directly
<TouchableOpacity style={fieldStyle} />

// Web: convert to CSS
const cssStyle: React.CSSProperties = { ...convertToCSS(fieldStyle) };
<div style={cssStyle} />
```

---

## Component Template

```typescript
// components/ui/Input/InputView.tsx
import type React from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Text } from '../../display/Text';
import { createStyles } from './Input.styles';

export type InputVariant = 'default' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  variant?: InputVariant;
  size?: InputSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isClearable?: boolean;
  label?: string;
  // ... other props
}

export const InputView = forwardRef<any, InputProps>(
  ({
    variant = 'default',
    size = 'md',
    isDisabled = false,
    isInvalid = false,
    style,
    inputStyle,
    labelStyle,
    // ... other props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    // ════════════════════════════════════════════════════════════════════════════
    // STYLE SELECTION - No intermediate variables
    // Pass state flags directly to dynamic functions
    // ════════════════════════════════════════════════════════════════════════════

    const fieldContainerStyle = createStyles.fieldContainer(
      variant,
      isDisabled,
      isFocused,
      isInvalid,
      size,
      style
    );

    const textInputStyle = createStyles.textInput(isDisabled, size, inputStyle);
    const labelStyle_ = createStyles.label(isInvalid, size, labelStyle);

    return (
      <View style={createStyles.rootContainer}>
        {label && <Text style={labelStyle_}>{label}</Text>}
        <TouchableOpacity style={fieldContainerStyle}>
          <TextInput style={textInputStyle} />
        </TouchableOpacity>
      </View>
    );
  }
);

InputView.displayName = 'InputView';
export default InputView;
```

---

## Refactoring Checklist

When refactoring other components, use this checklist:

- [ ] Remove static variant + state style objects
- [ ] Convert to dynamic functions accepting boolean/string parameters
- [ ] Remove size lookup objects - integrate into dynamic functions
- [ ] Remove intermediate state variables (`fieldState`, `sizeConfig`, etc.)
- [ ] Pass state flags directly to functions: `createStyles.field(variant, isDisabled, isFocused, ...)`
- [ ] Remove helper wrapper functions
- [ ] Remove type casting (`as any`)
- [ ] Remove unnecessary `useMemo` for simple function calls
- [ ] Ensure custom styles are passed as last optional parameter
- [ ] Test both native and web platforms with same function calls
- [ ] Update platform-specific implementations (native uses directly, web converts to CSS)

---

## Benefits of This Pattern

1. **Single Source of Truth**: All styling logic in `.styles.ts`
2. **Type Safe**: No `as any`, all types are clean
3. **Minimal Component Code**: Only state and rendering, no style logic
4. **Cross-Platform**: Same function calls for native and web
5. **Easy to Refactor**: Add new states/variants by changing function logic, not pre-computed objects
6. **No Combinatorial Explosion**: 3 variants × 4 states = 1 function, not 12 objects
7. **Clear Data Flow**: Parameters show exactly what affects styles
8. **Maintainable**: Easy to find and change styling logic
9. **Performance**: No unnecessary memoization, no type casting overhead
10. **Scalable**: Adding new style properties is just adding parameters

---

---

## TextField Component Architecture

### Overview

TextField 컴포넌트는 **두 가지 레이어**로 구성됩니다:

1. **TextFieldView** - UI 컴포넌트 (heroui-native의 TextField를 감싼 실제 화면 구성)
2. **TextField** - MobX wrapper (form 상태 관리를 추가)

### Layer 1: TextFieldView (UI Component)

`TextFieldView`는 heroui-native의 TextField를 감싸서 레이아웃을 구성하는 **실제 UI 컴포넌트**입니다.

**특징:**

- heroui-native의 `TextFieldRootProps` 확장
- `description`, `errorMessage` props로 자동 렌더링
- 서브컴포넌트로 `Label`, `Input`, `Description`, `ErrorMessage` 제공
- 커스텀 variant/size 타입 지원

**Props:**

```typescript
export interface TextFieldViewProps extends TextFieldRootProps {
	variant?: 'default' | 'outlined';
	size?: 'sm' | 'md' | 'lg';
	description?: React.ReactNode; // 자동 렌더링
	descriptionProps?: TextFieldDescriptionProps; // 속성 커스터마이징
	errorMessage?: React.ReactNode; // 자동 렌더링
	errorMessageProps?: TextFieldErrorMessageProps; // 속성 커스터마이징
}
```

**사용 예제 1: Props로 description/errorMessage 전달**

```tsx
<TextFieldView
	description="We'll never share your email"
	errorMessage="Invalid email format"
	isInvalid={hasError}
>
	<TextFieldView.Label>Email</TextFieldView.Label>
	<TextFieldView.Input placeholder="Enter email" />
</TextFieldView>
```

**사용 예제 2: 자식 컴포넌트로 완전 제어**

```tsx
<TextFieldView>
	<TextFieldView.Label>Email</TextFieldView.Label>
	<TextFieldView.Input placeholder="Enter email" />
	<TextFieldView.Description>
		We'll never share your email
	</TextFieldView.Description>
	<TextFieldView.ErrorMessage>Invalid email</TextFieldView.ErrorMessage>
</TextFieldView>
```

### Layer 2: TextField (MobX Wrapper)

`TextField`는 TextFieldView를 감싸서 **MobX 상태 관리**를 추가합니다.

**특징:**

- MobX form state 자동 관리
- `state`와 `path` props로 상태 연결
- 자동 `value` 및 `onChangeText` 처리
- TextFieldView의 모든 props 지원

**Props:**

```typescript
export interface TextFieldProps<T>
	extends MobxProps<T>,
		Omit<TextFieldViewProps, 'children'> {
	label?: React.ReactNode; // 자동으로 Label에 렌더링
	inputProps?: TextFieldInputProps; // Input에 전달할 props
}
```

**사용 예제: MobX와 함께 사용**

```tsx
import { TextField } from '@/components/ui/inputs';

interface LoginFormState {
	email: string;
	password: string;
}

export function LoginForm() {
	const [state] = useState<LoginFormState>({
		email: '',
		password: '',
	});

	return (
		<>
			<TextField
				state={state}
				path="email"
				label="Email Address"
				description="We'll never share your email"
				inputProps={{
					placeholder: 'Enter your email',
					keyboardType: 'email-address',
				}}
			/>

			<TextField
				state={state}
				path="password"
				label="Password"
				inputProps={{
					placeholder: 'Enter password',
					secureTextEntry: true,
				}}
			/>
		</>
	);
}
```

### UI-Only Usage (TextFieldView)

MobX 없이 순수 UI 컴포넌트로만 사용:

```tsx
import { TextFieldView } from '@/components/ui/inputs/TextField';

export function SimpleForm() {
	const [email, setEmail] = useState('');

	return (
		<TextFieldView description="We'll never share your email">
			<TextFieldView.Label>Email</TextFieldView.Label>
			<TextFieldView.Input
				value={email}
				onChangeText={setEmail}
				placeholder="Enter email"
			/>
		</TextFieldView>
	);
}
```

### Component Structure

```
components/ui/inputs/TextField/
├── TextFieldView.tsx          # UI component (wraps heroui-native)
├── TextField.tsx              # MobX wrapper
├── TextFieldView.stories.tsx  # Storybook examples
└── index.ts                   # Exports
```

### Export 가이드

**기본 export (MobX wrapper):**

```typescript
import TextField from '@/components/ui/inputs/TextField';
// 또는
import { TextField } from '@/components/ui/inputs/TextField';
```

**UI-only 컴포넌트:**

```typescript
import { TextFieldView } from '@/components/ui/inputs/TextField';
import type { TextFieldViewProps } from '@/components/ui/inputs/TextField';
```

**서브컴포넌트:**

```typescript
import {
	TextFieldLabel,
	TextFieldInput,
	TextFieldDescription,
	TextFieldErrorMessage,
} from '@/components/ui/inputs/TextField';
```

### 설계 원칙

1. **Composition over Inheritance**: 서브컴포넌트로 조합 가능
2. **Props First**: children보다 props 우선 (더 간편)
3. **Library Props 활용**: heroui-native의 props를 그대로 확장
4. **선택적 자동화**: description/errorMessage는 선택사항
5. **Stateless UI**: TextFieldView는 상태 없음 (UI 전담)
6. **MobX 분리**: 상태관리는 TextField로 분리

### Hero UI Native 타입 활용

라이브러리에서 제공하는 모든 타입을 활용:

- `TextFieldRootProps` - 루트 컨테이너
- `TextFieldInputProps` - input 필드
- `TextFieldLabelProps` - label
- `TextFieldDescriptionProps` - 설명 텍스트
- `TextFieldErrorMessageProps` - 에러 메시지

---

## References

- **Unistyles 3.0 Docs**: https://www.unistyl.es/
- **Dynamic Functions**: https://www.unistyl.es/v3/references/dynamic-functions
- **Theming Guide**: https://www.unistyl.es/v3/guides/theming
- **Hero UI Native**: https://github.com/MasterBirch/heroui-native
