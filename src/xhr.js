(function () {
  "use strict";

  var xhr = {
    getJSON : function (url, headers, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      Object.keys(headers).forEach(function (header) {
        xhr.setRequestHeader(header, headers[header]);
      });

      xhr.responseType = "json";
      xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
          callback(null, xhr.response);
        } else {
          callback(status);
        }
      };
      xhr.send();
    }
  };

  module.exports = xhr;
})();
