const { Colors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "pretendard-black": ["Pretendard-Black"],
        "pretendard-bold": ["Pretendard-Bold"],
        "pretendard-extrabold": ["Pretendard-ExtraBold"],
        "pretendard-light": ["Pretendard-Light"],
        "pretendard-medium": ["Pretendard-Medium"],
        "pretendard-regular": ["Pretendard-Regular"],
        "pretendard-semibold": ["Pretendard-SemiBold"],
        "pretendard-thin": ["Pretendard-Thin"],
        "pretendard-extralight": ["Pretendard-ExtraLight"],
      },
      colors: Colors,
    },
  },
  darkMode: "class",
};
