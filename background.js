chrome.runtime.onInstalled.addListener(() => {
  console.log('Screenshot Taker extension installed.');
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startScreenshot') {
    const delay = request.delay;
    console.log(`Starting screenshot in ${delay}ms`); 
    setTimeout(() => {
      console.log('Taking screenshot now');
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
          console.error('No active tab found');
          return;
        }
        const activeTab = tabs[0];
        chrome.tabs.captureVisibleTab(activeTab.windowId, { format: 'png' }, (dataUrl) => {
          if (chrome.runtime.lastError) {
            console.error('Error taking screenshot:', chrome.runtime.lastError.message);
          } else if (dataUrl) {
            chrome.downloads.download({
              url: dataUrl,
              filename: `screenshot-${new Date().toISOString().replace(/[:.]/g, '-')}.png`
            });
          }
        });
      });
    }, delay);
  }
});