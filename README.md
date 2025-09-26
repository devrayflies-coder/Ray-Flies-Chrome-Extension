# Rayflies Image Sender Chrome Extension

![image 1](image%201.png)  
*Figure 1: Right-click menu on an image with Rayflies options.*

![image 2](image%202.png)  
*Figure 2: Image automatically injected into the Rayflies page.*

## Overview

**Rayflies Image Sender** is a Chrome extension that allows users to quickly send any image from the web to various Rayflies tools. With a single right-click, you can select which Rayflies page to send the image to, and the extension automatically injects the image into the upload field of the selected tool.

Supported Rayflies pages:

- [Rayboard](https://dev.rayflies.ai/rayboard)
- [Image to Video](https://dev.rayflies.ai/img-to-video)
- [Enhance Image](https://dev.rayflies.ai/enhance-image)
- [Sketch to Render](https://dev.rayflies.ai/sketch-to-render)
- [Screenshot to Render](https://dev.rayflies.ai/screenshot-to-render)

---

## Features

- Adds a **context menu** when you right-click an image on any webpage.
- **Submenu for all Rayflies tools** so you can choose where to send the image.
- Automatically fetches the image and stores it **locally in the browser**.
- Opens the selected Rayflies page and **injects the image** into the upload field.
- Avoids CORS issues since the image is stored in Base64 locally.

---

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select this repository folder.
5. The extension icon should appear in the toolbar.

---

## Usage

1. Navigate to any website with an image you want to use.
2. Right-click the image → **Send to Rayflies** → choose the tool.
3. The Rayflies page will open automatically with the image already populated in the upload field.

---

## Files in the Repository

- `manifest.json` — Extension manifest file.  
- `background.js` — Handles context menus, image fetching, and storage.  
- `content.js` — Injects the stored image into Rayflies page upload fields.  
- `icon16.png`, `icon48.png`, `icon128.png` — Extension icons.  
- `image1.png`, `image2.png` — Screenshots demonstrating the extension in action.  

---

## Notes

- This extension works best for images accessible without authentication.  
- Large images may take a moment to load into the target page.  
- Images are stored temporarily in Chrome local storage and cleared after injection.

---

## License

MIT License
