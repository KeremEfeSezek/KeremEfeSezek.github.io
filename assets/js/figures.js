/*
  Line drawings for hover windows and project cards, redrawn from photos and screenshots
  so everything shares the site's drawing style. Each figure is a function (lang) => SVG string.
  Colors come from CSS: currentColor for ink, --fig-hl for highlights, --fig-bg for box fills.
*/
window.FIG = (() => {
  const L = (lang, tr, en) => (lang === 'tr' ? tr : en);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  const svg = (w, h, body) =>
    `<svg class="fig" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

  const T = (x, y, s, cls = 'ft', anchor = 'middle') =>
    `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${esc(s)}</text>`;

  const rect = (x, y, w, h, cls = '', rx = 2) =>
    `<rect${cls ? ` class="${cls}"` : ''} x="${x + 0.5}" y="${y + 0.5}" width="${w}" height="${h}" rx="${rx}"/>`;

  function box(b) {
    const cls = ['fb', b.hl && 'fb-hl', b.off && 'fb-off'].filter(Boolean).join(' ');
    const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
    const label = b.s
      ? T(cx, cy - 2, b.t) + T(cx, cy + 11, b.s, 'fs')
      : T(cx, cy + 4, b.t);
    return `<g class="${cls}"><rect class="fp" x="${b.x + 0.5}" y="${b.y + 0.5}" width="${b.w}" height="${b.h}" rx="3"/>${label}</g>`;
  }

  const side = (b, s) =>
    s === 'r' ? [b.x + b.w + 0.5, b.y + b.h / 2]
      : s === 'l' ? [b.x + 0.5, b.y + b.h / 2]
      : s === 't' ? [b.x + b.w / 2, b.y + 0.5]
      : [b.x + b.w / 2, b.y + b.h + 0.5];

  // arrow head pointing into the box side it lands on
  function head(x, y, s) {
    const k = 5, w = 3.2;
    if (s === 'l') return `<path d="M${x - k} ${y - w}L${x} ${y}L${x - k} ${y + w}"/>`;
    if (s === 'r') return `<path d="M${x + k} ${y - w}L${x} ${y}L${x + k} ${y + w}"/>`;
    if (s === 't') return `<path d="M${x - w} ${y - k}L${x} ${y}L${x + w} ${y - k}"/>`;
    return `<path d="M${x - w} ${y + k}L${x} ${y}L${x + w} ${y + k}"/>`;
  }

  function wire(a, b, o = {}) {
    const fs = o.from || 'r', ts = o.to || 'l';
    const [px, py] = side(a, fs), [qx, qy] = side(b, ts);
    const horiz = s => s === 'l' || s === 'r';
    let d;
    if (horiz(fs) && horiz(ts)) {
      if (Math.abs(py - qy) < 0.6) d = `M${px} ${py}H${qx}`;
      else { const mx = o.mx != null ? o.mx : (px + qx) / 2; d = `M${px} ${py}H${mx}V${qy}H${qx}`; }
    } else if (!horiz(fs) && !horiz(ts)) {
      if (Math.abs(px - qx) < 0.6) d = `M${px} ${py}V${qy}`;
      else { const my = o.my != null ? o.my : (py + qy) / 2; d = `M${px} ${py}V${my}H${qx}V${qy}`; }
    } else if (horiz(fs)) d = `M${px} ${py}H${qx}V${qy}`;
    else d = `M${px} ${py}V${qy}H${qx}`;
    const cls = ['fw', o.dash && 'fw-dash', o.hot && 'fw-hot'].filter(Boolean).join(' ');
    const lbl = o.label ? T(o.lx, o.ly, o.label, 'fs') : '';
    return `<g class="${cls}"><path d="${d}"/>${o.arrow === false ? '' : head(qx, qy, ts)}</g>${lbl}`;
  }

  // deterministic noise so a figure looks the same every time
  function rng(seed) {
    return () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------- T3 Foundation ---------- */

  // redrawn from the electrical test console
  function console_(lang) {
    const tp = (x, y) => `<circle class="fp" cx="${x}" cy="${y}" r="4.5"/><circle class="fdot" cx="${x}" cy="${y}" r="1.4"/>`;
    const parts = [[40, 58, 26, 14], [80, 56, 18, 18], [118, 60, 30, 12], [160, 54, 22, 26], [42, 118, 16, 30], [150, 132, 34, 18], [98, 166, 40, 14]]
      .map(([x, y, w, h]) => rect(x, y, w, h, '', 1.5)).join('');
    const gnd = (x, y) => `<circle class="fp" cx="${x}" cy="${y}" r="4.5"/><circle cx="${x}" cy="${y}" r="8.5" stroke-dasharray="2 2"/>`;
    const rows = [
      ['TP1', 'USB C', 'ok'],
      ['TP23', L(lang, 'Ops. güç', 'Opt. power'), 'ok'],
      ['TP22', L(lang, 'PD güç', 'PD power'), 'ok'],
      ['TP21', 'PD 3V3', 'on'],
      ['TP2', L(lang, 'Giriş', 'Input'), ''],
      ['TP3', '5V', ''],
      ['TP4', 'VDD 5V', '']
    ];
    let list = '';
    rows.forEach(([id, name, st], i) => {
      const y = 70 + i * 20;
      if (st === 'on') list += `<rect class="frow" x="223" y="${y - 13}" width="130" height="19"/><path class="fw-hot" d="M224 ${y - 13}V${y + 6}" stroke-width="2"/>`;
      list += T(230, y, id, st === 'on' ? 'ft fhot' : 'ft', 'start') + T(266, y, name, 'fs', 'start');
      if (st === 'ok') list += `<path d="M334 ${y - 5}l3 3 6-7"/>`;
      else if (st === 'on') list += rect(316, y - 11, 30, 14, 'fp', 2);
      else list += `<path d="M335 ${y - 4}h8" opacity=".5"/>`;
    });
    return svg(360, 232,
      rect(6, 6, 347, 219, 'fp', 4) +
      `<path d="M6.5 24.5H353.5M222.5 24.5V225.5"/>` +
      T(14, 19, L(lang, 'Elektriksel test konsolu', 'Electrical test console'), 'fs', 'start') +
      rect(22, 38, 186, 176, '', 4) + parts +
      tp(58, 96) + tp(176, 108) + tp(146, 160) + tp(60, 164) + tp(178, 190) + tp(120, 196) +
      gnd(192, 58) + T(192, 78, 'GND', 'fs') + gnd(38, 196) + T(38, 214, 'GND', 'fs') +
      `<g class="fw-hot"><circle cx="88" cy="134" r="10"/><circle cx="88" cy="134" r="16" opacity=".35"/><path d="M100.5 122L94 126"/></g>` +
      `<circle class="fhot-fill" cx="88" cy="134" r="5"/>` +
      rect(100, 88, 92, 36, 'fp', 3) +
      T(108, 102, 'TP21', 'ft fhot', 'start') + T(108, 116, 'PD 3V3 · < 1 Ω', 'fs', 'start') +
      T(230, 42, L(lang, 'Tablo 3 · Direnç', 'Table 3 · Resistance'), 'fs', 'start') +
      `<path class="fw-hot" d="M230 48.5H330" stroke-width="1.6"/>` +
      list +
      T(230, 216, L(lang, '3 geçti · 17 bekliyor', '3 passed · 17 pending'), 'fs', 'start'));
  }

  // quadplane seen from above with the board in the fuselage, then the wiring work and the two flights
  function vtol(lang) {
    const rotor = (x, y) => `<circle cx="${x}" cy="${y}" r="13" stroke-dasharray="3 3"/><circle class="fdot" cx="${x}" cy="${y}" r="2.2"/>`;
    const rc = { x: 204, y: 12, w: 148, h: 34, t: 'FS-iA10B', s: 'iBUS → Main RX' };
    const gem = { x: 204, y: 66, w: 148, h: 40, t: 'T3 Gemstone O1', s: 'ArduPilot', hl: true };
    const pwm = { x: 204, y: 126, w: 148, h: 34, t: '7 × PWM', s: L(lang, '4 kaldırma, itiş, servo', '4 lift, pusher, servos') };
    return svg(360, 208,
      `<path d="M50 40H132M50 128H132"/>` +
      rect(80, 14, 20, 140, 'fp', 3) +
      rect(28, 79, 132, 10, 'fp', 5) +
      rect(148, 64, 12, 40, 'fp', 2) +
      `<path d="M168 76V92" stroke-width="2.2" opacity=".45"/>` +
      rotor(50, 40) + rotor(132, 40) + rotor(50, 128) + rotor(132, 128) +
      `<g class="fb-hl">${rect(105, 77, 16, 14, 'fp', 1.5)}</g>` +
      `<g class="fw-hot"><path d="M113 76.5V58H190V86H203" stroke-dasharray="3 3"/>${head(203.5, 86, 'l')}</g>` +
      wire(rc, gem, { from: 'b', to: 't' }) + wire(gem, pwm, { from: 'b', to: 't' }) +
      box(rc) + box(gem) + box(pwm) +
      `<path d="M14 182.5H352" opacity=".45"/>` +
      `<circle class="fp" cx="96" cy="182.5" r="4"/><circle class="fhot-fill" cx="266" cy="182.5" r="4.5"/>` +
      T(96, 200, L(lang, '14. gün · Pixhawk ile uçuş', 'day 14 · flying on Pixhawk'), 'fxs') +
      T(266, 200, L(lang, '20. gün · Gemstone ile ilk uçuş', 'day 20 · first flight on Gemstone'), 'fxs fhot'));
  }

  function robot(lang) {
    const core = { x: 116, y: 50, w: 120, h: 86 };
    const us = { x: 12, y: 36, w: 82, h: 34, t: L(lang, 'Ultrasonik', 'Ultrasonic') };
    const imu = { x: 12, y: 112, w: 82, h: 34, t: 'IMU' };
    const tcp = { x: 254, y: 30, w: 96, h: 42, t: 'TCP', s: L(lang, 'uzaktan kontrol', 'remote control') };
    const ota = { x: 254, y: 112, w: 96, h: 42, t: 'OTA', s: L(lang, 'güncelleme', 'updates') };
    const ros = { x: 102, y: 160, w: 148, h: 38, t: 'T3 Gemstone O1', s: L(lang, 'ROS üst sistem · LiDAR', 'ROS upper system · LiDAR'), off: true };
    return svg(360, 206,
      T(176, 20, L(lang, '✓ 7 günde 10 sürüm · 2 kritik hata giderildi', '✓ 10 versions in 7 days · 2 critical bugs fixed'), 'fs') +
      wire(us, core) + wire(imu, core) +
      wire(tcp, core, { from: 'l', to: 'r' }) + wire(ota, core, { from: 'l', to: 'r' }) +
      wire(core, ros, { from: 'b', to: 't', label: 'USB-CDC', lx: 206, ly: 151 }) +
      `<g class="fb fb-hl"><rect class="fp" x="116.5" y="50.5" width="120" height="86" rx="3"/>` +
      T(176, 68, 'Deneyap Kart v2') + T(176, 81, 'FreeRTOS', 'fs') + `</g>` +
      rect(126, 92, 46, 34, '', 2) + rect(180, 92, 46, 34, '', 2) +
      T(149.5, 106, 'core 0', 'fxs') + T(149.5, 118, L(lang, 'ağ · OTA', 'net · OTA'), 'fxs') +
      T(203.5, 106, 'core 1', 'fxs') + T(203.5, 118, L(lang, 'kontrol', 'control'), 'fxs') +
      box(us) + box(imu) + box(tcp) + box(ota) + box(ros));
  }

  // redrawn from the Fritzing breadboard view of the OTA project
  function ota(lang) {
    let oledPins = '', wires = '';
    [62, 74, 86, 98].forEach(x => {
      oledPins += `<rect class="fdot" x="${x - 2.5}" y="70" width="5" height="5"/>`;
      wires += `M${x} 75V104.5`;
    });
    return svg(360, 200,
      `<path d="${wires}"/>` + T(106, 92, 'I²C', 'fs', 'start') +
      rect(36, 12, 100, 60, 'fp', 3) + rect(46, 20, 80, 34, '', 1.5) +
      `<path d="M52 28h40M52 34h56M52 40h30" opacity=".5"/>` + oledPins +
      T(130, 66, 'OLED', 'fs', 'end') +
      `<g class="fw-dash fw-hot"><path d="M76 122C150 122 190 42 254 42"/></g>` + T(236, 32, 'OTA', 'fs fhot') +
      `<g class="fb-hl">${rect(20, 104, 172, 64, 'fp', 3)}</g>` +
      rect(28, 112, 46, 48, 'fp', 2) + `<path d="M34 120h8v6h8v-6h8v6h8" opacity=".7"/>` +
      `<path class="fpins" d="M84 108.5H184M84 163.5H184"/>` +
      rect(188, 126, 10, 20, 'fp', 3) +
      T(134, 138, 'Deneyap Kart v2', 'ft') + T(134, 151, 'ESP32-S3', 'fs') +
      `<g class="fw-hot"><path d="M226.5 146H212V182H172V168.5"/></g><path d="M226.5 158H218V190H160V168.5"/>` +
      rect(226, 128, 118, 46, 'fp', 4) + `<path d="M345 144v14" stroke-width="3"/>` +
      T(222, 143, '+', 'fs', 'end') + T(222, 156, '−', 'fs', 'end') +
      T(285, 149, L(lang, 'LiPo 3,7 V', 'LiPo 3.7 V'), 'ft') + T(285, 163, '1000 mAh', 'fs') +
      rect(262, 16, 72, 46, 'fp', 3) + `<path d="M270 28h40M270 36h52M270 44h28" opacity=".5"/>` +
      `<path class="fp" d="M254 66.5h88l-6 8h-76z"/>`);
  }

  // Deneyap Blok board panel: module palette, the board, wires snapped to real pins
  function blok(lang) {
    const mods = ['LED', L(lang, 'Buton', 'Button'), 'OLED', 'Servo', 'Buzzer', 'HC-SR04', L(lang, 'Potans.', 'Pot')];
    let pal = '';
    mods.forEach((m, i) => {
      const y = 46 + i * 17;
      if (m === 'OLED') pal += `<rect class="frow" x="7" y="${y - 11}" width="79" height="15"/>`;
      pal += T(14, y, m, m === 'OLED' ? 'fxs fhot' : 'fxs', 'start');
    });
    pal += T(14, 46 + mods.length * 17, L(lang, '… 26 modül', '… 26 modules'), 'fxs', 'start');
    let wires = '';
    [268, 282, 296, 310].forEach((px, i) => {
      const by = 98 + i * 12;
      wires += `<circle class="fdot" cx="${px}" cy="90.5" r="2"/><path d="M${px} 90.5C${px} ${by} ${px - 40} ${by} 205.5 ${by}"/>`;
    });
    return svg(360, 210,
      rect(6, 6, 347, 197, 'fp', 4) +
      `<path d="M6.5 24.5H353.5M86.5 24.5V203.5"/>` +
      T(14, 19, L(lang, 'Deneyap Blok · kart paneli', 'Deneyap Blok · board panel'), 'fs', 'start') +
      T(346, 19, L(lang, 'Bloklar | Kod', 'Blocks | Code'), 'fxs', 'end') +
      pal +
      rect(120, 50, 92, 132, 'fp', 4) + rect(154, 44, 24, 10, 'fp', 1.5) +
      `<path class="fpins" d="M127 60V172M205 60V172"/>` +
      `<g class="fb-hl">${rect(144, 90, 44, 44, 'fp', 2)}</g>` +
      T(166, 160, 'Deneyap Kart', 'fxs') +
      wires +
      rect(252, 40, 84, 50, 'fp', 3) + rect(260, 48, 50, 26, '', 1.5) +
      `<path d="M266 56h30M266 63h38" opacity=".5"/>` + T(323, 66, 'OLED', 'fxs') +
      `<g class="fw-hot"><path d="M258.5 163C236 163 232 122 205.5 122"/></g>` +
      rect(258, 148, 46, 30, 'fp', 3) + `<circle cx="272" cy="163" r="5"/>` + T(290, 166, 'LED', 'fxs') +
      `<g class="fw-hot"><path d="M222 199L229 187L236 199Z"/></g>` + T(229, 197.5, '!', 'fxs fhot') +
      T(242, 197, L(lang, 'pin dolu: uyarı', 'pin in use: warning'), 'fxs fhot', 'start'));
  }

  /* ---------- Repkon ---------- */

  function boards3() {
    const pill =
      `<rect class="fp" x="12.5" y="76.5" width="104" height="40" rx="2"/>` +
      `<rect x="6.5" y="88.5" width="10" height="16" rx="1.5"/>` +
      `<rect x="52.5" y="84.5" width="24" height="24" rx="1.5"/>` +
      `<rect x="86.5" y="90.5" width="8" height="12" rx="1"/>` +
      `<path class="fpins" d="M20 81.5H110M20 111.5H110"/>` +
      T(64.5, 136, 'STM32F103C8T6', 'fs');
    const nucleo = (x, name) =>
      `<rect class="fp" x="${x + 0.5}" y="26.5" width="86" height="112" rx="3"/>` +
      `<rect x="${x + 36.5}" y="20.5" width="14" height="8" rx="1"/>` +
      `<path d="M${x + 0.5} 58.5H${x + 86.5}" stroke-dasharray="3 3"/>` +
      `<rect x="${x + 34.5}" y="36.5" width="18" height="14" rx="1"/>` +
      `<rect x="${x + 29.5}" y="84.5" width="28" height="28" rx="1.5"/>` +
      `<path class="fpins" d="M${x + 7} 66V132M${x + 80} 66V132"/>` +
      T(x + 43.5, 158, name, 'fs');
    return svg(360, 172, pill + nucleo(138, 'NUCLEO-L476RG') + nucleo(250, 'NUCLEO-8L152R8'));
  }

  // the anomaly detection process, told along one signal
  function process(lang) {
    const r = rng(11);
    const mid = 112, pts = [];
    for (let x = 20; x <= 262; x += 2) {
      let v = (r() - 0.5) * 14 + Math.sin(x * 0.21) * 5;
      if (x > 218 && x < 240) v += Math.sin((x - 218) / 22 * Math.PI) * 56;
      pts.push(`${x},${(mid - v).toFixed(1)}`);
    }
    const stage = (x1, x2, label) => `<path d="M${x1} 34V28H${x2}V34" opacity=".6"/>` + T((x1 + x2) / 2, 22, label, 'fxs');
    const team = { x: 268, y: 40, w: 88, h: 46, t: L(lang, 'bakım ekibi', 'maintenance'), s: L(lang, 'alarm, iş emri', 'alarm, ticket'), hl: true };
    return svg(360, 192,
      stage(20, 106, '1 · ' + L(lang, 'veri toplama', 'collect')) +
      stage(112, 186, '2 · baseline') +
      stage(192, 262, '3 · ' + L(lang, 'karşılaştırma', 'compare')) +
      `<rect class="fband" x="112" y="98" width="150" height="28"/>` +
      `<path d="M112 98.5H262M112 125.5H262" stroke-dasharray="3 3" opacity=".5"/>` +
      `<path class="fw-hot" d="M112 70.5H262" stroke-dasharray="4 4"/>` +
      T(116, 66, L(lang, 'eşik', 'threshold'), 'fs fhot', 'start') +
      `<polyline points="${pts.join(' ')}" stroke-width="1.3"/>` +
      `<g class="fw-hot"><circle cx="229" cy="56" r="7"/><path d="M236 56H252V63H268.5"/>${head(268.5, 63, 'l')}</g>` +
      T(229, 44, '4 · ' + L(lang, 'eşik aşımı', 'alarm'), 'fs fhot') +
      box(team) +
      `<path d="M20 160.5H262" opacity=".4"/>` + T(266, 163, 't', 'fs', 'start') +
      T(20, 182, L(lang, 'kaynaklar: ivme · akım · sıcaklık · basınç …', 'sources: vibration · current · temperature · pressure …'), 'fs', 'start'));
  }

  // redrawn from the visualization app, without any machine details
  function app(lang) {
    const tabs = ['Bars', 'Line Plot', 'Data Table', 'Data Monitor', 'Tilt', 'FFT', 'Config', 'Events', 'Registers'];
    let side = '';
    tabs.forEach((tb, i) => {
      const y = 56 + i * 15;
      if (i === 1) side += `<rect class="frow" x="7" y="${y - 10}" width="70" height="14"/>`;
      side += T(12, y, tb, i === 1 ? 'fxs fhot' : 'fxs', 'start');
    });
    const r = rng(5);
    let z = '', x = '', y = '';
    for (let px = 90, i = 0; px <= 344; px += 2, i++) {
      const b = px > 298 && px < 326 ? Math.sin((px - 298) / 28 * Math.PI) : 0;
      const n = () => r() - 0.5;
      const c = i ? 'L' : 'M';
      z += `${c}${px} ${(84 + n() * 2 + b * n() * 60).toFixed(1)}`;
      x += `${c}${px} ${(134 + n() * 2 + b * n() * 44).toFixed(1)}`;
      y += `${c}${px} ${(140 + n() * 2 + b * n() * 36).toFixed(1)}`;
    }
    return svg(360, 220,
      rect(6, 6, 347, 207, 'fp', 4) +
      `<path d="M6.5 24.5H353.5M6.5 40.5H353.5M78.5 40.5V200.5M6.5 200.5H353.5"/>` +
      T(14, 19, L(lang, 'Canlı sensör görselleştirme', 'Live sensor visualization'), 'fs', 'start') +
      T(346, 19, 'TR · EN', 'fxs', 'end') +
      T(14, 35, 'Port: /dev/ttyACM0', 'fxs', 'start') +
      rect(118, 27, 52, 11, '', 2) + T(144, 35.5, L(lang, 'bağlan', 'connect'), 'fxs') +
      rect(174, 27, 44, 11, '', 2) + T(196, 35.5, L(lang, 'başlat', 'start'), 'fxs') +
      side +
      `<path d="M86 84.5H346M86 132.5H346M86 180.5H346" stroke-dasharray="2 4" opacity=".35"/>` +
      `<path d="M86 46V194" opacity=".5"/>` +
      `<path d="M136 46V194" stroke-dasharray="3 3" opacity=".45"/>` +
      `<path class="fw-hot" d="M312 46V194" stroke-dasharray="3 3"/>` +
      `<path d="${y}" opacity=".45"/><path class="fw-hot" d="${x}"/><path d="${z}"/>` +
      T(92, 58, 'X  Y  Z', 'fxs', 'start') +
      T(14, 210, L(lang, '12 sensör kartı destekleniyor', '12 sensor boards supported'), 'fxs', 'start') +
      T(346, 210, 'ODR 400 Hz · ±2 g', 'fxs', 'end'));
  }

  /* ---------- SARA ---------- */

  // side view of the vehicle, nose to the right; the nose cap is the part that separates
  function sub(x, y, a, cap = true) {
    return `<g transform="translate(${x} ${y}) rotate(${a}) scale(.9)">` +
      `<path class="fp" d="M-26 -6L-31 -12H-25L-20 -6ZM-26 6L-31 12H-25L-20 6Z"/><path d="M-31 -4V4M-31 0H-28"/>` +
      `<rect class="fp" x="-28" y="-6" width="42" height="12" rx="3"/>` +
      (cap ? `<g class="fb-hl"><path class="fp" d="M14 -6Q28 -6 28 0Q28 6 14 6Z"/></g>` : '') + `</g>`;
  }

  // mission 2: dive, pitch up to the surface, nose cap off, rocket out
  function mission(lang) {
    let surf = 'M0 50';
    for (let x = 0; x < 360; x += 24) surf += ' q6 -3 12 0 t12 0';
    return svg(360, 160,
      `<path d="${surf}" opacity=".75"/>` +
      `<path d="M14 51C44 54 52 122 84 122H196Q206 122 214 116L277 72" stroke-dasharray="4 4" opacity=".7"/>` +
      sub(140, 122, 0) + sub(240, 99, -33) + sub(298, 58, -33, false) +
      `<g transform="translate(338 52) rotate(48)"><g class="fb-hl"><path class="fp" d="M-6 -5.4Q6.6 -5.4 6.6 0Q6.6 5.4 -6 5.4Z"/></g></g>` +
      `<g class="fw-hot"><path d="M320 43Q338 30 352 2" stroke-dasharray="4 4"/></g>` +
      `<g transform="translate(342 16) rotate(-60)"><g class="fb-hl"><path class="fp" d="M-14 -3.5L-18 -8H-13L-9 -3.5H6L14 0L6 3.5H-9L-13 8H-18L-14 3.5Z"/></g>` +
      `<g class="fw-hot"><path d="M-19 -2.5L-27 0L-19 2.5"/></g></g>` +
      T(140, 150, '1 · ' + L(lang, "dalış, 3 m'de seyir", 'dive, cruise at 3 m'), 'fs') +
      T(282, 126, '2 · ' + L(lang, 'yunuslama +30°', 'pitch up +30°'), 'fs') +
      T(318, 20, '3 · ' + L(lang, 'roket ateşleme', 'rocket launch'), 'fs fhot', 'end'));
  }

  // mission 1 seen from above
  function route(lang) {
    let hatch = '';
    for (let y = 16; y < 176; y += 12) hatch += `M20 ${y}l-8 8`;
    return svg(360, 192,
      `<path d="M20.5 10V180"/><path d="${hatch}" opacity=".5"/>` + T(8, 190, L(lang, 'kıyı', 'shore'), 'fxs', 'start') +
      `<path d="M70.5 22V160" stroke-dasharray="3 3" opacity=".6"/>` +
      T(70, 16, L(lang, 'başlangıç / bitiş', 'start / finish'), 'fxs') +
      `<path d="M20.5 40.5H70" opacity=".6"/>` + T(45, 36, '10 m', 'fxs') +
      `<g class="fw-hot"><path d="M70 110H270A18 18 0 0 0 270 74H76" stroke-width="1.6"/>` +
      head(190, 110, 'l') + head(150, 74, 'r') + head(76, 74, 'r') + `</g>` +
      `<circle class="fdot" cx="70" cy="110" r="3"/>` +
      `<path d="M120 104V116"/>` +
      T(95, 102, L(lang, '10 m düz', '10 m straight'), 'fxs') + T(120, 128, L(lang, 'süre başlar', 'timer starts'), 'fxs') +
      T(204, 102, L(lang, '2 m derinlikte seyir', 'cruise at 2 m depth'), 'fxs') +
      T(294, 95, '180°', 'fs fhot', 'start') +
      T(170, 90, L(lang, 'otonom dönüş', 'autonomous return'), 'fxs') +
      T(76, 64, L(lang, 'bitiş: motor kesilir, araç yüzer', 'finish: motor off, floats up'), 'fxs', 'start') +
      `<path d="M20.5 146.5H270M270 141V152" opacity=".6"/>` +
      T(145, 160, L(lang, 'kıyıdan ≥ 50 m', '≥ 50 m from shore'), 'fxs') +
      T(190, 180, L(lang, 'konum = Kalman(INS, basınç, su çarkı)', 'position = Kalman(INS, pressure, paddle wheel)'), 'fxs'));
  }

  // mission computer: sensors on the left, actuators on the right
  function gkb(lang) {
    const ins = [
      { t: '3DM-CV7 INS', s: 'UART · DMA' },
      { t: 'NPI-19', s: L(lang, 'basınç · I²C', 'pressure · I²C') },
      { t: L(lang, 'Su çarkı', 'Paddle wheel'), s: 'Hall · TIM5' },
      { t: L(lang, 'Sızıntı ×3', 'Leak ×3'), s: 'ADC' },
      { t: L(lang, 'Su · LDR', 'Water · LDR'), s: 'GPIO' }
    ];
    const outs = [
      { t: L(lang, 'İtki', 'Thruster'), s: 'ESC · TIM3' },
      { t: 'Servo ×4', s: L(lang, 'dümen · PWM', 'rudders · PWM') },
      { t: 'Ballast', s: L(lang, 'step · GPIO', 'stepper · GPIO') },
      { t: L(lang, 'Burun kapağı', 'Nose cap'), s: L(lang, 'CO₂ valf', 'CO₂ valve') },
      { t: L(lang, 'Roket', 'Rocket'), s: L(lang, 'izole MOSFET', 'isolated MOSFET'), hl: true },
      { t: L(lang, 'Uyarı', 'Alarm'), s: '95 dB · LED' }
    ];
    let io = '';
    ins.forEach((b, i) => {
      const y = 18 + i * 38;
      io += `<path d="M100.5 ${y + 15}H112"/>` + box({ x: 6, y, w: 94, h: 30, ...b });
    });
    outs.forEach((b, i) => {
      const y = 8 + i * 32;
      io += `<path d="M252 ${y + 15}H262.5"/>${head(262.5, y + 15, 'l')}` + box({ x: 262, y, w: 92, h: 30, ...b });
    });
    const core = { x: 120, y: 52, w: 120, h: 104 };
    const dl = { x: 136, y: 8, w: 88, h: 30, t: 'Datalogger', s: 'USART' };
    return svg(360, 206,
      `<path d="M112 33V185M252 23V183" stroke-width="1.6"/>` +
      `<path d="M112 105H120.5"/>${head(120.5, 105, 'l')}<path d="M240.5 105H252"/>` +
      wire(core, dl, { from: 't', to: 'b' }) +
      io +
      `<g class="fb fb-hl"><rect class="fp" x="120.5" y="52.5" width="120" height="104" rx="3"/>` +
      T(180, 70, 'STM32H747') + `</g>` + T(180, 82, 'Arduino GIGA R1', 'fxs') +
      rect(128, 90, 50, 40, '', 2) + rect(182, 90, 50, 40, '', 2) +
      T(153, 103, 'M7', 'fs') + T(153, 114, '480 MHz', 'fxs') + T(153, 124, 'nav · FSM', 'fxs') +
      T(207, 103, 'M4', 'fs') + T(207, 114, '240 MHz', 'fxs') + T(207, 124, 'failsafe', 'fxs') +
      rect(128, 134, 104, 14, '', 2) + T(180, 144, 'SRAM4', 'fxs') +
      box(dl) +
      T(180, 174, L(lang, 'bare-metal C · 50 Hz', 'bare-metal C · 50 Hz'), 'fxs'));
  }

  // power path from the 2026 critical design report
  function power(lang) {
    const chip = (x, y, t) => {
      const w = t.length * 5.7 + 12;
      return { svg: rect(x, y - 9, w, 18, 'fp', 3) + T(x + w / 2, y + 3.5, t, 'fs'), w };
    };
    const rows = [
      { y: 26, rail: L(lang, '21,6 V', '21.6 V'), sub: L(lang, 'doğrudan', 'direct'), items: ['ESC', 'Servo ×4', L(lang, 'CO₂ valf', 'CO₂ valve')] },
      { y: 62, rail: '12 V', sub: 'LM2596', items: [L(lang, 'Görev bilgisayarı', 'Mission computer'), 'INS'] },
      { y: 88, items: [L(lang, 'Step sürücü', 'Stepper driver'), L(lang, 'Uyarı', 'Alarm')] },
      { y: 124, rail: '5 V', sub: 'LM2596', items: [L(lang, 'Sızıntı ×3', 'Leak ×3'), 'LDR', 'Datalogger'] },
      { y: 150, items: [L(lang, 'Su sensörü', 'Water sensor'), L(lang, 'Ateşleme MOSFET', 'Firing MOSFET')] },
      { y: 186, rail: L(lang, '3,3 V', '3.3 V'), sub: L(lang, 'GKB', 'MCU'), items: ['NPI-19', L(lang, 'Su çarkı', 'Paddle wheel')] }
    ];
    let out = '';
    let railY = 0;
    rows.forEach(row => {
      if (row.rail) {
        railY = row.y;
        out += `<path d="M114 ${row.y}H122.5M172.5 ${row.y}H178"/>` + box({ x: 122, y: row.y - 13, w: 50, h: 26, t: row.rail, s: row.sub });
      } else {
        out += `<path d="M147 ${railY + 13.5}V${row.y}H178"/>`;
      }
      let x = 178;
      row.items.forEach(t => { const c = chip(x, row.y, t); out += c.svg; x += c.w + 5; });
    });
    const bat = { x: 6, y: 6, w: 98, h: 40, t: '6S3P Li-ion', s: L(lang, '21,6 V · 12,6 Ah', '21.6 V · 12.6 Ah') };
    const bms = { x: 6, y: 62, w: 98, h: 30, t: 'BMS', s: 'Daly · 70 A' };
    const relay = { x: 6, y: 108, w: 98, h: 40, t: L(lang, 'Röle ×2', 'Relay ×2'), s: '24 V · 100 A', hl: true };
    const btn = { x: 6, y: 166, w: 98, h: 34, t: L(lang, 'Butonlar', 'Buttons'), s: L(lang, 'aç · acil durdur', 'arm · e-stop') };
    return svg(360, 206,
      wire(bat, bms, { from: 'b', to: 't' }) + wire(bms, relay, { from: 'b', to: 't' }) +
      wire(btn, relay, { from: 't', to: 'b', dash: true }) +
      `<path d="M104.5 128H114M114 26V128" stroke-width="1.8"/>` +
      `<path d="M114 128V186" stroke-dasharray="3 3"/>` +
      box(bat) + box(bms) + box(relay) + box(btn) + out);
  }

  /* ---------- Air Defense Systems ---------- */

  // focal point tuning, drawn from the lens sketches
  function optics(lang) {
    const laser = { x: 10, y: 78, w: 72, h: 44, t: L(lang, 'lazer', 'laser'), s: L(lang, 'modül', 'module'), hl: true };
    return svg(360, 200,
      T(10, 26, L(lang, 'Lazer modülünde odak noktası optimizasyonu', 'Focal point tuning in the laser module'), 'fs', 'start') +
      `<g class="fw-hot"><path d="M82.5 95H136M82.5 105H136M146 95L218 80M146 105L218 120M226 80L322 100M226 120L322 100M322 100L350 94M322 100L350 106"/></g>` +
      `<path class="fp" d="M134 68H146Q138 100 146 132H134Z"/>` +
      `<path class="fp" d="M216 66V134Q240 100 216 66Z"/>` +
      `<path d="M322 66V134" stroke-dasharray="3 3" opacity=".6"/>` +
      `<circle class="fhot-fill" cx="322" cy="100" r="3.5"/>` + T(328, 80, 'f', 'fs fhot', 'start') +
      T(322, 60, L(lang, 'hedef', 'target'), 'fs') +
      T(140, 150, L(lang, 'ıraksak', 'diverging'), 'fs') + T(224, 150, L(lang, 'yakınsak', 'converging'), 'fs') +
      `<path d="M226 172.5H322M226 168V177M322 168V177" opacity=".7"/>` +
      T(274, 190, L(lang, 'odak mesafesi', 'focal distance'), 'fs') +
      box(laser));
  }

  // bench check of the power supply outputs, from the photos
  function bench(lang) {
    let vents = '';
    for (let x = 118; x <= 166; x += 8) vents += `M${x} 82V128`;
    let terms = '';
    for (let i = 0; i < 7; i++) terms += rect(30 + i * 18, 148, 12, 10, 'fp', 1);
    const meter = (x, val, lbl) =>
      rect(x, 22, 64, 112, 'fp', 8) + rect(x + 8, 32, 48, 24, '', 2) + T(x + 32, 49, val, 'ft') +
      `<circle cx="${x + 32}" cy="90" r="15"/><path d="M${x + 32} 90L${x + 40} 80"/>` +
      `<circle class="fdot" cx="${x + 22}" cy="122" r="2.5"/><circle class="fdot" cx="${x + 42}" cy="122" r="2.5"/>` +
      T(x + 32, 14, lbl, 'fs');
    return svg(360, 196,
      `<g class="fw-hot"><path d="M232 122.5C232 170 120 176 120 158"/></g><path d="M252 122.5C252 182 96 186 96 158"/>` +
      `<g class="fb-hl">${rect(14, 62, 172, 86, 'fp', 3)}</g>` +
      `<circle cx="66" cy="105" r="26"/><circle cx="66" cy="105" r="6"/><path d="M66 79V131M40 105H92M48 87L84 123M84 87L48 123" opacity=".45"/>` +
      `<path d="${vents}" opacity=".6"/>` + terms +
      T(100, 182, L(lang, 'güç kaynağı', 'power supply'), 'fs') +
      meter(210, '5.009', L(lang, '5,009 V', '5.009 V')) +
      meter(286, '12.00', L(lang, '12,00 V', '12.00 V')));
  }

  // draft control board layout; never manufactured
  function pcbdraft(lang) {
    const drv = y => rect(40, y, 54, 42, 'fp', 2) + `<path class="fpins" d="M46 ${y + 4}V${y + 38}M88 ${y + 4}V${y + 38}"/>` + rect(56, y + 12, 22, 18, '', 1.5);
    let jst = '';
    [56, 80, 104, 128, 152].forEach(y => { jst += rect(294, y, 14, 16, 'fp', 1.5); });
    return svg(360, 214,
      `<rect x="30.5" y="14.5" width="280" height="182" rx="6" stroke-dasharray="5 4"/>` +
      [[42, 26], [298, 26], [42, 184], [298, 184]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6"/>`).join('') +
      drv(40) + drv(88) + drv(136) +
      `<g class="fb-hl">${rect(120, 36, 120, 150, 'fp', 3)}</g>` +
      `<path class="fpins" d="M128 44V178M232 44V178"/>` +
      rect(146, 136, 68, 44, 'fp', 2) + `<path d="M152 144h8v6h8v-6h8v6h8v-6h8" opacity=".7"/>` +
      rect(170, 30, 20, 10, 'fp', 1.5) +
      rect(256, 20, 30, 22, 'fp', 2) + jst +
      `<circle cx="268" cy="80" r="12" stroke-dasharray="2 2"/>` + T(268, 83, 'HSS', 'fxs') +
      T(170, 210, L(lang, 'taslak · üretilmedi', 'draft · not manufactured'), 'fs fhot'));
  }

  /* ---------- projects without source images ---------- */

  function grad(lang) {
    const cam = { x: 10, y: 76, w: 96, h: 48, t: L(lang, 'Kamera', 'Camera'), s: L(lang, 'keşif robotu', 'recon robot') };
    const gem = { x: 124, y: 70, w: 132, h: 60, t: 'T3 Gemstone O1', s: L(lang, 'görüntü anlamlandırma', 'image understanding'), hl: true };
    const out = { x: 274, y: 52, w: 76, h: 96 };
    return svg(360, 200,
      wire(cam, gem) + wire(gem, out) +
      box(cam) + box(gem) +
      `<rect class="fp" x="274.5" y="52.5" width="76" height="96" rx="2"/>` +
      `<g class="fw-hot"><rect x="282.5" y="64.5" width="34" height="28" stroke-dasharray="3 2"/><rect x="300.5" y="102.5" width="42" height="36" stroke-dasharray="3 2"/></g>` +
      `<rect class="fhot-fill" x="282.5" y="58.5" width="18" height="6"/><rect class="fhot-fill" x="300.5" y="96.5" width="22" height="6"/>` +
      T(312, 166, L(lang, 'etiketler', 'labels'), 'fs'));
  }

  function pipeline(lang) {
    let water = 'M0 174';
    for (let x = 0; x < 360; x += 30) water += ' q15 -6 30 0';
    let water2 = 'M0 186';
    for (let x = 0; x < 360; x += 30) water2 += ' q15 -5 30 0';
    const stm = { x: 116, y: 12, w: 84, h: 30, t: 'STM32' };
    const rpi = { x: 250, y: 8, w: 100, h: 28, t: 'Raspberry Pi', hl: true };
    return svg(360, 196,
      `<path d="${water}" opacity=".55"/><path d="${water2}" opacity=".35"/>` +
      `<path d="M70 112V170M290 112V170" stroke-width="2.4"/>` +
      `<rect class="fp" x="-1" y="98.5" width="362" height="14"/>` +
      `<path d="M120 94V116M240 94V116" stroke-width="2"/>` +
      `<g class="fw-hot"><path d="M28 168L58 150L84 160M46 158l-6-10M66 154l3-10"/></g>` +
      `<rect class="fp" x="140.5" y="82.5" width="40" height="16" rx="2"/>` +
      `<path d="M145 90.5q2.5-5 5 0t5 0t5 0t5 0t5 0t5 0"/>` +
      `<path d="M276 98V70"/><rect class="fp" x="262.5" y="52.5" width="28" height="18" rx="2"/><path d="M262.5 57l-8-3v14l8-3"/>` +
      wire({ x: 140, y: 82, w: 40, h: 16 }, stm, { from: 't', to: 'b', dash: true }) +
      wire({ x: 262, y: 52, w: 28, h: 18 }, rpi, { from: 't', to: 'b', dash: true }) +
      wire(stm, rpi) +
      box(stm) + box(rpi) +
      T(160, 130, L(lang, 'titreşim', 'vibration'), 'fs') +
      T(38, 144, L(lang, 'enkaz', 'debris'), 'fs fhot'));
  }

  function mesh(lang) {
    const n = [[36, 50], [104, 28], [186, 58], [268, 30], [330, 74], [66, 128], [148, 118], [232, 136], [314, 154], [120, 182]];
    let edges = '';
    for (let i = 0; i < n.length; i++) {
      for (let j = i + 1; j < n.length; j++) {
        const d = Math.hypot(n[i][0] - n[j][0], n[i][1] - n[j][1]);
        if (d < 105) edges += `<path d="M${n[i][0]} ${n[i][1]}L${n[j][0]} ${n[j][1]}" opacity=".55"/>`;
      }
    }
    const nodes = n.map(([x, y]) => `<circle class="fp" cx="${x}" cy="${y}" r="7"/><circle class="fdot" cx="${x}" cy="${y}" r="2.2"/>`).join('');
    return svg(360, 200,
      edges + nodes +
      `<g class="fb-hl"><circle cx="186" cy="58" r="11"/></g>` +
      T(36, 74, '°C', 'fs') + T(268, 54, '%RH', 'fs') +
      T(148, 142, L(lang, 'titreşim', 'vibration'), 'fs') + T(314, 178, L(lang, 'çalışma saati', 'run hours'), 'fs') +
      T(186, 86, 'ESP', 'fs'));
  }

  function uniguide(lang) {
    const doc = (x, y) =>
      `<path class="fp" d="M${x + 0.5} ${y + 0.5}h44l14 14v62h-58z"/><path d="M${x + 44.5} ${y + 0.5}v14h14"/>`;
    const docs = { x: 36, y: 34, w: 60, h: 78 };
    const asst = { x: 130, y: 76, w: 100, h: 44, t: L(lang, 'belge asistanı', 'doc assistant'), hl: true };
    const q = { x: 256, y: 44, w: 94, h: 34 };
    const a = { x: 256, y: 108, w: 94, h: 46 };
    return svg(360, 190,
      wire(docs, asst) + wire(q, asst, { from: 'l', to: 'r' }) + wire(asst, a) +
      doc(20, 50) + doc(28, 42) + doc(36, 34) +
      `<path d="M46 60h30M46 70h36M46 80h26M46 90h34" opacity=".5"/>` +
      T(66, 146, L(lang, 'yönetmelikler', 'regulations'), 'fs') +
      box(asst) +
      `<rect class="fp" x="256.5" y="44.5" width="94" height="34" rx="9"/>` + T(303, 65, L(lang, 'Soru?', 'Question?'), 'fs') +
      `<rect class="fp" x="256.5" y="108.5" width="94" height="46" rx="9"/>` +
      `<path d="M268 124h66M268 134h56M268 144h40" opacity=".55"/>`);
  }

  // phone on the left; the shared data layer and the build pipeline on the right
  function fukampus(lang) {
    const phone =
      rect(10, 8, 96, 196, 'fp', 14) + rect(46, 14, 24, 5, '', 2.5) +
      rect(20, 28, 76, 18, '', 3) + T(58, 40.5, 'FÜKampüs', 'fxs') +
      rect(20, 52, 76, 34, '', 3) + `<path d="M28 63h40M28 71h56M28 79h32" opacity=".5"/>` +
      rect(20, 92, 36, 30, '', 3) + rect(60, 92, 36, 30, '', 3) +
      T(38, 110, L(lang, 'Ders', 'Class'), 'fxs') + T(78, 110, L(lang, 'Menü', 'Menu'), 'fxs') +
      rect(20, 128, 76, 40, '', 3) + `<path d="M28 140h52M28 148h40M28 156h48" opacity=".5"/>` +
      `<path d="M10.5 180.5H106.5" opacity=".6"/>` +
      [30, 48, 66, 84].map((x, i) => `<circle class="${i ? 'fdot' : 'fhot-fill'}" cx="${x}" cy="192" r="2.5"/>`).join('');
    const repo = { x: 150, y: 60, w: 124, h: 36, t: 'CampusRepository', s: L(lang, 'tek veri katmanı', 'single data layer'), hl: true };
    const auth = { x: 290, y: 34, w: 64, h: 34, t: 'Auth', s: L(lang, 'giriş', 'sign-in') };
    const store = { x: 290, y: 88, w: 64, h: 34, t: 'Firestore', s: L(lang, 'kurallar', 'rules') };
    const pr = { x: 124, y: 150, w: 52, h: 34, t: 'PR', s: L(lang, 'dal', 'branch') };
    const ck = { x: 186, y: 150, w: 62, h: 34, t: L(lang, 'kontrol', 'checks'), s: 'Actions' };
    const mn = { x: 258, y: 150, w: 40, h: 34, t: 'main' };
    const apk = { x: 308, y: 150, w: 46, h: 34, t: 'APK', s: L(lang, 'imzalı', 'signed'), hl: true };
    return svg(360, 210,
      phone +
      `<path d="M106.5 78H150"/>${head(150.5, 78, 'l')}` +
      T(212, 50, 'BACKEND: demo | firebase', 'fxs') +
      wire(repo, auth, { mx: 282 }) + wire(repo, store, { mx: 282 }) +
      box(repo) + box(auth) + box(store) +
      T(124, 140, L(lang, 'derleme hattı', 'build pipeline'), 'fxs', 'start') +
      wire(pr, ck) + wire(ck, mn) + wire(mn, apk) +
      box(pr) + box(ck) + box(mn) + box(apk) +
      T(239, 202, L(lang, "her PR'da Flutter, kural ve emülatör testleri", 'Flutter, rule and emulator tests on every PR'), 'fxs'));
  }

  return {
    console: console_, vtol, robot, ota, blok, boards3, process, app,
    mission, route, gkb, power, optics, bench, pcbdraft, grad, pipeline, mesh, uniguide, fukampus
  };
})();
