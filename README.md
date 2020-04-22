## React Chrome extension

This started with [nano-react-app](https://github.com/adrianmcli/nano-react-app)
([readme doc](nano-react-app-template.md) which uses Parcel instead of
Webpack like create-react-app.  I originally tried to make create-react-app
work and had to write a manual script to process the extra html files
and the manifest.

Parcel actually has a plugin for an extension manifest and this project
just points parcel to the manifest.  So with if you want to add another
page such as a custom history, new tab, or bookmark page, you just add
it in the manifest and parcel will process it.  Neat!

## Getting Started

If you are new to chrome extensions, see [doc/chrome.md](doc/chrome.md) showing
how I setup chrome for development.

> **YOU SHOULD CREATE A SEPARATE PROFILE** before installing this
> extension without making changes.  It will [change](https://developer.chrome.com/extensions/override)
> the new tab page of the profile it is installed in.  You can remove
> that part of [manifest.json](./src/manifest.json) of course.

I use yarn, so run `yarn build` and the files for your extension should
appear in the `dist` directory.  You can also run `yarn watch` to do a rebuild
when any of the files change.  Note I disabled HMR so you wouldn't get an
error loading the extension because the websocket is unavailable.

## Making Changes

If using 'yarn watch', parcel will do a rebuild when any of the files change.
Chrome is pretty good nowadays with developer mode extensions, but you might
have to refesh the extension to see your changes.  If your changes still
don't appear, try removing and re-adding your extension.  This is also
easier than in the past because it defaults to the last directory you used
for an unpacked extension.  Changing the version number in 'manifest.json'
might also help.

If you wish to add another html page *not specified in manifest.html*, you
will need to edit the 'build' and 'watch' scripts to include it.  This
is done for 'index.html' becaue it is opened by clicking the link in the
popup and not specified in 'manifest.json'.

## Samples

These are the components included in the extension

* [Content Script](docs/ContentScript.md) - Script for chrome dev site that
shows loading a stylesheet and a script that injects a react component onto
the page.
* [Popup](docs/Popup.md) - Just displays a react component that has a link
to a separate page hosted in the extension, to the chrome dev site for trying
out the content script, and a button to inject a script into the active page
that removes iframes.
* [Index](docs/Index.md) - A separate page linked to from the popup that you
can load.
* [Background](docs/Background.md) - Just a script written in typescript
with no html, css, or react components showing how great it is that parcel just handles whatever you throw at it.
    * Worth noting is that I originally had it as a '.js' file and *didn't* have
        typescript installed.  I had the watcher running and I simply renamed the
        file and changed the name in 'manifest.json' and parcel added typescript
        as a dependency and installed it, then rebuilt the extension.
        Did I say how much I love Parcel?
* [New Tab](docs/NewTab.md) - An override for the Chrome new tab page.  You
can replace the new tab page, bookmarks page, or history page, but each extension
can only override [one of them](https://developer.chrome.com/extensions/override).