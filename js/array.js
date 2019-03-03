(function (arr, arrProto, someArr) {
  arr.from = function (assoc) {
    let result = [];

    for (let i = 0; i < assoc.length; i++)
      result.push(assoc[i]);

    return result;
  }

  arrProto.includes || (arrProto.includes = function (searchElement, fromIndex) {
    let a = this;
    fromIndex = parseInt(fromIndex) || 0;
    if (!a.length || fromIndex < 0) return false;

    for (let i = fromIndex; i < a.length; i++)
      if (
        a[i] === searchElement ||
        (
          //check NaN
          typeof a[i] == 'number' &&
          typeof searchElement == 'number' &&
          isNaN(a[i]) && isNaN(searchElement)
        )
      ) return true;

    return false;
  });

  arrProto.primary = function (getPrimaryKeyFunction) {
    let returnArr = [],
        that = this;

    getPrimaryKeyFunction =
        getPrimaryKeyFunction ||
        function (e) { return e };

    for (let i = 0; i < that.length; i++) {
      if (-1 === returnArr.findIndex(function (elem) {
        return getPrimaryKeyFunction(elem) === getPrimaryKeyFunction(that[i]);
      })) returnArr.push(that[i]);
    }

    return returnArr;
  }


  arrProto.random = function (key) {
    key = key || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return this[key % this.length];
  }
})(Array, Array.prototype, []);
