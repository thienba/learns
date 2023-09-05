// var w = c.width = window.innerWidth,
//     h = c.height = window.innerHeight,
//     ctx = c.getContext('2d'),

//     hw = w / 2, // half-width
//     hh = h / 2,

//     opts = {
//         strings: ['HAPPY', 'BIRTHDAY!'],
//         charSize: 30,
//         charSpacing: 35,
//         lineHeight: 40,

//         cx: w / 2,
//         cy: h / 2,

//         fireworkPrevPoints: 10,
//         fireworkBaseLineWidth: 5,
//         fireworkAddedLineWidth: 8,
//         fireworkSpawnTime: 200,
//         fireworkBaseReachTime: 30,
//         fireworkAddedReachTime: 30,
//         fireworkCircleBaseSize: 20,
//         fireworkCircleAddedSize: 10,
//         fireworkCircleBaseTime: 30,
//         fireworkCircleAddedTime: 30,
//         fireworkCircleFadeBaseTime: 10,
//         fireworkCircleFadeAddedTime: 5,
//         fireworkBaseShards: 5,
//         fireworkAddedShards: 5,
//         fireworkShardPrevPoints: 3,
//         fireworkShardBaseVel: 4,
//         fireworkShardAddedVel: 2,
//         fireworkShardBaseSize: 3,
//         fireworkShardAddedSize: 3,
//         gravity: .1,
//         upFlow: -.1,
//         letterContemplatingWaitTime: 360,
//         balloonSpawnTime: 20,
//         balloonBaseInflateTime: 10,
//         balloonAddedInflateTime: 10,
//         balloonBaseSize: 20,
//         balloonAddedSize: 20,
//         balloonBaseVel: .4,
//         balloonAddedVel: .4,
//         balloonBaseRadian: -(Math.PI / 2 - .5),
//         balloonAddedRadian: -1,
//     },
//     calc = {
//         totalWidth: opts.charSpacing * Math.max(opts.strings[0].length, opts.strings[1].length)
//     },

//     Tau = Math.PI * 2,
//     TauQuarter = Tau / 4,

//     letters = [];

// ctx.font = opts.charSize + 'px Verdana';

// function Letter(char, x, y) {
//     this.char = char;
//     this.x = x;
//     this.y = y;

//     this.dx = -ctx.measureText(char).width / 2;
//     this.dy = +opts.charSize / 2;

//     this.fireworkDy = this.y - hh;

//     var hue = x / calc.totalWidth * 360;

//     this.color = 'hsl(hue,80%,50%)'.replace('hue', hue);
//     this.lightAlphaColor = 'hsla(hue,80%,light%,alp)'.replace('hue', hue);
//     this.lightColor = 'hsl(hue,80%,light%)'.replace('hue', hue);
//     this.alphaColor = 'hsla(hue,80%,50%,alp)'.replace('hue', hue);

//     this.reset();
// }
// Letter.prototype.reset = function () {

//     this.phase = 'firework';
//     this.tick = 0;
//     this.spawned = false;
//     this.spawningTime = opts.fireworkSpawnTime * Math.random() | 0;
//     this.reachTime = opts.fireworkBaseReachTime + opts.fireworkAddedReachTime * Math.random() | 0;
//     this.lineWidth = opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
//     this.prevPoints = [[0, hh, 0]];
// }
// Letter.prototype.step = function () {

//     if (this.phase === 'firework') {

//         if (!this.spawned) {

//             ++this.tick;
//             if (this.tick >= this.spawningTime) {

//                 this.tick = 0;
//                 this.spawned = true;
//             }

//         } else {

//             ++this.tick;

//             var linearProportion = this.tick / this.reachTime,
//                 armonicProportion = Math.sin(linearProportion * TauQuarter),

//                 x = linearProportion * this.x,
//                 y = hh + armonicProportion * this.fireworkDy;

//             if (this.prevPoints.length > opts.fireworkPrevPoints)
//                 this.prevPoints.shift();

//             this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

//             var lineWidthProportion = 1 / (this.prevPoints.length - 1);

//             for (var i = 1; i < this.prevPoints.length; ++i) {

//                 var point = this.prevPoints[i],
//                     point2 = this.prevPoints[i - 1];

//                 ctx.strokeStyle = this.alphaColor.replace('alp', i / this.prevPoints.length);
//                 ctx.lineWidth = point[2] * lineWidthProportion * i;
//                 ctx.beginPath();
//                 ctx.moveTo(point[0], point[1]);
//                 ctx.lineTo(point2[0], point2[1]);
//                 ctx.stroke();

//             }

//             if (this.tick >= this.reachTime) {

//                 this.phase = 'contemplate';

//                 this.circleFinalSize = opts.fireworkCircleBaseSize + opts.fireworkCircleAddedSize * Math.random();
//                 this.circleCompleteTime = opts.fireworkCircleBaseTime + opts.fireworkCircleAddedTime * Math.random() | 0;
//                 this.circleCreating = true;
//                 this.circleFading = false;

//                 this.circleFadeTime = opts.fireworkCircleFadeBaseTime + opts.fireworkCircleFadeAddedTime * Math.random() | 0;
//                 this.tick = 0;
//                 this.tick2 = 0;

//                 this.shards = [];

//                 var shardCount = opts.fireworkBaseShards + opts.fireworkAddedShards * Math.random() | 0,
//                     angle = Tau / shardCount,
//                     cos = Math.cos(angle),
//                     sin = Math.sin(angle),

//                     x = 1,
//                     y = 0;

//                 for (var i = 0; i < shardCount; ++i) {
//                     var x1 = x;
//                     x = x * cos - y * sin;
//                     y = y * cos + x1 * sin;

//                     this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
//                 }
//             }

//         }
//     } else if (this.phase === 'contemplate') {

//         ++this.tick;

//         if (this.circleCreating) {

//             ++this.tick2;
//             var proportion = this.tick2 / this.circleCompleteTime,
//                 armonic = -Math.cos(proportion * Math.PI) / 2 + .5;

//             ctx.beginPath();
//             ctx.fillStyle = this.lightAlphaColor.replace('light', 50 + 50 * proportion).replace('alp', proportion);
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
//             ctx.fill();

//             if (this.tick2 > this.circleCompleteTime) {
//                 this.tick2 = 0;
//                 this.circleCreating = false;
//                 this.circleFading = true;
//             }
//         } else if (this.circleFading) {

//             ctx.fillStyle = this.lightColor.replace('light', 70);
//             ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

//             ++this.tick2;
//             var proportion = this.tick2 / this.circleFadeTime,
//                 armonic = -Math.cos(proportion * Math.PI) / 2 + .5;

//             ctx.beginPath();
//             ctx.fillStyle = this.lightAlphaColor.replace('light', 100).replace('alp', 1 - armonic);
//             ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
//             ctx.fill();

//             if (this.tick2 >= this.circleFadeTime)
//                 this.circleFading = false;

//         } else {

//             ctx.fillStyle = this.lightColor.replace('light', 70);
//             ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
//         }

//         for (var i = 0; i < this.shards.length; ++i) {

//             this.shards[i].step();

//             if (!this.shards[i].alive) {
//                 this.shards.splice(i, 1);
//                 --i;
//             }
//         }

//         if (this.tick > opts.letterContemplatingWaitTime) {

//             this.phase = 'balloon';

//             this.tick = 0;
//             this.spawning = true;
//             this.spawnTime = opts.balloonSpawnTime * Math.random() | 0;
//             this.inflating = false;
//             this.inflateTime = opts.balloonBaseInflateTime + opts.balloonAddedInflateTime * Math.random() | 0;
//             this.size = opts.balloonBaseSize + opts.balloonAddedSize * Math.random() | 0;

//             var rad = opts.balloonBaseRadian + opts.balloonAddedRadian * Math.random(),
//                 vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

//             this.vx = Math.cos(rad) * vel;
//             this.vy = Math.sin(rad) * vel;
//         }
//     } else if (this.phase === 'balloon') {

//         ctx.strokeStyle = this.lightColor.replace('light', 80);

//         if (this.spawning) {

//             ++this.tick;
//             ctx.fillStyle = this.lightColor.replace('light', 70);
//             ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

//             if (this.tick >= this.spawnTime) {
//                 this.tick = 0;
//                 this.spawning = false;
//                 this.inflating = true;
//             }
//         } else if (this.inflating) {

//             ++this.tick;

//             var proportion = this.tick / this.inflateTime,
//                 x = this.cx = this.x,
//                 y = this.cy = this.y - this.size * proportion;

//             ctx.fillStyle = this.alphaColor.replace('alp', proportion);
//             ctx.beginPath();
//             generateBalloonPath(x, y, this.size * proportion);
//             ctx.fill();

//             ctx.beginPath();
//             ctx.moveTo(x, y);
//             ctx.lineTo(x, this.y);
//             ctx.stroke();

//             ctx.fillStyle = this.lightColor.replace('light', 70);
//             ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

//             if (this.tick >= this.inflateTime) {
//                 this.tick = 0;
//                 this.inflating = false;
//             }

//         } else {

//             this.cx += this.vx;
//             this.cy += this.vy += opts.upFlow;

//             ctx.fillStyle = this.color;
//             ctx.beginPath();
//             generateBalloonPath(this.cx, this.cy, this.size);
//             ctx.fill();

//             ctx.beginPath();
//             ctx.moveTo(this.cx, this.cy);
//             ctx.lineTo(this.cx, this.cy + this.size);
//             ctx.stroke();

//             ctx.fillStyle = this.lightColor.replace('light', 70);
//             ctx.fillText(this.char, this.cx + this.dx, this.cy + this.dy + this.size);

//             if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
//                 this.phase = 'done';

//         }
//     }
// }
// function Shard(x, y, vx, vy, color) {

//     var vel = opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

//     this.vx = vx * vel;
//     this.vy = vy * vel;

//     this.x = x;
//     this.y = y;

//     this.prevPoints = [[x, y]];
//     this.color = color;

//     this.alive = true;

//     this.size = opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
// }
// Shard.prototype.step = function () {

//     this.x += this.vx;
//     this.y += this.vy += opts.gravity;

//     if (this.prevPoints.length > opts.fireworkShardPrevPoints)
//         this.prevPoints.shift();

//     this.prevPoints.push([this.x, this.y]);

//     var lineWidthProportion = this.size / this.prevPoints.length;

//     for (var k = 0; k < this.prevPoints.length - 1; ++k) {

//         var point = this.prevPoints[k],
//             point2 = this.prevPoints[k + 1];

//         ctx.strokeStyle = this.color.replace('alp', k / this.prevPoints.length);
//         ctx.lineWidth = k * lineWidthProportion;
//         ctx.beginPath();
//         ctx.moveTo(point[0], point[1]);
//         ctx.lineTo(point2[0], point2[1]);
//         ctx.stroke();

//     }

//     if (this.prevPoints[0][1] > hh)
//         this.alive = false;
// }
// function generateBalloonPath(x, y, size) {

//     ctx.moveTo(x, y);
//     ctx.bezierCurveTo(x - size / 2, y - size / 2,
//         x - size / 4, y - size,
//         x, y - size);
//     ctx.bezierCurveTo(x + size / 4, y - size,
//         x + size / 2, y - size / 2,
//         x, y);
// }

// function anim() {

//     window.requestAnimationFrame(anim);

//     ctx.fillStyle = '#111';
//     ctx.fillRect(0, 0, w, h);

//     ctx.translate(hw, hh);

//     var done = true;
//     for (var l = 0; l < letters.length; ++l) {

//         letters[l].step();
//         if (letters[l].phase !== 'done')
//             done = false;
//     }

//     ctx.translate(-hw, -hh);

//     if (done)
//         for (var l = 0; l < letters.length; ++l)
//             letters[l].reset();
// }

// for (var i = 0; i < opts.strings.length; ++i) {
//     for (var j = 0; j < opts.strings[i].length; ++j) {
//         letters.push(new Letter(opts.strings[i][j],
//             j * opts.charSpacing + opts.charSpacing / 2 - opts.strings[i].length * opts.charSize / 2,
//             i * opts.lineHeight + opts.lineHeight / 2 - opts.strings.length * opts.lineHeight / 2));
//     }
// }

// anim();

// window.addEventListener('resize', function () {

//     w = c.width = window.innerWidth;
//     h = c.height = window.innerHeight;

//     hw = w / 2;
//     hh = h / 2;

//     ctx.font = opts.charSize + 'px Verdana';
// })

// ==============================================
const audioPlayer = document.getElementById('audioPlayer');
const test = document.querySelector(".text");

function play() {
  audioPlayer.play();
}

test.addEventListener("click", () => {
  play();
})


var c = document.getElementById("c");
var ctx = c.getContext("2d");

var bc = document.createElement("canvas");
var bCtx = bc.getContext("2d");

var cw = c.width = bc.width = window.innerWidth,
  cx = cw / 2;
var ch = c.height = bc.height = window.innerHeight + 100,
  cy = ch;

var frames = 0;
var requestId = null;
var rad = (Math.PI / 180);
var kappa = 0.5522847498;

var x, y;
bCtx.strokeStyle = "#abcdef";
bCtx.lineWidth = 1;

var balloons = [];

function Balloon() {
  this.r = randomIntFromInterval(20, 70);
  this.R = 1.4 * this.r;
  this.x = randomIntFromInterval(this.r, cw - this.r);
  this.y = ch + 2 * this.r;
  this.a = this.r * 4.5;
  this.pm = Math.random() < 0.5 ? -1 : 1;
  this.speed = randomIntFromInterval(1.5, 4);
  this.k = this.speed / 5;
  this.hue = this.pm > 0 ? "210" : "10";
}

function Draw() {

  updateBallons(bCtx);

  ctx.clearRect(0, 0, cw, ch);
  var img = bc;
  ctx.drawImage(img, 0, 0);

  requestId = window.requestAnimationFrame(Draw);
}
requestId = window.requestAnimationFrame(Draw);

function Init() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }
  cw = c.width = bc.width = window.innerWidth, cx = cw / 2;
  ch = c.height = bc.height = window.innerHeight + 100, cy = ch;
  bCtx.strokeStyle = "#abcdef";
  bCtx.lineWidth = 1;
  Draw();
}

setTimeout(function () {
  Init();
  window.addEventListener('resize', Init, false);
}, 15);

function updateBallons(ctx) {
  frames += 1;
  if (frames % 37 == 0 && balloons.length < 37) {
    var balloon = new Balloon();
    balloons.push(balloon);
  }
  ctx.clearRect(0, 0, cw, ch);

  for (var i = 0; i < balloons.length; i++) {
    var b = balloons[i];
    if (b.y > -b.a) {
      b.y -= b.speed
    } else {
      b.y = parseInt(ch + b.r + b.R);
    }

    var p = thread(b, ctx);
    b.cx = p.x;
    b.cy = p.y - b.R;
    ctx.fillStyle = Grd(p.x, p.y, b.r, b.hue)
    drawBalloon(b, ctx);
  }
}

function drawBalloon(b, ctx) {

  var or = b.r * kappa; // offset

  var p1 = {
    x: b.cx - b.r,
    y: b.cy
  }
  var pc11 = {
    x: p1.x,
    y: p1.y + or
  }
  var pc12 = {
    x: p1.x,
    y: p1.y - or
  }

  var p2 = {
    x: b.cx,
    y: b.cy - b.r
  }
  var pc21 = {
    x: b.cx - or,
    y: p2.y
  }
  var pc22 = {
    x: b.cx + or,
    y: p2.y
  }

  var p3 = {
    x: b.cx + b.r,
    y: b.cy
  }
  var pc31 = {
    x: p3.x,
    y: p3.y - or
  }
  var pc32 = {
    x: p3.x,
    y: p3.y + or
  }

  var p4 = {
    x: b.cx,
    y: b.cy + b.R
  };
  var pc41 = {
    x: p4.x + or,
    y: p4.y
  }
  var pc42 = {
    x: p4.x - or,
    y: p4.y
  }

  var t1 = {
    x: p4.x + .2 * b.r * Math.cos(70 * rad),
    y: p4.y + .2 * b.r * Math.sin(70 * rad)
  }
  var t2 = {
    x: p4.x + .2 * b.r * Math.cos(110 * rad),
    y: p4.y + .2 * b.r * Math.sin(110 * rad)
  }

  //balloon
  ctx.beginPath();
  ctx.moveTo(p4.x, p4.y);
  ctx.bezierCurveTo(pc42.x, pc42.y, pc11.x, pc11.y, p1.x, p1.y);
  ctx.bezierCurveTo(pc12.x, pc12.y, pc21.x, pc21.y, p2.x, p2.y);
  ctx.bezierCurveTo(pc22.x, pc22.y, pc31.x, pc31.y, p3.x, p3.y);
  ctx.bezierCurveTo(pc32.x, pc32.y, pc41.x, pc41.y, p4.x, p4.y);
  //knot
  ctx.lineTo(t1.x, t1.y);
  ctx.lineTo(t2.x, t2.y);
  ctx.closePath();
  ctx.fill();
}

function thread(b, ctx) {
  ctx.beginPath();

  for (var i = b.a; i > 0; i -= 1) {
    var t = i * rad;
    x = b.x + b.pm * 50 * Math.cos(b.k * t - frames * rad)
    y = b.y + b.pm * 25 * Math.sin(b.k * t - frames * rad) + 50 * t
    ctx.lineTo(x, y)
  }
  ctx.stroke();
  return p = {
    x: x,
    y: y
  }
}

function Grd(x, y, r, hue) {
  grd = ctx.createRadialGradient(x - .5 * r, y - 1.7 * r, 0, x - .5 * r, y - 1.7 * r, r);
  grd.addColorStop(0, 'hsla(' + hue + ',100%,65%,.95)');
  grd.addColorStop(0.4, 'hsla(' + hue + ',100%,45%,.85)');
  grd.addColorStop(1, 'hsla(' + hue + ',100%,25%,.80)');
  return grd;
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}