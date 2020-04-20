import React from "react";

const getLinkTo = url => chrome.runtime.getURL(url);
const openLinkTo = url => event => {
  event.preventDefault();
  chrome.tabs.create({ url: getLinkTo(url) });
}


export default () => (
  <>
    <h1>popup.html</h1>
    <p>
      This is the web page that will be used for popups
      in the Chrome extension...
    </p>
    <p>Link: <a href={getLinkTo('index.html')} onClick={openLinkTo('index.html')}>index.html</a></p>
  </>
);
