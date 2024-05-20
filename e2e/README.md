# Running Detox Tests for Android and iOS

This guide provides instructions on running Detox tests for both Android and iOS platforms.

## Prerequisites

Before proceeding, ensure you have the following prerequisites installed:

- Node.js (v12 LTS or higher)
- Detox CLI (`detox-cli`) installed globally (`npm install -g detox-cli`)
- Android Studio (for Android tests)
- Xcode (for iOS tests)

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:

    ``` bash
    npm install

3. Configuration:

   - Set up your Detox configuration file (detox.config.js) to point to your test artifacts. Ensure that the paths to the
     Android and iOS app binaries are correctly specified.
   - Configure Jest by creating a Jest configuration file (jest.config.js). Ensure that the Jest configuration includes the
     appropriate test file patterns and options for both Android and iOS platforms.

4. Running Tests
   - Before run tests make sure that you start metro server in separate terminal:
   
      ```bash
      npm start
     
   - Run the following command to execute Detox tests for Android in case emulator has not been started yet:

      ```bash
     platform=android detox test --configuration android.emu.debug

   - Run the following command to execute Detox tests for Android in case emulator has been already started:

      ```bash
      platform=android detox test --configuration android.att.debug
   
   - Run the following command to execute Detox tests for iOS:
   
      ```bash
      platform=ios detox test --configuration ios.sim.debug

5. Troubleshooting 

If you encounter any issues during the setup or execution of Detox tests, refer to the following troubleshooting steps:
- Ensure that all prerequisites are correctly installed and configured.
- Double-check the paths to your test artifacts in the Detox configuration file.
- Verify that the device or simulator for the target platform is correctly set up and accessible.
- Check for any error messages or warnings in the test output and logs.
