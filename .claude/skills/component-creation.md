# Component Creation Skill

React Native 컴포넌트 제작을 위한 표준 패턴 가이드입니다.

## Stateless 컴포넌트 패턴 (예: Button)

상태 관리가 필요 없는 순수 프레젠테이션 컴포넌트에 사용합니다.

### 폴더 구조
```
ComponentName/
├── ComponentName.tsx          # UI 컴포넌트
├── ComponentName.stories.tsx  # Storybook 스토리
└── index.ts                   # 단순 re-export
```

### ComponentName.tsx 패턴
- heroui-native 컴포넌트 래핑
- Compound 컴포넌트 패턴 지원 (예: Button.Label)
- forwardRef 사용
- startIcon/endIcon 같은 편의 props 추가 가능

### index.ts 패턴 (Stateless)
```typescript
export { ComponentName, type ComponentNameProps } from './ComponentName';
```

### 특징
- ✅ 상태 관리 없음
- ✅ 순수 프레젠테이션 컴포넌트
- ✅ heroui-native 확장
- ✅ Compound 컴포넌트 지원

---

## Stateful 컴포넌트 패턴 (예: TextField)

입력/상태 관리가 필요한 컴포넌트에 사용합니다.

### 폴더 구조
```
ComponentName/
├── ComponentName.tsx          # UI 컴포넌트 (순수 프레젠테이션)
├── ComponentName.stories.tsx  # Storybook 스토리 (UI만)
└── index.ts                   # MobX 통합 로직
```

### ComponentName.tsx 패턴
- 순수 UI 컴포넌트 (상태 로직 없음)
- `value`, `onChangeText` 같은 controlled props 받음
- Compound 컴포넌트 패턴 지원

### index.ts 패턴 (Stateful)
```typescript
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { useFormField } from '@cocrepo/hooks';
import type { MobxProps } from '@cocrepo/types';
import { ComponentName as ComponentNameUI } from './ComponentName';

export interface ComponentNameProps<T>
  extends Omit<ComponentNameUIProps, 'value' | 'onChangeText'>,
          MobxProps<T> {}

export const ComponentName = observer(<T,>({
  state,
  path,
  ...props
}: ComponentNameProps<T>) => {
  const { value, onChange } = useFormField(state, path);

  const handleChange = action((newValue: string) => {
    onChange(newValue);
  });

  return (
    <ComponentNameUI
      value={value}
      onChangeText={handleChange}
      {...props}
    />
  );
});

// UI 컴포넌트도 export (선택적 직접 사용)
export { ComponentName as ComponentNameUI } from './ComponentName';
export type { ComponentNameProps as ComponentNameUIProps } from './ComponentName';
```

### 특징
- ✅ UI와 로직 분리
- ✅ MobX 상태 관리
- ✅ Dual export: Stateful + Stateless
- ✅ Form integration via useFormField

---

## Storybook 스토리 패턴

### 공통 패턴
```typescript
import { ComponentShowcase, Text } from '@/components';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

const meta: Meta<ComponentProps> = {
  title: 'components/ui/category/ComponentName',
  component: Component,
  decorators: [
    Story => (
      <ComponentShowcase
        title="ComponentName"
        description={[
          '컴포넌트 설명 1',
          '컴포넌트 설명 2',
        ]}
      >
        <Story />
      </ComponentShowcase>
    ),
  ],
};
```

### 스토리 구성
- 하나의 스토리에 여러 변형 표시
- `전체_변형`, `크기_전체`, `상태_전체` 등으로 그룹화
- Text component의 `variant="label"` 사용
- View의 `className="gap-4 w-full"` 활용

---

## 파일명 규칙

### ✅ DO
- ComponentName.tsx (UI 컴포넌트)
- ComponentName.stories.tsx (스토리)
- index.ts (export 로직)

### ❌ DON'T
- ComponentNameView.tsx (View 접미사 사용 금지)
- ComponentName-stories.tsx (하이픈 사용 금지)
- ComponentName.test.tsx는 별도 패턴 (테스트는 다른 규칙)

---

## 사용 예시

### Stateless 컴포넌트 생성
```bash
# Button 같은 stateless 컴포넌트
ComponentName/
├── Button.tsx
├── Button.stories.tsx
└── index.ts (단순 export)
```

### Stateful 컴포넌트 생성
```bash
# TextField 같은 stateful 컴포넌트
ComponentName/
├── TextField.tsx (UI only)
├── TextField.stories.tsx
└── index.ts (MobX 통합)
```
