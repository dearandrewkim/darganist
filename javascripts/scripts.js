/* Generate a custom build according to your needs, starting with the below URL
 * http://modernizr.com/download/#-svg-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;
(function() {
  document.onreadystatechange = function() {
    var endsWithDotSvg, i, img, imgs, len, results;
    if (document.readyState === "interactive") {
      if (!(typeof Modernizr !== "undefined" && Modernizr !== null ? Modernizr.svg : void 0)) {
        endsWithDotSvg = /.*\.svg$/;
        imgs = document.getElementsByTagName('img');
        results = [];
        for (i = 0, len = imgs.length; i < len; i++) {
          img = imgs[i];
          if (img.src.match(endsWithDotSvg)) {
            results.push(img.src = img.src.replace(/.svg$/, '.png'));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }
  };

}).call(this);
