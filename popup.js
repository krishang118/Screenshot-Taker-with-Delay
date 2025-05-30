document.getElementById('takeScreenshot').addEventListener('click', () => {
    const delayInSeconds = parseInt(document.getElementById('delay').value) || 0;
    chrome.storage.sync.set({ screenshotDelay: delayInSeconds }, () => {
      console.log(`Screenshot scheduled with ${delayInSeconds} second delay`);
    });
    chrome.runtime.sendMessage({ 
      action: 'startScreenshot', 
      delay: delayInSeconds * 1000 
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error sending message:', chrome.runtime.lastError.message);
      }
    });
    window.close();
  });