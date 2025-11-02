# Plate - Expo & React Native 프로젝트

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 📋 목차

- [빠른 시작](#빠른-시작)
- [설치](#설치)
- [개발 서버 실행](#개발-서버-실행)
- [네이티브 빌드 (Prebuild)](#네이티브-빌드-prebuild)
- [Storybook](#storybook)
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

| 상황 | 필요 | 명령어 |
|------|:---:|--------|
| 처음 iOS/Android 빌드하기 | ✅ | `npm run prebuild:clean` |
| 네이티브 패키지 추가 (`npx expo install`) | ✅ | `npm run prebuild:clean` |
| app.json 설정 변경 | ✅ | `npm run prebuild:clean` |
| 번들 설정 변경 | ✅ | `npm run prebuild:clean` |
| 의존성 버전 업그레이드 | ✅ | `npm run prebuild:clean` |
| 네이티브 코드 수정 | ✅ | `npm run prebuild:clean` |
| 파일 저장으로 HMR 적용 | ❌ | `npm start` (prebuild 불필요) |
| CSS 스타일 변경 | ❌ | `npm start` (prebuild 불필요) |

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
```

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
