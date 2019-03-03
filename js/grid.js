window.addEventListener('DOMContentLoaded', function () {
  $$('*').forEach(function (e) {
    let cStyle = getComputedStyle(e);
    if (cStyle.display == '-ms-grid') {
      let col = 0,
          row = 1,
          lineCount = cStyle['-ms-grid-columns'].trim().split(' ').length;

      function getCol() {
        col++;

        if (lineCount < col) {
          row++;
          return col = 1;
        }

        return col;
      }

      Array.from(e.childNodes).forEach(function (child) {
        if (child.style) {
          child.style['-ms-grid-column'] = getCol();
          child.style['-ms-grid-row'] = row;
        }
      });
    }
  });
}, false);
