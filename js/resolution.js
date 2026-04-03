function gcd(a, b) {
  a = Math.round(a);
  b = Math.round(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function formatPixels(total) {
  const mil = total / 1_000_000;
  if (mil >= 1) return mil.toFixed(4).replace(/0+$/, '').replace(/\.$/, '') + ' million';
  return (mil * 1000).toFixed(1) + ' thousand';
}

function detectAll() {
  const sw  = screen.width;
  const sh  = screen.height;
  const avw = screen.availWidth;
  const avh = screen.availHeight;
  const iw  = window.innerWidth;
  const ih  = window.innerHeight;
  const dpr = Math.round(window.devicePixelRatio * 10000) / 10000;
  const cd  = screen.colorDepth;
  const pd  = screen.pixelDepth;

  const heroW = document.getElementById('hero-w');
  const heroH = document.getElementById('hero-h');
  if (heroW) heroW.textContent = sw;
  if (heroH) heroH.textContent = sh;

  const valW = document.getElementById('val-w');
  const valH = document.getElementById('val-h');
  if (valW) valW.textContent = sw;
  if (valH) valH.textContent = sh;

  const valTotal = document.getElementById('val-total');
  if (valTotal) valTotal.textContent = formatPixels(sw * sh);

  function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

  setText('info-device-res', `${avw} x ${avh}`);
  setText('info-inner-res',  `${iw} x ${ih}`);
  setText('info-dpr', dpr);
  setText('info-color', cd);
  setText('info-pixel', pd);
  setText('info-vp', `${iw} x ${ih}`);

  const g = gcd(sw, sh);
  setText('info-aspect', `${sw / g} : ${sh / g}`);

  const ratio = sw / sh;
  const wideEl = document.getElementById('info-wide');
  if (wideEl) {
    if (ratio >= 16 / 9) {
      wideEl.innerHTML = '<span class="badge badge-yes">Yes — Ultra Wide</span>';
    } else if (ratio >= 4 / 3) {
      wideEl.innerHTML = '<span class="badge badge-yes">Yes</span>';
    } else {
      wideEl.innerHTML = '<span class="badge badge-no">No</span>';
    }
  }

  const cssW = iw / dpr;
  const cssH = ih / dpr;
  const pxPerInch = 96;
  const wIn = cssW / pxPerInch;
  const hIn = cssH / pxPerInch;
  const wCm = wIn * 2.54;
  const hCm = hIn * 2.54;
  const diagIn = Math.sqrt(wIn * wIn + hIn * hIn);
  const diagCm = diagIn * 2.54;

  setText('info-dims', `${wIn.toFixed(1)}" (${wCm.toFixed(1)} cm) x ${hIn.toFixed(1)}" (${hCm.toFixed(1)} cm)`);
  setText('info-diag', `${diagIn.toFixed(1)}" (${diagCm.toFixed(1)} cm)`);
}

detectAll();
window.addEventListener('resize', detectAll);
window.addEventListener('orientationchange', detectAll);
