const RAYFLIES_LINKS = {
  "Rayboard": "https://dev.rayflies.ai/rayboard",
  "Image to Video": "https://dev.rayflies.ai/img-to-video",
  "Enhance Image": "https://dev.rayflies.ai/enhance-image",
  "Sketch to Render": "https://dev.rayflies.ai/sketch-to-render",
  "Screenshot to Render": "https://dev.rayflies.ai/screenshot-to-render"
};

chrome.runtime.onInstalled.addListener(() => {
  // Create main menu
  chrome.contextMenus.create({
    id: "rayflies_main",
    title: "Send to Rayflies",
    contexts: ["image"]
  });

  // Create submenus
  Object.keys(RAYFLIES_LINKS).forEach((key) => {
    chrome.contextMenus.create({
      id: key,
      parentId: "rayflies_main",
      title: key,
      contexts: ["image"]
    });
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (!info.srcUrl) return;

  const pageUrl = RAYFLIES_LINKS[info.menuItemId];
  if (!pageUrl) return;

  try {
    // Fetch image as blob
    const response = await fetch(info.srcUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onload = () => {
      // Save base64 and target page
      chrome.storage.local.set({ pendingImage: reader.result, targetPage: pageUrl }, () => {
        chrome.tabs.create({ url: pageUrl });
      });
    };

    reader.readAsDataURL(blob);
  } catch (e) {
    console.error("Failed to fetch image:", e);
  }
});
