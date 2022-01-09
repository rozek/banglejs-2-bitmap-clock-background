# banglejs-2-bitmap-clock-background #

fills the background of an analog clock on a Bangle.js 2 with a bitmap

This module fills the background of an analog clock face for the [Bangle.js 2](https://www.espruino.com/Bangle.js2) with a given bitmap.

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let ClockBackground = require('https://raw.githubusercontent.com/rozek/banglejs-2-bitmap-clock-background/main/ClockBackground.js');
```

Whenever needed, the module's exported `draw` method will then be invoked as follows:

```
ClockBackground.draw(Settings);
```

`Settings.Bitmap` should contain the file name of the bitmap to be drawn - that bitmap must have been properly converted for the Bangle.js 2 and uploaded into the storage area before.

If no bitmap is given (or the bitmap cannot be loaded), an empty background is drawn instead

## License ##

[MIT License](LICENSE.md)
