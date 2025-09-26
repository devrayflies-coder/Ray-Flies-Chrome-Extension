(async () => {
  const input = document.querySelector('input[type="file"]');
  if (!input) return;

  chrome.storage.local.get(["pendingImage", "targetPage"], async (data) => {
    if (!data.pendingImage) return;

    // Only run on correct page
    if (window.location.href !== data.targetPage) return;

    // Convert base64 to File
    const res = await fetch(data.pendingImage);
    const blob = await res.blob();
    const file = new File([blob], "image.png", { type: blob.type });

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    input.dispatchEvent(new Event('change', { bubbles: true }));

    // Clear storage
    chrome.storage.local.remove(["pendingImage", "targetPage"]);
  });
})();
