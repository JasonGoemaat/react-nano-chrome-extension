import React from "react";

const getLinkTo = url => chrome.runtime.getURL(url);

const onLinkClicked = event => {
  event.preventDefault();
  chrome.tabs.create({ url: event.target.href });
}

export default () => (
  <>
    <h1>popup.html</h1>
    <p>
      This is the web page that will be used for popups
      in the Chrome extension...
    </p>
    <p>Link: <a href={getLinkTo('index.html')} onClick={onLinkClicked}>index.html</a></p>
    <p>Open <a href="https://developer.chrome.com/extensions/getstarted" onClick={onLinkClicked}>the chrome developer site</a></p>
  </>
);
