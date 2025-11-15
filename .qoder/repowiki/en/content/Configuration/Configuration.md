# Configuration

<cite>
**Referenced Files in This Document**   
- [package.json](file://package.json)
- [app.json](file://app.json)
- [tsconfig.json](file://tsconfig.json)
- [metro.config.js](file://metro.config.js)
- [README.md](file://README.md)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Core Configuration Files](#core-configuration-files)
3. [Environment Setup Process](#environment-setup-process)
4. [Build and Deployment Workflow](#build-and-deployment-workflow)
5. [Common Configuration Tasks](#common-configuration-tasks)
6. [Configuration Issues and Troubleshooting](#configuration-issues-and-troubleshooting)
7. [Conclusion](#conclusion)

## Introduction

The Plate application utilizes a comprehensive configuration system that manages dependencies, platform-specific settings, TypeScript compilation, and bundling processes. This configuration framework enables the application to function as a cross-platform mobile app supporting iOS, Android, and web platforms through the Expo framework. The configuration system is designed to streamline development workflows, ensure consistent code quality, and facilitate efficient build and deployment processes. Understanding these configuration files is essential for developers to effectively manage the application's dependencies, customize build settings, and troubleshoot common development issues.

**Section sources**
- [package.json](file://package.json#L1-L147)
- [app.json](file://app.json#L1-L52)
- [tsconfig.json](file://tsconfig.json#L1-L17)
- [metro.config.js](file://metro.config.js#L1-L25)

## Core Configuration Files

### package.json

The package.json file serves as the central configuration for the Plate application's dependencies and development scripts. It defines the project's metadata including name, version, description, and author information. The file specifies both production dependencies and development dependencies, with a focus on Expo, React Native, and supporting libraries for navigation, state management, and UI components. Notably, the application requires Node.js 22.0.0 or higher and npm 10.0.0 or higher, indicating a commitment to modern JavaScript tooling.

The scripts section provides a comprehensive set of commands for development, testing, and deployment. These include commands for starting the development server with and without cache clearing, running on specific platforms (iOS, Android, web), linting and type checking, formatting code, and managing Storybook integration. The prebuild scripts are particularly important for generating native iOS and Android projects from the Expo configuration.

**Section sources**
- [package.json](file://package.json#L1-L147)

### app.json

The app.json file contains Expo-specific configuration that defines the application's behavior across different platforms. It specifies fundamental properties such as the app name, version, orientation (portrait-only), and icon assets. The configuration includes platform-specific settings for iOS, Android, and web, allowing for tailored experiences on each platform.

For iOS, the configuration enables tablet support and defines the bundle identifier. On Android, it configures adaptive icons with foreground, background, and monochrome images, enables edge-to-edge display, and disables the predictive back gesture. The web configuration specifies static output and favicon settings.

The plugins section integrates essential Expo modules including expo-router for navigation, expo-splash-screen for custom splash screens with light and dark mode support, and react-native-edge-to-edge for immersive display. The experiments section enables advanced features like typed routes and the React compiler, indicating the use of cutting-edge React capabilities.

**Section sources**
- [app.json](file://app.json#L1-L52)

### tsconfig.json

The tsconfig.json file configures TypeScript compilation for the Plate application. It extends the base configuration from Expo, ensuring compatibility with the Expo development environment. The configuration enables strict type checking, which helps catch potential bugs during development.

A key feature of this configuration is the path mapping that allows importing modules using the @/* alias, which resolves to the project root. This simplifies imports throughout the codebase and improves code readability. The include section specifies which files should be processed by the TypeScript compiler, covering all TypeScript and TypeScript React files, as well as generated type definitions for Expo and custom styling systems.

**Section sources**
- [tsconfig.json](file://tsconfig.json#L1-L17)

### metro.config.js

The metro.config.js file customizes the Metro bundler configuration for the Plate application. It imports the default Expo Metro configuration and extends it with Uniwind integration, which appears to be a custom or third-party library for styling. The configuration specifies the global CSS entry file and the location for auto-generated type definitions.

A notable feature is the conditional configuration based on the EXPO_PUBLIC_STORYBOOK environment variable. When Storybook mode is enabled, the configuration applies both Uniwind and Storybook wrappers to support component development and documentation. Otherwise, it uses only the Uniwind configuration. This conditional logic allows developers to seamlessly switch between regular development and Storybook component exploration modes.

**Section sources**
- [metro.config.js](file://metro.config.js#L1-L25)

## Environment Setup Process

The environment setup process for the Plate application follows a structured workflow that ensures all dependencies and configurations are properly initialized. The process begins with installing the required Node.js and npm versions, followed by running `npm install` to install all project dependencies specified in package.json.

After dependency installation, developers can start the development server using `npm start`, which launches the Expo development environment with Metro bundler. The development server provides options to run the application on iOS, Android, or web platforms. For iOS development, Xcode is required on macOS, while Android development requires Android Studio or the Android SDK.

When working with native functionality or after significant configuration changes, developers must run the prebuild process to generate or update the native iOS and Android projects. This is particularly important when adding new native dependencies or modifying app.json settings. The README.md provides detailed guidance on when to use incremental builds versus clean builds, helping developers optimize their workflow.

**Section sources**
- [README.md](file://README.md#L16-L141)
- [package.json](file://package.json#L34-L63)

## Build and Deployment Workflow

The build and deployment workflow for the Plate application is designed to support efficient development and reliable production releases. The workflow leverages Expo's prebuild system to generate native iOS and Android projects from the shared configuration in app.json. This approach allows developers to maintain a single codebase while producing platform-specific native applications.

The workflow includes different prebuild strategies based on the development context. For routine development, incremental builds (`npm run prebuild`) are sufficient and faster. However, when making significant changes to native configuration or adding new dependencies, a clean prebuild (`npm run prebuild:clean`) is recommended to ensure a consistent state.

The deployment workflow is supported by a comprehensive set of scripts that handle different scenarios. The development server scripts support hot module replacement for rapid iteration, while the clear variants help resolve caching issues. Platform-specific scripts allow targeted development on iOS, Android, or web, enabling developers to focus on specific platform requirements.

**Section sources**
- [README.md](file://README.md#L143-L222)
- [package.json](file://package.json#L58-L63)

## Common Configuration Tasks

### Adding New Dependencies

To add new dependencies to the Plate application, developers should use `npm install` followed by the package name. After installation, if the dependency requires native integration, a clean prebuild (`npm run prebuild:clean`) should be performed to ensure the native projects are properly updated. This is particularly important for Expo modules that need to be configured in app.json or require native code.

### Modifying TypeScript Settings

Modifying TypeScript settings involves editing the tsconfig.json file. Developers can adjust compiler options, add new path mappings, or modify the include/exclude patterns. After making changes, it's recommended to run `npm run type-check` to verify that the TypeScript compilation works correctly with the new settings.

### Customizing the Metro Bundler

Customizing the Metro bundler requires modifications to metro.config.js. Developers can extend the configuration by adding custom transformers, resolver rules, or asset processors. When working with Storybook, the conditional logic in the configuration file allows for different bundling behavior based on the EXPO_PUBLIC_STORYBOOK environment variable.

**Section sources**
- [package.json](file://package.json#L58-L63)
- [tsconfig.json](file://tsconfig.json#L1-L17)
- [metro.config.js](file://metro.config.js#L1-L25)

## Configuration Issues and Troubleshooting

### Failed to Create Native Project

When encountering the "Failed to create native project" error, the recommended solution is to run `npm run prebuild:clean`. This error typically occurs due to caching issues or configuration conflicts that are resolved by completely regenerating the native projects.

### Metro Bundler Cache Problems

Metro bundler cache problems manifest as changes not being reflected in the application after saving files. The solution is to run `npm run start:clear`, which clears the Metro cache and restarts the development server with a fresh bundle. This resolves issues where outdated code is being served from the cache.

### Dependency Installation Issues

After installing new dependencies, the application may fail to run if the dependencies require native integration. The solution is to run `npm run prebuild:clean` to regenerate the native projects with the updated dependency configuration. This ensures that any native modules are properly linked and configured.

### Platform-Specific Issues

For platform-specific issues, targeted clean prebuilds can resolve configuration problems. For iOS issues, run `npm run prebuild:ios:clean`, and for Android issues, run `npm run prebuild:android:clean`. This approach addresses platform-specific configuration conflicts without affecting the other platform.

**Section sources**
- [README.md](file://README.md#L605-L658)

## Conclusion

The configuration system of the Plate application provides a robust foundation for cross-platform development using Expo and React Native. The combination of package.json, app.json, tsconfig.json, and metro.config.js creates a comprehensive environment that manages dependencies, platform settings, type checking, and bundling. The well-documented environment setup process and clear troubleshooting guidance enable developers to quickly resolve common issues and maintain productivity. By following the established patterns for configuration management, developers can effectively customize the application while ensuring consistency across development, testing, and production environments.

**Section sources**
- [package.json](file://package.json#L1-L147)
- [app.json](file://app.json#L1-L52)
- [tsconfig.json](file://tsconfig.json#L1-L17)
- [metro.config.js](file://metro.config.js#L1-L25)
- [README.md](file://README.md#L1-L674)