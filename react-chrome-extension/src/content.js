chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "GET_HIGHLIGHTED_TEXT") {
      const selection = window.getSelection()?.toString();
      sendResponse({ text: selection || "" });
    }
  });