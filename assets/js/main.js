(() => {
  'use strict';

  const S = window.SITE;
  const FIG = window.FIG;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = v => String(v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- language ---------- */

  // Each language has its own URL: "/" is Turkish, "/en/" is English (the page's <html lang> says which).
  // Search engines index both through hreflang. Switching languages re-renders in place and swaps the URL.
  const LANG_KEY = 'kes-lang';
  const PAGE_LANG = document.documentElement.lang === 'en' ? 'en' : 'tr';
  const ROOT = PAGE_LANG === 'en' ? location.pathname.replace(/en\/(index\.html)?$/, '') : location.pathname.replace(/index\.html$/, '');
  const PATHS = { tr: ROOT, en: ROOT + 'en/' };
  const BOT = /bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit/i.test(navigator.userAgent);
  let lang = detectLang();
  if (lang !== PAGE_LANG) history.replaceState(null, '', PATHS[lang] + location.search + location.hash);

  // /en/ is always English. On "/", a saved choice wins, else Turkish if the browser lists Turkish at all.
  // Crawlers always get the page's own language so each URL is indexed with matching text.
  function detectLang() {
    if (PAGE_LANG === 'en' || BOT) return PAGE_LANG;
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) { /* storage blocked */ }
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    return prefs.some(l => /^tr\b/i.test(l)) ? 'tr' : 'en';
  }

  const t = k => (k in S.i18n[lang] ? S.i18n[lang][k] : k);
  const pick = v => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] != null ? v[lang] : v.en) : v);

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = lang === 'tr' ? 'Kerem Efe Sezek · Gömülü Sistemler' : 'Kerem Efe Sezek · Embedded Systems';
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-hint]').forEach(el => { el.textContent = t(el.dataset.hint + (fine.matches ? 'Hover' : 'Touch')); });
    $$('[data-cv]').forEach(a => { a.href = S.contact.cv[lang]; });
    $$('[data-lang-switch]').forEach(b => {
      $$('[data-l]', b).forEach(s => s.classList.toggle('on', s.dataset.l === lang));
      b.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    });
    $('#source').href = S.contact.source;
  }

  /* ---------- content ---------- */

  const pvData = {};
  const MONTHS = {
    tr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  function when(job) {
    const M = MONTHS[lang];
    const ym = s => s.split('-').map(Number);
    if (!job.from) return t('exp.present');
    const [ay, am] = ym(job.from);
    if (!job.to) return `${M[am - 1]} ${ay} – ${t('exp.present')}`;
    const [by, bm] = ym(job.to);
    if (job.to === job.from) return `${M[am - 1]} ${ay}`;
    return ay === by ? `${M[am - 1]} – ${M[bm - 1]} ${by}` : `${M[am - 1]} ${ay} – ${M[bm - 1]} ${by}`;
  }

  function renderNow() {
    $('#now').innerHTML = S.now.map(n => `<li><span class="led" aria-hidden="true"></span><span>${esc(pick(n))}</span></li>`).join('');
  }

  function renderExperience() {
    let n = 0;
    const jobs = S.experience.map(job => {
      const items = job.items.map(it => {
        if (!it.fig && !it.more) return `<li><span class="tx">${esc(pick(it.text))}</span></li>`;
        n++;
        pvData['exp:' + it.id] = { kind: 'exp', job, it, n };
        return `<li data-pv="exp:${it.id}" tabindex="0"><span class="tx">${esc(pick(it.text))}</span><span class="fno">${esc(t('exp.fig'))} 2.${n}</span></li>`;
      }).join('');
      return `
        <li class="job">
          <div class="job-when">
            <span class="when">${esc(when(job))}</span>
            ${job.kind ? `<span class="kind">${esc(t('k.' + job.kind))}</span>` : ''}
            ${job.note ? `<span class="note">${esc(pick(job.note))}</span>` : ''}
          </div>
          <div class="job-who">
            <h3>${esc(pick(job.org))}</h3>
            <p class="role">${esc(pick(job.role))}</p>
            <p class="place">${esc(pick(job.place))}</p>
          </div>
          <ul class="job-items">${items}</ul>
        </li>`;
    }).join('');
    $('#tl').innerHTML =
      `<li class="tl-now"><span class="led" aria-hidden="true"></span>${esc(t('exp.now'))}</li>` + jobs +
      `<li class="tl-end" aria-hidden="true"><svg viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 0V10M2 10H18M5 15H15M8 20H12"/></svg></li>`;
  }

  function renderProjects() {
    $('#cards').innerHTML = S.projects.map((p, i) => {
      const extra = (p.extra || []).map((x, k) => {
        pvData[`fig:${p.id}:${k}`] = { kind: 'fig', p, x, k };
        return `<li><button class="fig-chip" type="button" data-pv="fig:${p.id}:${k}">+ ${esc(pick(x.label))}</button></li>`;
      }).join('');
      return `
        <article class="card">
          <div class="card-top"><span>U3.${i + 1}</span><span>${esc(pick(p.years))}</span></div>
          <figure class="card-fig">${FIG[p.fig](lang)}${p.cap ? `<figcaption>${esc(pick(p.cap))}</figcaption>` : ''}</figure>
          <h3>${esc(pick(p.title))}</h3>
          <p class="card-role">${esc(pick(p.role))}</p>
          <p class="card-tx">${esc(pick(p.text))}</p>
          ${extra ? `<ul class="fig-chips">${extra}</ul>` : ''}
          <ul class="card-tags">${p.tags.map(x => `<li>${esc(pick(x))}</li>`).join('')}</ul>
        </article>`;
    }).join('');
  }

  function renderStack() {
    $('#stack').innerHTML = S.stack.map((layer, i) => {
      const chips = layer.items.map(it => {
        if (!it.used) return `<li><span class="chip">${esc(pick(it.label))}</span></li>`;
        pvData['skill:' + it.id] = { kind: 'skill', layer, it };
        return `<li><span class="chip" data-pv="skill:${it.id}" tabindex="0">${esc(pick(it.label))}</span></li>`;
      }).join('');
      return `
        <div class="layer">
          <div class="layer-x" aria-hidden="true"></div>
          <div class="layer-name"><small>L${i + 1}</small>${esc(pick(layer.name))}</div>
          <ul class="chips">${chips}</ul>
        </div>`;
    }).join('');
  }

  function renderExtras() {
    const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    $('#langs').innerHTML = S.languages.map(l => {
      const level = l.level === 'native'
        ? `<span class="native">${esc(t('skills.native'))}</span>`
        : `<span class="cefr" role="img" aria-label="${l.level}">${CEFR.map((c, i) => `<span class="${i <= CEFR.indexOf(l.level) ? 'on' : ''}">${c}</span>`).join('')}</span>`;
      return `<li><b>${esc(pick(l.name))}</b>${level}</li>`;
    }).join('');
    $('#certs').innerHTML = S.certificates.map(c =>
      `<li><span class="y">${c.year}</span><span><b>${esc(pick(c.name))}</b><span class="by">${esc(pick(c.by))}</span></span></li>`).join('');
  }

  function renderContact() {
    const c = S.contact;
    const pins = [
      ['MAIL', c.email, 'mailto:' + c.email],
      ['LINKEDIN', c.linkedinLabel, c.linkedin],
      ['GITHUB', c.githubLabel, c.github],
      ['CV-TR', t('contact.cvTr'), c.cv.tr],
      ['CV-EN', t('contact.cvEn'), c.cv.en]
    ];
    $('#j1').innerHTML = pins.map(([name, value, href], i) => {
      const extra = href.startsWith('http') ? ' target="_blank" rel="noopener"' : href.endsWith('.pdf') ? ' download' : '';
      return `<li><a href="${esc(href)}"${extra}>` +
        `<span class="pin-row"><span class="pad${i === 0 ? ' pad-1' : ''}" aria-hidden="true"></span><span class="pin-no">${i + 1}</span><span class="pin-n">${name}</span></span>` +
        `<span class="pin-v">${esc(value)}</span></a></li>`;
    }).join('');
  }

  function renderAll() {
    Object.keys(pvData).forEach(k => delete pvData[k]);
    renderNow();
    renderExperience();
    renderProjects();
    renderStack();
    renderExtras();
    renderContact();
  }

  /* ---------- hover window ---------- */

  const PV = {
    exp: d => `
      <div class="pv-head"><span>${esc(t('exp.fig'))} 2.${d.n}</span><span>${esc(pick(d.job.org))}</span></div>
      ${d.it.fig ? `<div class="pv-fig">${FIG[d.it.fig](lang)}</div>` : ''}
      <div class="pv-body">
        <p class="pv-title">${esc(pick(d.it.title || d.it.text))}</p>
        ${d.it.more ? `<p class="pv-text">${esc(pick(d.it.more))}</p>` : ''}
        ${d.it.tags ? `<div class="pv-tags">${d.it.tags.map(x => `<span>${esc(pick(x))}</span>`).join('')}</div>` : ''}
      </div>`,
    skill: d => `
      <div class="pv-head"><span>${esc(pick(d.layer.name))}</span><span>${esc(pick(d.it.label))}</span></div>
      <div class="pv-body">
        <p class="pv-kicker">${esc(t('skills.used'))}</p>
        <ul class="pv-list">${d.it.used.map(u => `<li>${esc(pick(u))}</li>`).join('')}</ul>
      </div>`,
    fig: d => `
      <div class="pv-head"><span>${esc(t('proj.more'))} ${d.k + 1}/${d.p.extra.length}</span><span>${esc(pick(d.p.title))}</span></div>
      <div class="pv-fig">${FIG[d.x.fig](lang)}</div>
      <div class="pv-body"><p class="pv-title">${esc(pick(d.x.label))}</p><p class="pv-text">${esc(pick(d.x.cap))}</p></div>`
  };

  const preview = (() => {
    const el = document.createElement('div');
    el.className = 'pv';
    el.innerHTML = '<div class="pv-in"><button class="pv-x" type="button">×</button><div class="pv-c"></div></div>';
    document.body.appendChild(el);
    const body = $('.pv-c', el);
    const closeBtn = $('.pv-x', el);

    const OFFSET = 18, MARGIN = 12;
    let key = null, on = false, sheet = false, owner = null, hideT = 0, raf = 0, lastType = 'mouse';
    let mx = 0, my = 0, tx = 0, ty = 0, cx = 0, cy = 0;

    const fill = k => {
      if (k === key) return;
      key = k;
      const d = pvData[k];
      body.innerHTML = d ? PV[d.kind](d) : '';
    };
    const mark = node => {
      if (owner === node) return;
      if (owner) owner.classList.remove('is-pv');
      owner = node;
      if (owner) owner.classList.add('is-pv');
    };
    // top-right of the pointer, flipped when it would leave the viewport
    const aim = () => {
      const w = el.offsetWidth, h = el.offsetHeight;
      let x = mx + OFFSET, y = my - OFFSET - h;
      if (x + w > innerWidth - MARGIN) x = mx - OFFSET - w;
      if (x < MARGIN) x = MARGIN;
      if (y < MARGIN) y = my + OFFSET;
      if (y + h > innerHeight - MARGIN) y = Math.max(MARGIN, innerHeight - MARGIN - h);
      tx = x; ty = y;
    };
    const paint = () => { el.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`; };
    const tick = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      paint();
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(tick) : 0;
    };

    function float(node) {
      clearTimeout(hideT);
      if (sheet) { sheet = false; el.classList.remove('is-sheet'); }
      fill(node.dataset.pv);
      mark(node);
      aim();
      if (!on) {
        cx = tx; cy = ty; paint();
        on = true;
        el.classList.add('is-on');
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function openSheet(node) {
      clearTimeout(hideT);
      sheet = true;
      el.classList.add('is-sheet');
      el.style.transform = '';
      fill(node.dataset.pv);
      mark(node);
      closeBtn.setAttribute('aria-label', t('pv.close'));
      on = true;
      el.classList.add('is-on');
    }

    function hide(delay = 70) {
      clearTimeout(hideT);
      hideT = setTimeout(() => {
        on = false;
        key = null;
        mark(null);
        el.classList.remove('is-on');
      }, delay);
    }

    addEventListener('pointerdown', e => { lastType = e.pointerType; }, true);

    document.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      lastType = e.pointerType;
      mx = e.clientX; my = e.clientY;
      if (sheet && on) return;
      const node = e.target.closest ? e.target.closest('[data-pv]') : null;
      if (node) float(node);
      else if (on) hide();
    }, { passive: true });

    addEventListener('scroll', () => {
      if (!on || sheet) return;
      const hit = document.elementFromPoint(mx, my);
      const node = hit && hit.closest('[data-pv]');
      if (node) float(node); else hide(0);
    }, { passive: true });

    document.addEventListener('click', e => {
      if (e.target.closest('.pv-x')) { hide(0); return; }
      if (e.target.closest('a') || (lastType !== 'touch' && fine.matches)) return;
      const node = e.target.closest('[data-pv]');
      if (node) {
        if (on && sheet && key === node.dataset.pv) hide(0); else openSheet(node);
        return;
      }
      if (on && sheet && !e.target.closest('.pv')) hide(0);
    });

    // keyboard: anchor to the focused element
    document.addEventListener('focusin', e => {
      const node = e.target.closest ? e.target.closest('[data-pv]') : null;
      if (!node || !fine.matches || !node.matches(':focus-visible')) return;
      const r = node.getBoundingClientRect();
      mx = r.left + Math.min(r.width * 0.55, 520);
      my = r.top + 4;
      on = false;
      float(node);
    });
    document.addEventListener('focusout', e => {
      if (!sheet && e.target.closest && e.target.closest('[data-pv]')) hide();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && on) hide(0);
      if ((e.key === 'Enter' || e.key === ' ') && !fine.matches) {
        const node = e.target.closest ? e.target.closest('[data-pv]') : null;
        if (node) { e.preventDefault(); openSheet(node); }
      }
    });

    return { reset() { key = null; hide(0); } };
  })();

  /* ---------- logo: "" -> krmfszk -> multi-cursor -> keremefesezek ---------- */

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const rand = (a, b) => a + Math.random() * (b - a);
  const STOP = {};

  function logo(el) {
    const CONSONANTS = 'krmfszk';
    el.innerHTML = '<span class="sr-only">Kerem Efe Sezek</span>' +
      '<span class="lg-wrap" aria-hidden="true"><span class="lg-key"></span><span class="lg"></span></span>';
    const stage = $('.lg', el);
    const keyEl = $('.lg-key', el);
    let chars = [], carets = [], clicked = -1, run = 0;

    const render = () => {
      let h = '';
      for (let i = 0; i <= chars.length; i++) {
        if (carets.includes(i)) h += `<span class="lg-caret${i === clicked ? ' lg-click' : ''}"></span>`;
        const ch = chars[i];
        if (ch) h += `<span class="lg-ch${ch.hl ? ' lg-hl' : ''}${ch.enter ? ' lg-enter' : ''}">${ch.c}</span>`;
      }
      stage.innerHTML = h;
      chars.forEach(c => (c.enter = false));
    };
    const key = html => { keyEl.innerHTML = html || ''; keyEl.classList.toggle('on', !!html); };

    async function play() {
      const id = ++run;
      const step = async ms => { await sleep(ms); if (id !== run) throw STOP; };
      key(null);

      if (reduce.matches) {
        chars = [...'keremefesezek'].map(c => ({ c }));
        carets = [];
        render();
        return;
      }

      try {
        chars = []; carets = [0]; clicked = -1;
        render();
        await step(500);

        for (const c of CONSONANTS) {
          chars.push({ c });
          carets = [chars.length];
          render();
          await step(rand(70, 150));
        }
        await step(420);

        // first click moves the caret, the rest are ctrl+click and add one each
        carets = [];
        for (let gap = 1; gap < CONSONANTS.length; gap++) {
          const click = `<kbd>${t('logo.click')}</kbd>`;
          key(gap === 1 ? click : `<kbd>ctrl</kbd> + ${click}`);
          carets.push(gap);
          clicked = gap;
          render();
          await step(rand(150, 210));
        }
        clicked = -1;
        render();
        await step(260);

        // every caret types "e" at once
        key('<kbd>e</kbd>');
        for (let k = carets.length - 1; k >= 0; k--) chars.splice(carets[k], 0, { c: 'e', hl: true, enter: true });
        carets = carets.map((p, k) => p + k + 1);
        render();
        await step(650);

        key('<kbd>esc</kbd>');
        carets = [carets[0]];
        render();
        await step(300);

        key('<kbd>end</kbd>');
        carets = [chars.length];
        render();
        await step(450);

        key(null);
        chars.forEach(c => (c.hl = false));
        $$('.lg-hl', stage).forEach(n => n.classList.remove('lg-hl'));
      } catch (e) {
        if (e !== STOP) throw e;
      }
    }

    el.addEventListener('click', e => {
      e.preventDefault();
      scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
      play();
    });
    play();
  }

  /* ---------- header: shrink on scroll, progress trace, active link, mobile menu ---------- */

  function header() {
    const hdr = $('#hdr');
    const bar = $('#hdr-bar');
    const btn = $('#menu-btn');
    const logoEl = $('#logo');
    let ticking = false;

    // compact logo scale = target size / current fluid font size (both from CSS)
    const fitLogo = () => {
      const cs = getComputedStyle(logoEl);
      const big = parseFloat(cs.fontSize);
      const small = parseFloat(cs.getPropertyValue('--logo-small'));
      if (big > 0 && small > 0) logoEl.style.setProperty('--logo-s', Math.min(1, small / big).toFixed(4));
    };
    fitLogo();
    addEventListener('resize', fitLogo);

    const update = () => {
      ticking = false;
      const y = scrollY;
      hdr.classList.toggle('is-compact', y > 24);
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max).toFixed(4) : 0})`;
    };
    addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    addEventListener('resize', update);
    update();

    const links = $$('.nav a[href^="#"]');
    const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const active = byId.get(en.target.id);
        links.forEach(a => a.classList.toggle('is-active', a === active));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', ...byId.keys()].forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });

    const setMenu = open => {
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.firstElementChild.textContent = t(open ? 'nav.close' : 'nav.menu');
    };
    setMenu(false);
    btn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
    $('#nav').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    return { relabel: () => setMenu(document.body.classList.contains('menu-open')) };
  }

  /* ---------- oscilloscope: simulated 3-axis vibration with RMS anomaly detection ---------- */

  function scope() {
    const root = $('#scope');
    const screen = $('.scope-screen', root);
    const cv = $('canvas', root);
    const ctx = cv.getContext('2d');
    const stateEl = $('[data-scope-state]', root);
    const rmsEl = $('[data-scope-rms]', root);
    const evtEl = $('[data-scope-evt]', root);

    const THR = 0.22, WIN = 18, STEP = 2.5, RATE = 48;
    const X = [], Y = [], Z = [], R = [], F = [], B = [], win = [];
    let W = 0, H = 0, N = 0, col = {};
    let s = 0, energy = 0, burst = 0, events = 0, lastHot = false, hot = null;
    let running = false, visible = false, raf = 0, last = 0, acc = 0, readT = 0;
    let lastPoke = -1e9, nextAuto = performance.now() + 2600;

    $('[data-scope-thr]', root).textContent = THR.toFixed(2);

    const noise = () => (Math.random() + Math.random() + Math.random() - 1.5) * 0.66;
    const readColors = () => {
      const cs = getComputedStyle(screen);
      ['grid', 'a', 'b', 'c', 'band', 'hot', 'rms', 'text'].forEach(k => { col[k] = cs.getPropertyValue('--sc-' + k).trim(); });
    };

    function sample() {
      s++;
      if (burst > 0) { energy = Math.max(energy, 0.62 + Math.random() * 0.22); burst--; }
      energy *= 0.94;
      const e = energy;
      const x = 0.09 * Math.sin(s * 0.61) + 0.035 * Math.sin(s * 0.137 + 1) + 0.03 * noise() + e * (0.55 * Math.sin(s * 1.9) + 0.5 * noise());
      const y = 0.07 * Math.sin(s * 0.53 + 2) + 0.03 * noise() + e * (0.45 * Math.sin(s * 2.3 + 1) + 0.5 * noise());
      const z = 0.05 * Math.sin(s * 0.47 + 4) + 0.025 * noise() + e * (0.4 * Math.sin(s * 1.4 + 2) + 0.45 * noise());
      win.push((x * x + y * y + z * z) / 3);
      if (win.length > WIN) win.shift();
      const r = Math.sqrt(win.reduce((a, b) => a + b, 0) / win.length);
      const f = r > THR;
      const start = f && !lastHot;
      if (start) events++;
      lastHot = f;
      X.push(x); Y.push(y); Z.push(z); R.push(r); F.push(f); B.push(start);
      if (X.length > N) [X, Y, Z, R, F, B].forEach(a => a.shift());
    }

    function draw() {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const top = 4, sigH = (H - top) * 0.74, mid = top + sigH / 2;
      const rTop = top + sigH + 10, rH = H - rTop - 2;
      const n = X.length, x0 = W - (n - 1) * STEP;

      ctx.lineWidth = 1;
      ctx.strokeStyle = col.grid;
      ctx.beginPath();
      for (let i = 1; i < 10; i++) { const gx = Math.round(W * i / 10) + 0.5; ctx.moveTo(gx, top); ctx.lineTo(gx, H); }
      for (let i = 0; i <= 4; i++) { const gy = Math.round(top + sigH * i / 4) + 0.5; ctx.moveTo(0, gy); ctx.lineTo(W, gy); }
      const rl = Math.round(rTop) + 0.5;
      ctx.moveTo(0, rl); ctx.lineTo(W, rl);
      ctx.stroke();

      ctx.fillStyle = col.band;
      let bs = -1;
      for (let i = 0; i <= n; i++) {
        const f = i < n && F[i];
        if (f && bs < 0) bs = i;
        if (!f && bs >= 0) { ctx.fillRect(x0 + bs * STEP, top, (i - bs) * STEP, H - top); bs = -1; }
      }
      ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.fillStyle = col.hot;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      const anom = t('scope.anom');
      for (let i = 0; i < n; i++) if (B[i]) ctx.fillText(anom, x0 + i * STEP + 5, top + 6);

      const k = sigH / 2 / 1.05;
      ctx.lineWidth = 1.3;
      ctx.lineJoin = 'round';
      [[X, col.a], [Y, col.b], [Z, col.c]].forEach(([arr, c]) => {
        ctx.strokeStyle = c;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const v = Math.max(-1.05, Math.min(1.05, arr[i]));
          const px = x0 + i * STEP, py = mid - v * k;
          if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
        }
        ctx.stroke();
      });

      const RMAX = 0.45;
      const ry = v => rTop + rH - Math.min(1, v / RMAX) * rH;
      ctx.beginPath();
      ctx.moveTo(x0, rTop + rH);
      for (let i = 0; i < n; i++) ctx.lineTo(x0 + i * STEP, ry(R[i]));
      ctx.lineTo(x0 + (n - 1) * STEP, rTop + rH);
      ctx.closePath();
      ctx.fillStyle = col.rms;
      ctx.fill();

      const ty = Math.round(ry(THR)) + 0.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = col.hot;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, ty); ctx.lineTo(W, ty); ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = '500 10px "JetBrains Mono", monospace';
      ctx.fillStyle = col.text;
      ctx.textBaseline = 'bottom';
      ctx.fillText('RMS', 6, rTop + rH - 2);
    }

    function readout(force) {
      const f = !!F[F.length - 1];
      rmsEl.textContent = (R[R.length - 1] || 0).toFixed(2);
      evtEl.textContent = events;
      if (force || f !== hot) {
        hot = f;
        stateEl.textContent = t(f ? 'scope.anom' : 'scope.normal');
        stateEl.classList.toggle('is-hot', f);
      }
    }

    function frame(now) {
      raf = 0;
      if (!running) return;
      const dt = Math.min(100, last ? now - last : 16);
      last = now;
      acc += dt;
      const per = 1000 / RATE;
      while (acc >= per) { sample(); acc -= per; }
      if (now - lastPoke > 4000 && now > nextAuto) {
        burst = 22 + Math.floor(Math.random() * 14);
        nextAuto = now + 6500 + Math.random() * 5000;
      }
      draw();
      if (now - readT > 120) { readT = now; readout(); }
      raf = requestAnimationFrame(frame);
    }

    const start = () => {
      if (running || reduce.matches || document.hidden || !visible) return;
      running = true; last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    function resize() {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      N = Math.ceil(W / STEP) + 2;
      while (X.length > N) [X, Y, Z, R, F, B].forEach(a => a.shift());
      if (reduce.matches && !X.length) {
        // one still frame with a single event in the middle
        for (let i = 0; i < N; i++) { if (i === Math.floor(N * 0.55)) burst = 26; sample(); }
      }
      while (X.length < N) sample();
      draw();
      readout(true);
    }

    let px = 0, py = 0, pt = 0;
    cv.addEventListener('pointermove', e => {
      const now = performance.now();
      if (pt) {
        const v = Math.hypot(e.clientX - px, e.clientY - py) / Math.max(1, now - pt);
        energy = Math.min(1, energy + Math.min(0.16, v * 0.06));
      }
      px = e.clientX; py = e.clientY; pt = now; lastPoke = now;
    });
    cv.addEventListener('pointerleave', () => { pt = 0; });

    readColors();
    new ResizeObserver(resize).observe(cv);
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); else stop(); }).observe(cv);
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { readColors(); draw(); });

    return { relabel: () => { readout(true); draw(); } };
  }

  /* ---------- light / dark theme ---------- */

  function theme() {
    const KEY = 'kes-theme';
    const root = document.documentElement;
    const btn = $('#theme-btn');
    const meta = $('meta[name="theme-color"]');
    const sys = matchMedia('(prefers-color-scheme: dark)');
    const current = () => root.dataset.theme || (sys.matches ? 'dark' : 'light');

    const sync = () => {
      const mode = current();
      btn.dataset.mode = mode;
      btn.setAttribute('aria-label', t(mode === 'dark' ? 'theme.toLight' : 'theme.toDark'));
      btn.title = btn.getAttribute('aria-label');
      meta.content = mode === 'dark' ? '#111312' : '#f2f0e9';
    };
    btn.addEventListener('click', () => {
      root.dataset.theme = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, root.dataset.theme); } catch (e) { /* storage blocked */ }
      sync();
    });
    sys.addEventListener('change', sync);
    sync();
    return { relabel: sync };
  }

  /* ---------- wiring ---------- */

  applyStatic();
  renderAll();
  const hdr = header();
  const thm = theme();
  const sc = scope();
  logo($('#logo'));

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage blocked */ }
    history.replaceState(null, '', PATHS[lang] + location.search + location.hash);
    preview.reset();
    applyStatic();
    renderAll();
    hdr.relabel();
    thm.relabel();
    sc.relabel();
  }
  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang-switch]')) setLang(lang === 'tr' ? 'en' : 'tr');
  });
  fine.addEventListener('change', applyStatic);

  const copy = $('#copy');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(S.contact.email);
      copy.textContent = t('contact.copied');
      setTimeout(() => { copy.textContent = t('contact.copy'); }, 1600);
    } catch (e) {
      location.href = 'mailto:' + S.contact.email;
    }
  });
})();
