# Inputs

<cite>
**Referenced Files in This Document**   
- [Button.tsx](file://components/ui/inputs/Button/Button.tsx)
- [TextField.tsx](file://components/ui/inputs/TextField/TextField.tsx)
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx)
- [ListSelect.tsx](file://components/ui/inputs/ListSelect/ListSelect.tsx)
- [ListSelect.web.tsx](file://components/ui/inputs/ListSelect/ListSelect.web.tsx)
- [Chip.tsx](file://components/ui/inputs/Chip/Chip.tsx)
- [DarkModeSwitch.tsx](file://components/ui/inputs/DarkModeSwitch/DarkModeSwitch.tsx)
- [RadioGroup.styles.ts](file://components/ui/inputs/RadioGroup/RadioGroup.styles.ts)
- [TextField.stories.tsx](file://components/ui/inputs/TextField/TextField.stories.tsx)
- [RadioGroup.stories.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.stories.tsx)
- [ListSelect.stories.tsx](file://components/ui/inputs/ListSelect/ListSelect.stories.tsx)
- [Button.stories.tsx](file://components/ui/inputs/Button/Button.stories.tsx)
- [Chip.stories.tsx](file://components/ui/inputs/Chip/Chip.stories.tsx)
- [DarkModeSwitch.stories.tsx](file://components/ui/inputs/DarkModeSwitch/DarkModeSwitch.stories.tsx)
- [useTheme.ts](file://hooks/useTheme.ts)
- [unistyles.ts](file://unistyles.ts)
- [unistyle.txt](file://unistyle.txt)
</cite>

## Table of Contents
1. [Button](#button)
2. [TextField](#textfield)
3. [RadioGroup](#radiogroup)
4. [ListSelect](#listselect)
5. [Chip](#chip)
6. [DarkModeSwitch](#darkmodeswitch)
7. [Styling Mechanisms](#styling-mechanisms)
8. [Composition Patterns](#composition-patterns)
9. [State Management](#state-management)
10. [Accessibility](#accessibility)
11. [Troubleshooting](#troubleshooting)

## Button

The Button component is an enhanced wrapper around the heroui-native Button that provides additional features for icon placement and text handling. It supports three implementation patterns: simple text with automatic Label wrapping, startIcon/endIcon props for convenient icon placement, and manual composition using the Button.Label compound component. The component handles different cases based on the presence of icon props and the type of children provided, ensuring consistent rendering across all usage patterns. It maintains full compatibility with the underlying heroui-native Button while adding convenience features for common use cases.

**Section sources**
- [Button.tsx](file://components/ui/inputs/Button/Button.tsx#L1-L90)
- [Button.stories.tsx](file://components/ui/inputs/Button/Button.stories.tsx#L1-L196)

## TextField

The TextField component is a UI container that wraps the HeroTextField from heroui-native, extending it with support for description and error message display. It implements a composite component pattern with subcomponents (Label, Input, InputStartContent, InputEndContent, Description, ErrorMessage) that can be used either through props or as direct children. The component guarantees a specific rendering order: Label → Input → Description → ErrorMessage, following the heroui-native standard structure. It supports two usage patterns: convenience props (inputStartContent, inputEndContent, description, errorMessage) for simple cases, and direct children for complete control over the component structure.

**Section sources**
- [TextField.tsx](file://components/ui/inputs/TextField/TextField.tsx#L1-L178)
- [TextField.stories.tsx](file://components/ui/inputs/TextField/TextField.stories.tsx#L1-L82)

## RadioGroup

The RadioGroup component allows users to select a single option from a list of mutually exclusive options. It supports various sizes (sm, md, lg), colors (default, primary, secondary, success, warning, danger), and orientations (vertical, horizontal). The component implements React Native animations using react-native-reanimated for smooth state transitions when selecting options. It provides accessibility features including proper role assignment (radio), state indication (checked), and keyboard navigation support. The component supports both controlled and uncontrolled usage patterns and exposes imperative methods through a ref (setValue, getValue, focus, blur) for programmatic interaction.

**Section sources**
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx#L1-L289)
- [RadioGroup.styles.ts](file://components/ui/inputs/RadioGroup/RadioGroup.styles.ts#L1-L139)
- [RadioGroup.stories.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.stories.tsx#L1-L476)

## ListSelect

The ListSelect component provides selection functionality for lists with support for both single and multiple selection modes. It is implemented as an overloading function that accepts different props based on the selection mode. The component manages internal state for selected items and provides callbacks for selection changes. It supports custom rendering of list items through the renderItem prop, which receives the data item, selection state, and index. The component handles both controlled (selectedItems, onChangeSelection) and uncontrolled (defaultSelectedItems) usage patterns. Platform-specific implementations exist for web (ListSelect.web.tsx) and native, with the web version using button elements for better accessibility.

**Section sources**
- [ListSelect.tsx](file://components/ui/inputs/ListSelect/ListSelect.tsx#L1-L187)
- [ListSelect.web.tsx](file://components/ui/inputs/ListSelect/ListSelect.web.tsx#L1-L195)
- [ListSelect.stories.tsx](file://components/ui/inputs/ListSelect/ListSelect.stories.tsx#L1-L188)

## Chip

The Chip component is an enhanced wrapper around the heroui-native Chip that provides additional features for content placement and text handling. Similar to the Button component, it supports three implementation patterns: simple text with automatic Label wrapping, startContent/endContent props for convenient content placement, and manual composition using the Chip.Label compound component. The component handles different cases based on the presence of content props and the type of children provided, ensuring consistent rendering across all usage patterns. It maintains full compatibility with the underlying heroui-native Chip while adding convenience features for common use cases such as status indicators and filter chips.

**Section sources**
- [Chip.tsx](file://components/ui/inputs/Chip/Chip.tsx#L1-L90)
- [Chip.stories.tsx](file://components/ui/inputs/Chip/Chip.stories.tsx#L1-L324)

## DarkModeSwitch

The DarkModeSwitch component is a specialized button that toggles between dark and light themes. It uses the useTheme hook to access the current theme state and toggle functionality. The component renders as an icon-only button with a ghost variant and small size. It displays different icons (moon/sunny) based on the current theme state and uses theme-appropriate colors for the icons. The component is designed to be lightweight and unobtrusive, making it suitable for placement in headers or settings panels. It leverages the Uniwind theming system for theme management and supports all defined themes (light, dark, alpha-light, alpha-dark).

**Section sources**
- [DarkModeSwitch.tsx](file://components/ui/inputs/DarkModeSwitch/DarkModeSwitch.tsx#L1-L32)
- [DarkModeSwitch.stories.tsx](file://components/ui/inputs/DarkModeSwitch/DarkModeSwitch.stories.tsx#L1-L38)
- [useTheme.ts](file://hooks/useTheme.ts#L1-L41)

## Styling Mechanisms

The input components utilize both Tailwind CSS and Uniwind for styling. The styling approach combines utility-first classes with dynamic styling based on component state. For components like RadioGroup, helper functions in RadioGroup.styles.ts generate class strings based on props such as size, color, orientation, and state (selected, disabled, invalid). These helper functions return Tailwind class strings that are applied via the className prop. The components also use inline styles for complex layout properties that cannot be easily expressed with utility classes. The styling system integrates with the Uniwind theming system, allowing components to respond to theme changes and access theme values like colors and spacing. The use of Uniwind's useUniwind hook enables dynamic style computation based on the current theme.

**Section sources**
- [RadioGroup.styles.ts](file://components/ui/inputs/RadioGroup/RadioGroup.styles.ts#L1-L139)
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx#L1-L289)
- [useTheme.ts](file://hooks/useTheme.ts#L1-L41)
- [unistyles.ts](file://unistyles.ts#L395-L444)
- [unistyle.txt](file://unistyle.txt#L681-L5374)

## Composition Patterns

The input components demonstrate several composition patterns that enhance flexibility and reusability. The Button, TextField, and Chip components use the compound component pattern, where the main component is extended with subcomponents (e.g., Button.Label, TextField.Input, Chip.Label). This pattern allows for both simple usage with props and advanced usage with manual composition. The TextField component implements a container pattern that processes its children to ensure correct ordering and injects props as needed. The ListSelect component uses function overloading to provide different type signatures for single and multiple selection modes, enabling type-safe usage. These composition patterns promote consistency in API design across components while accommodating different levels of complexity in usage.

**Section sources**
- [Button.tsx](file://components/ui/inputs/Button/Button.tsx#L1-L90)
- [TextField.tsx](file://components/ui/inputs/TextField/TextField.tsx#L1-L178)
- [Chip.tsx](file://components/ui/inputs/Chip/Chip.tsx#L1-L90)
- [ListSelect.tsx](file://components/ui/inputs/ListSelect/ListSelect.tsx#L1-L187)

## State Management

The input components implement state management patterns that support both controlled and uncontrolled usage. Components like RadioGroup and ListSelect maintain internal state for uncontrolled usage (via useState) while also supporting external state management through props like value/selectedItems and onChangeSelection. The components use useCallback to memoize event handlers and prevent unnecessary re-renders. For animated components like RadioGroup, shared values from react-native-reanimated are used to manage animation state. The MobX-integrated versions of components (indicated by observer and useFormField) provide state management integration with the MobX library, allowing form state to be managed in a centralized store. This dual approach to state management provides flexibility for different application architectures.

**Section sources**
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx#L1-L289)
- [ListSelect.tsx](file://components/ui/inputs/ListSelect/ListSelect.tsx#L1-L187)
- [TextField.tsx](file://components/ui/inputs/TextField/TextField.tsx#L1-L178)

## Accessibility

The input components include several accessibility features to ensure usability for all users. The RadioGroup component uses proper accessibility roles (radio), states (checked, disabled), and labels to provide semantic meaning to assistive technologies. It supports keyboard navigation with focus and blur methods exposed through the ref. The ListSelect component uses button elements on web for better keyboard accessibility and screen reader support. All interactive components use Pressable or button elements with appropriate onPress handlers and disabled states. Labels and error messages are properly associated with their respective controls. The components follow platform-specific accessibility guidelines, with web implementations using native HTML semantics where appropriate.

**Section sources**
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx#L1-L289)
- [ListSelect.web.tsx](file://components/ui/inputs/ListSelect/ListSelect.web.tsx#L1-L195)
- [DarkModeSwitch.tsx](file://components/ui/inputs/DarkModeSwitch/DarkModeSwitch.tsx#L1-L32)

## Troubleshooting

Common issues with the input components typically relate to styling conflicts, event propagation, and state management. Styling conflicts may occur when multiple style systems are used simultaneously; the recommended approach is to use array syntax ([style1, style2]) rather than object spreading for style merging to maintain Unistyles C++ state. Event propagation issues can arise when nested interactive elements are used; these can be resolved by ensuring proper event handling and using event.preventDefault() when necessary. State management issues often occur when mixing controlled and uncontrolled patterns; components should consistently use one pattern or the other. For animation issues in RadioGroup, ensure that react-native-reanimated is properly configured. When encountering "Style is not bound!" errors, verify that styles are not being spread and that array syntax is used for style composition.

**Section sources**
- [unistyle.txt](file://unistyle.txt#L681-L5374)
- [RadioGroup.tsx](file://components/ui/inputs/RadioGroup/RadioGroup.tsx#L1-L289)
- [Button.tsx](file://components/ui/inputs/Button/Button.tsx#L1-L90)
- [TextField.tsx](file://components/ui/inputs/TextField/TextField.tsx#L1-L178)