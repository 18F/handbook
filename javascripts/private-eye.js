// https://github.com/18F/private-eye version 1.1.0
(function() {
  'use strict';

  var PrivateEye = function(opts) {
    var styles = document.createElement('style');
    styles.innerHTML = 'a.private-link::after { content: "\\1F512"; font-size: 0.75em; vertical-align: top; }';
    document.body.appendChild(styles);

    var defaultMessage;

    if ( opts.defaultMessage && 'string' === typeof opts.defaultMessage ) {

      defaultMessage = opts.defaultMessage;

    } else {

      defaultMessage = "This is a link to a private site, which may or may not be accessible to you.";
    }

    opts.ignoreUrls.forEach(function(url) {

      var hrefValue;
      var titleValue;

      // If the `url` is an Object, then parse the properties `message` & `url`
      //
      if ( url === Object( url ) ) {

        titleValue = url.message;
        hrefValue = url.url;

      } else {

        hrefValue = url;
        titleValue = defaultMessage;

      }

      var anchors = document.querySelectorAll('a[href*="' + hrefValue + '"]');
      Array.prototype.forEach.call(anchors, function(anchor) {
        anchor.className += ' private-link';

        // Only replace the anchor's title if it is empty
        //
        if ( ! anchor.title ) {

          anchor.title = titleValue;

        }

      });
    });
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = PrivateEye;
  } else {
    window.PrivateEye = PrivateEye;
  }
})();
