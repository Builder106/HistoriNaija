chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "TEST_CONNECTION") {
        console.log("Message received in background:", message);
        sendResponse({ success: true });
    }
});



// const summary = await summarizer.summarize(longText, {
//   context: 'This article is intended for a tech-savvy audience.',
// });