var EXPORTED_SYMBOLS = ["Scriptish_installUri"];
Components.utils.import("resource://scriptish/constants.js");
Components.utils.import("resource://scriptish/config/configdownloader.js");

function Scriptish_installUri(aURI, aWin) {
  if (!aWin) aWin = Services.wm.getMostRecentWindow("navigator:browser");

  // docs for nsicontentpolicy say we're not supposed to block, so short timer.
  timeout(function() Scriptish_configDownloader.startInstall(aURI, aWin));
}
