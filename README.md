# Introduction

Marvel Characters Search is a mobile application that allows the user to search marvel characters by their names.

#Features

1. Search heroes
2. Pagination
3. Runs on android and ios platforms

# Pre-requisites

You should have installed:

1. NodeJS
2. React Native Cli
3. Yarn

# Getting Started

1. Installation
   - `cd marvelCharactersSearch && yarn install`
   - `cd ios && pod install`

2) Running

   - `yarn android` or `yarn ios`

3) Main software dependencies
   - React
   - Redux
   - React Router Flux

# Build

## Android

1. `yarn build-android`
2. Your apk file will be on `android\app\build\outputs\apk\release`
3. Install the release
   - `adb install -r android\app\build\outputs\apk\release\[projectName.apk]`
