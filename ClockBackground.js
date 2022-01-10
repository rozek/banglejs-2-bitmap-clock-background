(function () {
  let currentBitmap, currentImage;

  exports.draw = function draw (Settings) {
    let Bitmap = Settings.Bitmap;
    if (Bitmap != currentBitmap) {
      currentBitmap = Bitmap;
      if (currentBitmap == null) {
        currentImage = undefined;
      } else {
        currentImage = require('Storage').read(currentBitmap);
      }
    }

    g.clear();
    if (currentImage != null) { g.drawImage(currentImage, 0,0); }
  };
})();

