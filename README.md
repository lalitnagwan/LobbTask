# AnimeCardApp

A React Native (pure CLI) app to display and refresh random anime content cards, as per the Lobb Logistics developer task.

## Features

- Fetches JWT token via API.
- Loads random anime content with images & HTML text.
- Card UI, tap to expand for full content.
- Refresh button for new random content.
- Handles loading & error states.
- Unit tested, clean and documented code.

## Requirements

- Node.js (>=14)
- React Native CLI
- Xcode (for iOS) or Android Studio (for APK)
- No Expo

## Setup

```bash
git clone <your-repo-or-folder>
cd AnimeCardApp
npm install
```

## Running

```bash
# Android
npx react-native run-android

# iOS
npx react-native run-ios
```

## Building APK

```bash
cd android
./gradlew assembleRelease
# APK at android/app/build/outputs/apk/release/
```

## Running Tests

```bash
npm test
```

## Project Structure

- `/src` - all source code, components, and utilities
- `/__tests__` - Jest/RTL unit tests
- `PLAN_AND_OVERVIEW.md` - project plan
- `diagram.mmd` - component diagram

## Notes

- No node_modules in zip.
- Uses only necessary dependencies.
- All API requests and errors handled gracefully.
