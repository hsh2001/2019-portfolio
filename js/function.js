Function.throttle = function (ms, fn, defaultVal) {
  let timer;

  function result() {
    if (timer) return defaultVal;
    fn.apply(null, Array.from(arguments));
    timer = setTimeout(function () {
      timer = 0;
    }, ms);
  }

  result.origin = fn;

  return result;
}
