/*global Modernizr */

/*
 * Fix size of main element (supplied selector) based
 * on window size and a supplied adjustment.
 */

let ctr,
    tmr,
    adjust,
    timVal = Modernizr.touch ? 1 : 300,
    height;

let computeSize = function () {
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
  let ht = computeSize();
  let style = `${ht}px`;
  ctr.style.height = style;
};

function winResize(selector, reduceAmt) {
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

function scrollTo(where) {
  switch (where) {
    case 'top':
      ctr.scrollTop = 0;
      break;
    case 'bottom':
      ctr.scrollTop = height;
      break;
    default:
      break;
  }
}

export {winResize, scrollTo};
