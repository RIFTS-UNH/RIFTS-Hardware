// RIFTS site — realistic full-screen lightning strike effect on download clicks
(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function rand(a, b) { return a + Math.random() * (b - a); }

  // Midpoint-displacement fractal jag: splits a segment at its midpoint, nudges the
  // midpoint sideways by a shrinking random amount, and recurses. This is what gives
  // real lightning its look — dense, short, frequent kinks riding on top of a larger path,
  // instead of one uniform zigzag wavelength.
  function jaggedSegment(p1, p2, depth, disp) {
    if (depth <= 0) return [p1, p2];
    var mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
    var dx = p2.x - p1.x, dy = p2.y - p1.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / len, ny = dx / len;
    var offset = (Math.random() * 2 - 1) * disp;
    var mid = { x: mx + nx * offset, y: my + ny * offset };
    var left = jaggedSegment(p1, mid, depth - 1, disp * 0.55);
    var right = jaggedSegment(mid, p2, depth - 1, disp * 0.55);
    return left.concat(right.slice(1));
  }

  // Coarse "spine" points — these can wander far left/right, giving the bolt its
  // overall sweeping trajectory before fine jag is layered on top.
  function genSpine(startX, height, width, count) {
    var points = [{ x: startX, y: 0 }];
    var x = startX;
    for (var i = 1; i < count; i++) {
      var y = (height / (count - 1)) * i;
      x += rand(-130, 130);
      x = Math.max(20, Math.min(width - 20, x));
      points.push({ x: x, y: y });
    }
    return points;
  }

  function buildBoltPoints(startX, height, width) {
    var spineCount = 4 + Math.floor(Math.random() * 2);
    var spine = genSpine(startX, height, width, spineCount);
    var full = [spine[0]];
    for (var i = 0; i < spine.length - 1; i++) {
      var seg = jaggedSegment(spine[i], spine[i + 1], 4, 16);
      full = full.concat(seg.slice(1));
    }
    return full;
  }

  function pathD(points) {
    return "M " + points.map(function (p) { return p.x + "," + p.y; }).join(" L ");
  }

  // A short forking sub-bolt kicking off the main channel at a random point
  function makeBranch(points, width, height) {
    var startIdx = 2 + Math.floor(Math.random() * (points.length - 6));
    var origin = points[startIdx];
    var remaining = height - origin.y;
    var dir = Math.random() < 0.5 ? -1 : 1;
    var endX = origin.x + dir * rand(50, 120);
    endX = Math.max(8, Math.min(width - 8, endX));
    var end = { x: endX, y: origin.y + remaining * rand(0.3, 0.55) };
    return jaggedSegment(origin, end, 3, 10);
  }

  function spawnBolt(clickX) {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.classList.add("rifts-bolt-flash");
    svg.style.position = "fixed";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "9999";

    var points = buildBoltPoints(clickX, h, w);
    var d = pathD(points);

    // Outer blurred purple glow — miter join kept even here so the blur wraps
    // around a genuinely sharp underlying path rather than a rounded one
    var glow = document.createElementNS(SVG_NS, "path");
    glow.setAttribute("d", d);
    glow.setAttribute("stroke", "#B266FF");
    glow.setAttribute("stroke-width", "9");
    glow.setAttribute("fill", "none");
    glow.setAttribute("stroke-linejoin", "miter");
    glow.setAttribute("stroke-miterlimit", "6");
    glow.style.filter = "blur(6px)";
    glow.style.opacity = "0.3";

    // Mid purple halo
    var halo = document.createElementNS(SVG_NS, "path");
    halo.setAttribute("d", d);
    halo.setAttribute("stroke", "#C58CFF");
    halo.setAttribute("stroke-width", "3");
    halo.setAttribute("fill", "none");
    halo.setAttribute("stroke-linejoin", "miter");
    halo.setAttribute("stroke-miterlimit", "6");
    halo.style.filter = "blur(0.8px)";
    halo.style.opacity = "0.42";

    // Bright white-hot core
    var core = document.createElementNS(SVG_NS, "path");
    core.setAttribute("d", d);
    core.setAttribute("stroke", "#F5EEFF");
    core.setAttribute("stroke-width", "1.2");
    core.setAttribute("fill", "none");
    core.setAttribute("stroke-linejoin", "miter");
    core.setAttribute("stroke-miterlimit", "6");
    core.style.opacity = "0.5";

    svg.appendChild(glow);
    svg.appendChild(halo);
    svg.appendChild(core);

    // Forking branches — staggered slightly behind the main stroke, thinner and dimmer
    var branchCount = 2 + Math.floor(Math.random() * 3); // 2-4
    for (var i = 0; i < branchCount; i++) {
      var bd = pathD(makeBranch(points, w, h));
      var delay = Math.round(rand(15, 70)) + "ms";

      var branchGlow = document.createElementNS(SVG_NS, "path");
      branchGlow.setAttribute("d", bd);
      branchGlow.classList.add("rifts-strike-branch-glow");
      branchGlow.style.animationDelay = delay;

      var branchCore = document.createElementNS(SVG_NS, "path");
      branchCore.setAttribute("d", bd);
      branchCore.classList.add("rifts-strike-branch-core");
      branchCore.style.animationDelay = delay;

      svg.appendChild(branchGlow);
      svg.appendChild(branchCore);
    }

    document.body.appendChild(svg);

    // Faint full-screen purple flash, like the sky lighting up
    var screenFlash = document.createElement("div");
    screenFlash.className = "rifts-screen-flash";
    document.body.appendChild(screenFlash);

    setTimeout(function () {
      svg.remove();
      screenFlash.remove();
    }, 520);
  }

  document.addEventListener("click", function (e) {
    var target = e.target.closest("a[download], a.md-button, a.card-action, a.file-tile");
    if (!target) return;
    spawnBolt(e.clientX);
  });
})();