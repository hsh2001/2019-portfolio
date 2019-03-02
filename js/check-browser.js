//IE의 버전을 리턴한다.
//IE가 아닐 경우 0을 리턴.
function getIEVersion() {
  var appVersion = navigator.appVersion.toUpperCase();

  //IE 6~10
  for (var i = 7; i < 11; i++)
    if (appVersion.indexOf('MSIE ' + i + '.') != -1)
      return i;

  //IE11
  if (
    navigator.appName == 'Netscape' &&
    navigator.userAgent.toLowerCase().indexOf('trident') != -1
  ) return 11;

  return 0;
}

if (getIEVersion())
  alert("구버전 브라우저라서 웹 사이트가 정상적으로 표시되지 않을 수 있습니다. 최신버전의 브라우저를 사용해주십시오");
