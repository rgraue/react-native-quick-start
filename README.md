# react-native-quick-start

_if MacOS 13 and npm 9, please use `Node 18` [nvm](https://github.com/nvm-sh/nvm) do to [realm issues](https://github.com/realm/realm-js/issues/5136) :/_

## Included packages

- redux for state management
- realm for persistent data
- ui-kitten for design
- jest for all the testing
- @react-navigation/native for navigation

## Emulators

The [offical setup guide](https://reactnative.dev/docs/environment-setup) does a decent job for setting up the development environment. Below are some more specifics that you may run into.

### ios

Be sure to install Xcode. Xcode will automatially download the latest iphone emulator. The build process requires `xcodebuild`, if not already installed, run `xcode-select install`. Xcode also makes it easy to locally develop and debug the `ios/` workspace.

### android

Android has many emulators to select from, but [android studio](https://developer.android.com/studio?gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPI0glwG6Gh40hC0EgwaANvivEIBEnZLDJKRgO8DK_UKXZutyj-v2iIaAjLKEALw_wcB&gclsrc=aw.ds) easily runs emulators and gives more insight to the `android/` workspace.

## Debugging

### building

Includied are 2 scripts `build:ios` and `build:android`. These should come in handy when needing to build the respective deployments from scratch with all dependcies. ie. cocoa pods and respective android SDK via gradle

### ruby

ruby is used to compile the ios version of the app, and has a defined version inside the project that comes default from react-native at `2.7.6`. Fixing mismatched ruby versions can be done two ways:

- (**Not Recommended**) update `.rubby-version` to local version.
- Use a [ruby version manager](https://github.com/rbenv/rbenv) to install and use a specified ruby version.

> Does not use expo!!!
