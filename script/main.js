(function(window) {
  'use strict';

  var brassmonkey = window.brassmonkey.noConflict();
  var config = {
    name: "test",
    maxPlayers: 1,
    appId:"62e822bc0e6b9f22fc158763591845be",
    swfUrl: "swf/brassmonkey.swf",
    minimumVersion: {major: 0, minor: 0},
    controlsUrl: "scheme/scheme.html",
    controlMode: brassmonkey.ControlModes.HTML
  };

  brassmonkey.setLogLevel(brassmonkey.LogLevels.INFO);
  brassmonkey.start(config);
  
  brassmonkey.on(brassmonkey.EventTypes.SHOW_SLOT_COLOR, function(e) {
    var slot = document.getElementById('slot');
    slot.style.background = e.color;
  });

  brassmonkey.on(brassmonkey.EventTypes.DEVICE_CONNECTED, function (e){
    brassmonkey.log.info("device connected " + e);
  });

  brassmonkey.on(brassmonkey.EventTypes.DEVICE_DISCONNECTED, function (e){
    brassmonkey.log.info("device disconnected " + e);
  });

}(window));