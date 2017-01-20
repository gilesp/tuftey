/* global: MERCURY_API_KEY */
(function () {
  "use strict";

  var xhr = require("./xhr");

  var urlBase = "https://mercury.postlight.com/parser?url=";

  var mercury = {

    parseArticle: function (articleUrl, callback) {
      var parseResponse = function (error, rawResponse) {
        var response = {};

        if (error) {
          response.title = "Error";
          response.content = error;
        } else {
          response.title = rawResponse.title;
          response.content = rawResponse.content;
        }

        callback(response);
      };

      xhr.getJSON(urlBase + articleUrl,
                  {"x-api-key": MERCURY_API_KEY},
                  parseResponse);

    }
  };

  module.exports = mercury;
})();
