chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { redirectUrl: chrome.runtime.getURL("blocked.html") };
    },
    { urls: ["*://*.examplepornsite.com/*", "*://*.anothersite.com/*", "*://*.yetanotheradultsite.com/*"] },
    ["blocking"]
  );
  