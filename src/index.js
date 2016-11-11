(function () {
  "use strict";

  var mercury = require("./mercury");
  var template = require("./tufte.html");

  mercury.parseArticle(window.location.href, function (response) {
    document.documentElement.innerHTML = template.replace(/\{(.*?)\}/g, function (match) {
      match = match.substr(1, match.length -2);
      return response[match];
    });
  });

})();
