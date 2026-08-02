// RIFTS site — faint lightning strike effect on any download click
(function () {
  var BOLT_SVG =
    '<svg viewBox="0 0 24 24" width="42" height="42">' +
    '<path fill="currentColor" d="M13 2 L4 14 H11 L9 22 L20 9 H13 L13 2 Z"/>' +
    '</svg>';

  function spawnBolt(x, y) {
    var bolt = document.createElement('div');
    bolt.className = 'rifts-lightning-strike';
    bolt.innerHTML = BOLT_SVG;
    // Slight random offset/rotation so repeated clicks don't look identical
    var offsetX = (Math.random() - 0.5) * 12;
    var offsetY = (Math.random() - 0.5) * 12;
    bolt.style.left = (x - 21 + offsetX) + 'px';
    bolt.style.top = (y - 21 + offsetY) + 'px';
    document.body.appendChild(bolt);
    setTimeout(function () {
      bolt.remove();
    }, 650);
  }

  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[download], a.md-button, a.card-action, a.file-tile');
    if (!target) return;
    spawnBolt(e.clientX, e.clientY);
  });
})();