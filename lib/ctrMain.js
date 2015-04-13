/*global Modernizr */

/*
 * Fix size of main element (supplied selector) based
 * on window size and a supplied adjustment.
 */

let ctr,
    tmr,
    adjust,
    timVal = Modernizr.touch ? 1 : 300;

let computeSize = function () {
  let height;
  if (Modernizr.touch && window.orientation !== undefined) {
    if (window.orientation === 0 || window.orientation === 180) {
      height = Math.max(window.innerHeight, window.innerWidth);
    } else {
      height = Math.min(window.innerHeight, window.innerWidth);
    }
  } else {
    height = window.innerHeight;
  }
  return height - adjust;
};

let doResize = function () {
  let height = computeSize();
  let style = `${height}px`;
  ctr.style.height = style;
};

export default function (selector, reduceAmt) {
  window.addEventListener('resize', function () {
    if (tmr) {
      clearTimeout(tmr);
    }
    tmr = setTimeout(doResize, timVal);
  });

  ctr = document.querySelector(selector);
  adjust = reduceAmt;
  doResize();
}
