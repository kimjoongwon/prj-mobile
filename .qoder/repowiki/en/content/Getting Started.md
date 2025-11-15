# Getting Started

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [package.json](file://package.json)
- [app.json](file://app.json)
</cite>

## Table of Contents

1. [Development Environment Setup](#development-environment-setup)
2. [Platform-Specific Requirements](#platform-specific-requirements)
3. [Development Setup Workflow](#development-setup-workflow)
4. [Running the Application](#running-the-application)
5. [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Development Environment Setup

To set up the Plate development environment, you need to ensure your system meets the required specifications. This project is built using Expo and React Native, which allows for cross-platform development across iOS, Android, and web platforms.

### Node.js and Package Manager Requirements

The project requires **Node.js 16+** to run properly. You can verify your Node.js version by running:

```bash
node --version
```

If you need to install or upgrade Node.js, visit the [official Node.js website](https://nodejs.org/).

You can use either **npm** or **yarn** as your package manager. The project specifies minimum versions in its `package.json` file:

- Node.js: >=22.0.0
- npm: >=10.0.0

Install project dependencies using:

```bash
npm install
```

This command installs all dependencies listed in `package.json`, including Expo, React Native, navigation libraries, state management tools, and UI components.

**Section sources**

- [README.md](file://README.md#L35-L36)
- [package.json](file://package.json#L30-L32)

## Platform-Specific Requirements

### iOS Development Requirements

To develop for iOS, you must be using a **Mac** with **Xcode** installed. Xcode provides the necessary tools and simulators for building and testing iOS applications.

Ensure you have Xcode installed from the Mac App Store. After installation, open Xcode to accept the license agreement and install additional components if prompted.

The project's `app.json` configures iOS-specific settings such as:

- Bundle identifier: `com.anonymous.plate`
- Supports tablet devices
- App icons and splash screen configuration

**Section sources**

- [README.md](file://README.md#L37)
- [app.json](file://app.json#L11-L14)

### Android Development Requirements

For Android development, you need **Android Studio** or the standalone **Android SDK**. Android Studio provides the Android emulator and development tools required for building Android apps.

Install Android Studio from the [official website](https://developer.android.com/studio), then set up an Android Virtual Device (AVD) through the AVD Manager for testing.

The `app.json` file contains Android-specific configurations:

- Package name: `com.anonymous.plate`
- Adaptive icons with foreground, background, and monochrome images
- Edge-to-edge display enabled
- Predictive back gesture disabled

**Section sources**

- [README.md](file://README.md#L38)
- [app.json](file://app.json#L15-L25)

## Development Setup Workflow

After installing the required tools and dependencies, you can start the development server using Expo's CLI.

### Starting the Development Server

Use the following command to start the development server:

```bash
npm start
```

This command launches the Metro bundler, which serves your application code and supports Hot Module Replacement (HMR) for fast development feedback. The bundler caches compiled modules to improve startup performance.

When you run `npm start`, you'll see a QR code and options to launch on different platforms.

**When to use `npm start`:**

- First time launching the app
- When HMR is working correctly
- When there are no Metro bundler cache issues

**Section sources**

- [README.md](file://README.md#L48-L61)
- [package.json](file://package.json#L34)

### Clearing Metro Bundler Cache

If you encounter issues with outdated code or styling not being applied, you may need to clear the Metro bundler cache:

```bash
npm run start:clear
```

This command starts the development server with the `--clear` flag, forcing Metro to rebuild all modules from scratch instead of using cached versions.

**When to use `npm run start:clear`:**

- Metro bundler cache issues prevent `npm start` from working
- After adding new dependencies
- When style or configuration changes aren't being applied
- When Metro errors occur

The decision flow for choosing between `npm start` and `npm run start:clear` is:

```
npm start → Error occurs?
   ↓ YES
npm run start:clear → Resolved?
   ↓ YES: Continue using
   ↓ NO: Refer to Prebuild section
```

**Section sources**

- [README.md](file://README.md#L70-L93)
- [package.json](file://package.json#L35)

## Running the Application

You can run the application on different platforms using specific npm scripts defined in `package.json`.

### Running on iOS

To run the application on an iOS simulator:

```bash
npm run ios
```

To run with cache clearing:

```bash
npm run ios:clear
```

These commands use Expo's `expo run:ios` under the hood, which builds the app and launches it on the iOS simulator.

**Section sources**

- [README.md](file://README.md#L104-L111)
- [package.json](file://package.json#L36)

### Running on Android

To run the application on an Android emulator:

```bash
npm run android
```

To run with cache clearing:

```bash
npm run android:clear
```

These commands use Expo's `expo run:android` command to build and launch the app on an Android emulator.

**Section sources**

- [README.md](file://README.md#L118-L125)
- [package.json](file://package.json#L37)

### Running on Web

To run the application in a web browser:

```bash
npm run web
```

To run with Vite cache clearing:

```bash
npm run web:clear
```

The web version uses React Native Web to render the components in a browser environment.

**Section sources**

- [README.md](file://README.md#L132-L139)
- [package.json](file://package.json#L38-L39)

## Troubleshooting Common Issues

### Metro Bundler Cache Problems

One of the most common issues during development is the Metro bundler cache serving outdated code. Symptoms include:

- Code changes not being reflected after saving files
- Style updates not appearing
- Old component behavior persisting

**Solution:**

Clear the Metro bundler cache using:

```bash
npm run start:clear
```

This forces Metro to recompile all modules and eliminates cache-related issues.

**Section sources**

- [README.md](file://README.md#L619-L630)

### Native Project Creation Errors

If you encounter "Failed to create native project" errors, this is typically due to cache issues or configuration conflicts.

**Solution:**

Use the clean prebuild command:

```bash
npm run prebuild:clean
```

This completely removes the `ios/` and `android/` directories and regenerates them from scratch based on the Expo configuration in `app.json`.

**Section sources**

- [README.md](file://README.md#L607-L617)

### Dependency Installation Issues

After installing new dependencies, especially those with native modules, the app might fail to start.

**Solution:**

Run a clean prebuild:

```bash
npm run prebuild:clean
```

Many dependencies require native code integration, and a fresh prebuild ensures proper configuration.

**Section sources**

- [README.md](file://README.md#L633-L642)

### Platform-Specific Issues

If you're experiencing issues on a specific platform:

**For iOS problems:**

```bash
npm run prebuild:ios:clean
```

**For Android problems:**

```bash
npm run prebuild:android:clean
```

These commands regenerate only the platform-specific native projects, which can resolve platform-specific configuration issues.

**Section sources**

- [README.md](file://README.md#L647-L657)
