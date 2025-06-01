# Screenshot Taker with Delay

A Chrome extension, developed using Chrome Extensions API, that allows the user to take a screenshot of the active tab after a customizable delay.

## Installation (as an unpacked extension)

1.  Download or clone this repository to your local machine.
2.  Open Google Chrome and go to `chrome://extensions/`.
3.  Enable "Developer mode" by toggling the switch in the top right corner.
4.  Click the "Load unpacked" button in the top left corner.
5.  Select the directory where you downloaded/cloned the files.

The extension should now appear in your list of installed extensions and its icon will be visible in the Chrome toolbar.

## Usage

1.  Click on the Screenshot Taker extension icon in the Chrome toolbar.
2.  A small popup will appear.
3.  Enter the desired delay in seconds (e.g., 5 for a 5-second delay).
4.  Click the "Take Screenshot" button.
5.  The popup will close, and after the specified delay, the extension will take a screenshot of the visible part of your current tab and download it automatically.

## Files

*   `manifest.json`: Defines the extension's properties, permissions, and entry points.
*   `popup.html`: The HTML structure for the extension's popup.
*   `popup.js`: Handles the logic for the popup, including getting the delay and sending messages to the background script.
*   `background.js`: The service worker that listens for messages, sets the delay, captures the tab, and handles the download.
*   `LICENSE`: The MIT License.
*   `README.md`: This file.

## Contributions

Contributions are welcome!

## License

Distributed under the MIT License.
