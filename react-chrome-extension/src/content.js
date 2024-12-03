console.log("chrome.language:", chrome.language);
console.log("chrome.language.translate:", chrome.language?.translate);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "GET_HIGHLIGHTED_TEXT") {
      const selection = window.getSelection()?.toString();
      sendResponse({ text: selection || "" });
    }
  });
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
  if(message.action == "DETECT_TRANSLATE"){
    let selected = message.selected
    let target = message.target
    chrome.i18n.detectLanguage(selected, (result) => {
      if (chrome.runtime.lastError) {
        console.error("Error detecting language:", chrome.runtime.lastError);
      } else {
        const detectedLanguage = result.languages[0]?.language;
        console.log("Detected language:", detectedLanguage);

        if (detectedLanguage) {
          console.log("translating");

          try {
            chrome.language.translate(
              { text: selectedText, targetLanguage: target },
              (translatedText) => {
                console.log("Callback invoked.");
                if (chrome.runtime.lastError) {
                  console.error(
                    "Error translating text:",
                    chrome.runtime.lastError
                  );
                } else {
                  console.log("Original Text:", selectedText);
                  console.log("Translated Text:", translatedText);
                  sendResponse({translatedtext : translatedText});
                }
              }
            );
            console.log("done translating");
          } catch (error) {
            console.error("Caught error during translation:", error);
          }
        } else {
          console.warn("No language detected.");
        }
      }
    });
  }
})