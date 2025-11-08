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
export const createStyles = StyleSheet.create((theme) => ({
  fieldContainerDefaultBase: { /* ... */ },
  fieldContainerDefaultFocused: { /* ... */ },
  fieldContainerOutlinedBase: { /* ... */ },
  fieldContainerOutlinedFocused: { /* ... */ },
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
const style = [
  createStyles.field,
  customStyle,
] as any;
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
    isDisabled: boolean,        // State flags - NOT intermediate variable
    isFocused: boolean,         // directly from component state
    isInvalid: boolean,         // directly from component props
    size: 'sm' | 'md' | 'lg',   // Size directly as parameter
    customStyle?: Record<string, any>  // Custom style override
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
      backgroundColor: isOutlined ? theme.colors.background : theme.colors.content1.DEFAULT,
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
      color: isInvalid ? theme.colors.danger.DEFAULT : theme.colors.default[600],
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

## References

- **Unistyles 3.0 Docs**: https://www.unistyl.es/
- **Dynamic Functions**: https://www.unistyl.es/v3/references/dynamic-functions
- **Theming Guide**: https://www.unistyl.es/v3/guides/theming
