# react-native-quick-start

_if macOS 13 and npm 9, please use `Node 18` [nvm](https://github.com/nvm-sh/nvm) do to [realm issues](https://github.com/realm/realm-js/issues/5136) :/_

## Running

_If first time running app, run `npm run build:ios/android` to initally install and build dependencies._

### ios

`npm run start` opens emulator, installs and opens app automatically.

### Android

Open desired android emulator and device and enter `npm run android`. This will begin installation and opening of app.

## Included packages

- redux for state management
- realm for persistent data
- ui-kitten for design
- jest for all the testing
- @react-navigation/native for navigation

## Prerequisites

_machine used for setup was an Intel macOS 13._

### ios

1. [xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
   - xcode builds via the `xcodebuild` command. If command is not found, run `xcode-select --install` to install xcode-cli.
2. [rbenv](https://github.com/rbenv/rbenv) for managing ruby versions. React-native's default target is `2.7.6`
   - rbenv requires additions to `PATH` for `rbenv global [VERSION]` to take affect. If necessary add these two lines to the cli profile in use and restart. i.e. `.zshrc` or `.bash_profile`.
     > `export PATH="$HOME/.rbenv/bin:$PATH"`\
     > `eval "$(rbenv init -)"`
3. [cocoapods](https://cocoapods.org/)
   - Use `brew install cocoapods` to install if not already.
   - cocoapods are used to manage dependcies and packages imported by react-native. pods can be built either by changing directory to `ios/` and running `pod install` or using the `build:ios` script.

### Android

1. [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPI0glwG6Gh40hC0EgwaANvivEIBEnZLDJKRgO8DK_UKXZutyj-v2iIaAjLKEALw_wcB&gclsrc=aw.ds)
   - emulators and devices can also be deployed with the **Device Manager** of Android Studio.
2. [JDK](https://www.oracle.com/java/technologies/downloads/)
   - A java development source is required to build for android.
3. [Gradle](https://gradle.org/)
   - If using adnroid studio **Gradle plugin will be installed automatically**. Gradle is used to build the source code for android. This can be done manually from within android studio, `gradlew` command, or `build:android` script.

## Debugging

The best tactic for debugging is opening the `ios/` and `android/` workspaces in their respective editors. This allows to manage SDK versions, build scripts, and more hidden config.

### building

Includied are 2 scripts `build:ios` and `build:android`. These can be used to manually build either targets without using caches.

### ruby

ruby is used to compile the ios version of the app, and has a defined version inside the project that comes default from react-native at `2.7.6`. Fixing mismatched ruby versions can be done two ways:

- (**Not Recommended**) update `.rubby-version` to local version.
- Use a [ruby version manager](https://github.com/rbenv/rbenv) to install and use a specified ruby version.

> Does not use expo!!!
