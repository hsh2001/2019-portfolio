new Promise(
  res => window.addEventListener('scroll', function () {
    if (scrollY > $('#board').offsetTop - innerHeight / 2.5)
      res();
  })
).then(function () {
  game.AIvsAI();
});
