function resizeIframe() {
  $$('iframe').forEach(function (iframe) {
    iframe.style.height = iframe.offsetWidth * 9/16 + 'px';
  });
}

window.addEventListener('DOMContentLoaded', resizeIframe);
window.addEventListener('resize', resizeIframe);
