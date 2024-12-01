chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "TEST_CONNECTION") {
        console.log("Message received in background:", message);
        sendResponse({ success: true });
    }
});
