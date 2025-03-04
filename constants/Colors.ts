/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    background: "#FFFFFF",
    foreground: "#11181C",
    divider: "#11111126",
    focus: "#006FEE",
    content1: "#FFFFFF",
    content2: "#f4f4f5",
    content3: "#e4e4e7",
    content4: "#d4d4d8",
    default: "#d4d4d8",
    primary: "#006FEE",
    secondary: "#7828c8",
    success: "#17c964",
    warning: "#f5a524",
    danger: "#F31260",
    text: "#11181C",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: "#000000",
    foreground: "#ECEDEE",
    divider: "#ffffff26",
    focus: "#006FEE",
    content1: "#18181b",
    content2: "#27272a",
    content3: "#3f3f46",
    content4: "#52525b",
    default: "#3f3f46",
    "default-100": "#18181b",
    primary: "#006FEE",
    secondary: "#9353d3",
    success: "#17c964",
    warning: "#f5a524",
    danger: "#F31260",
    text: "#ECEDEE",
    // background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
