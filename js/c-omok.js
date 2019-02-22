new Promise(
  res => window.addEventListener('scroll', function () {
    if (scrollY > $('#c-omok-page').offsetTop - innerHeight / 2.5)
      res();
  })
).then(function() {
  Object.assign($('#c-omok-page').style, {
    color: 'white',
    background: 'black'
  });
});
