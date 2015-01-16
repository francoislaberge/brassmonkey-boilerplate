/*global window, document*/
(function(window) {
  'use strict';

  var brassmonkey = window.bmcontrol.noConflict(),
      version = brassmonkey.versionStr();

  brassmonkey.log.info(version);
  
  var body = document.querySelector('body'),
      div = document.createElement('div'),
      text = document.createTextNode(version);

  div.appendChild(text);
  body.appendChild(div);
  
}(window));