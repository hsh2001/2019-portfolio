new Promise(
  res => window.addEventListener('scroll', function () {
    if (scrollY > $('#reverse-change-page').offsetTop - innerHeight / 2.5)
      res();
  })
).then(async function() {
  const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = 750,
        height = canvas.height = 750,
        len = 10,
        blockWidth = width / len,
        blockHeight = height / len;
  let color = 0; // 0 = black, 1 = white

  for (let i = 0; i < len; i++) {
    for (let k = -1; k < len; k++) {
      const x = k * blockWidth,
            y = i * blockHeight;

      ctx.fillStyle = color? '#f2f2f2' : 'black';
      ctx.fillRect(x, y, blockWidth, blockHeight);
      color = 1 - color;

      if (
        $('#reverse-change-page').offsetTop +
        $('#reverse-change-page').offsetHeight
        > scrollY
      ) $('#reverse-change-page').style.backgroundImage = `url(${
        canvas.toDataURL()
      })`;

      if (color) await wait(100);

      ctx.fillStyle = '#f3f3f3';
      ctx.fillRect(0, 0, width, height);
    }
  }

  $('#reverse-change-page').style.backgroundImage = `url(${
    canvas.toDataURL()
  })`;
});
