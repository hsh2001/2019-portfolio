let pageIndex = 0;

const scrollToPage = Function.throttle(450, function (di, ms) {
  ms = ms || 400;
  pageIndex += di;
  scrollToAnimation(0, pageIndex * innerHeight, ms);
});

const srollHandler = Function.throttle(250, function (event) {
  const dir = Math.sign(event.deltaY);
  if (dir) scrollToPage(dir);
});


const arrowDown = 40,
      arrowUp = 38;

function scrollToAnimation(x, y, ms) {
  const sx = scrollX,
        sy = scrollY,
        dx = x - sx,
        dy = y - sy,
        frame = Math.floor(ms * 1000 / 60),
        fm1 = frame - 1;
  if (x == sx && y == sy) return;
  for (let i = 0; i < frame; i++) {
    setTimeout(function () {
      window.scrollTo(
        sx + dx * (i / fm1) ** 4,
        sy + dy * (i / fm1) ** 4
      );
    }, ms * i / fm1);
  }
}

window.addEventListener('scroll', function (event) {
  event.preventDefault();
});

window.addEventListener('wheel', function (event) {
  event.preventDefault();
  console.log(event.offsetX);
  // if (Math.abs(event.deltaY) > 100)
    srollHandler(event);
});

window.addEventListener('keydown', function (event) {
  if ([arrowDown, arrowUp].includes(event.keyCode))
    event.preventDefault();
});

window.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case arrowUp:
      scrollToPage.origin(-1);
      break;
    case arrowDown:
      scrollToPage.origin(+1);
      break;
    default:
      return;
  }

  event.preventDefault();
});

window.addEventListener('DOMContentLoaded', function (event) {
  scrollToPage.origin(0);
});
