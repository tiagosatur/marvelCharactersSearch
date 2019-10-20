# Introduction 
Marvel Characters Search is an mobile application that allows the user to search marvel characters by their names. 

# Pre-requisites
You should have installed:
1. NodeJS
2. React Native Cli
3. Yarn or npm


# Getting Started
1.	Installation
    * `cd marvelCharactersSearch && yarn install`
    * Create an account at Marvel and get the public and private keys.
    * Create a file `keys.js` in the project root with this content: 
```
export const PRIV_KEY = 'your private key'
export const PUB_KEY = 'your public key'
```

2. Running
    * `yarn android`
    * Obs: For now, this project runs only on android devices.

3.	Main software dependencies
    * React
    * Redux
    * React Router Flux
4.	API references
    * It uses the marvel Api. Instructions are found at [Marvel Developer](https://developer.marvel.com/)

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

## Build release
1. `cd android && gradlew assembleRelease`
2. Your apk file will be on `android\app\build\outputs\apk\release`
3. Install the release
    * `adb install -r android\app\build\outputs\apk\release\[projectName.apk]`

