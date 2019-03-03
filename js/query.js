function $(q) {
  return document.querySelector(q);
}

function $$(q) {
  return document.querySelectorAll(q);
}

$$('a').constructor.prototype.forEach = Array.prototype.forEach;
