(function (str, someStr, proto) {
  str[proto].replaceAll = function (searchvalue, newvalue) {
    let newStr = String(this);
    while (newStr.indexOf(searchvalue) !== -1) {
      newStr = newStr.replace(searchvalue, newvalue);
    }
    return newStr;
  };

  str[proto].escape = function (type) {
    let result = '';
    const HTML_MAP = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    type = String(type);
    switch (type.toLowerCase()) {
      case 'html':
        return String(this).replace(/[&<>"'`=\/]/g, function (s) {
          return HTML_MAP[s];
        });
      default:
        throw new Error("unknown escape type");
    }
  }

  str[proto].nl2br = function () {
    return String(this).replaceAll('\n', '<br>');
  }

  str[proto].br2nr = function () {
    return String(this).replaceAll('<br>', '\n');
  }

  str[proto].toEmoticon = function () {
    const EMOTICON_MAP = {
      ":)": "🙂",
      ";)": "😉",
      ":D": "😀",
      ":P": "😀",
      "XD": "😆",
      "<3": "❤️",
      ";(": "☹️",
      ":(": "☹️",
      "ㅡㅡ": "😑",
      "--": "😑",
      "__": "😑"
    };
    const SPACE_LIST = [
      "\t", "\n", " "
    ];
    let str = " " + String(this);
    for (let i = 0, s1; i < SPACE_LIST.length; i++) {
      s1 = SPACE_LIST[i];
      for (let k = 0, s2; k < SPACE_LIST.length; k++) {
        s2 = SPACE_LIST[k];
        for (let key in EMOTICON_MAP){
          str = str.replaceAll(s1+key+s2, s1 + EMOTICON_MAP[key] + s2);
        }
      }
    }
    return str.slice(1, str.length);
  }

  someStr.trim || (str[proto].trim = function () {
    return String(this).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  });
})(String, '', 'prototype');
