import Tab = chrome.tabs.Tab;

chrome.browserAction.onClicked.addListener((tab: Tab) => {
  const url = tab.url;

  chrome.storage.local.set({ url }, () => {
    console.log('URL is set to ' + url);
  });

  chrome.storage.local.get(['url'], (result) => {
    console.log('URL currently is ' + result.url);
  });
});
