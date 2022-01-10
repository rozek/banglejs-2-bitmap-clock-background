  require('https://raw.githubusercontent.com/rozek/banglejs-2-widgets-on-background/main/drawWidgets.js');

  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    background:require('https://raw.githubusercontent.com/rozek/banglejs-2-bitmap-clock-background/main/ClockBackground.js'),
    face:      require('https://raw.githubusercontent.com/rozek/banglejs-2-four-fold-face/main/ClockFace.js'),
    complications:{
      b:require('https://raw.githubusercontent.com/rozek/banglejs-2-date-complication/main/Complication.js')
    }
  },{
    Foreground:'#FFFF00', Background:'#000000', Seconds:'#FF0000',
    Bitmap:'Mandelbrot_176x176.png'
  });
