/*!
 * Designia Consent – cookie lišta s Google Consent Mode v2
 * Nasazení přes GTM šablonu „Designia Consent“ (Consent Initialization).
 */
(function (window, document) {
  'use strict';

  // Guard against the script being injected twice.
  if (window.DesigniaConsent) return;

  var STYLES = ":host{all:initial}.dsg-root{--dsg-bg: #ffffff;--dsg-text: #1f2937;--dsg-btn-bg: #111827;--dsg-btn-text: #ffffff;--dsg-btn2-bg: transparent;--dsg-btn2-text: #111827;--dsg-focus: #2563eb;--dsg-muted: rgba(127, 127, 127, .25);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:15px;line-height:1.5;color:var(--dsg-text);-webkit-font-smoothing:antialiased;text-align:left}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}[hidden]{display:none!important}.dsg-panel{background:var(--dsg-bg);color:var(--dsg-text);box-shadow:0 8px 32px #0000002e;z-index:2147483000}.dsg-title{font-size:18px;font-weight:700;line-height:1.3;margin-bottom:8px}.dsg-desc{font-size:14px}.dsg-desc a,.dsg-link{color:inherit;text-decoration:underline;text-underline-offset:2px}.dsg-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.dsg-btn{appearance:none;-webkit-appearance:none;flex:1 1 0;min-width:140px;min-height:44px;padding:10px 16px;border:2px solid var(--dsg-btn-bg);border-radius:6px;background:var(--dsg-btn-bg);color:var(--dsg-btn-text);font:inherit;font-size:15px;font-weight:600;line-height:1.2;text-align:center;cursor:pointer}.dsg-btn:hover{filter:brightness(1.12)}.dsg-btn--secondary{background:var(--dsg-btn2-bg);color:var(--dsg-btn2-text);border-color:currentColor}.dsg-btn:focus-visible,.dsg-close:focus-visible,.dsg-switch:focus-visible,.dsg-icon:focus-visible,.dsg-link:focus-visible,.dsg-desc a:focus-visible,.dsg-panel:focus-visible{outline:3px solid var(--dsg-focus);outline-offset:2px}.dsg-panel:focus:not(:focus-visible){outline:none}.dsg-banner{position:fixed;padding:20px 24px}.dsg-root[data-pos=bar] .dsg-banner{left:0;right:0;bottom:0;max-height:80vh;overflow-y:auto}.dsg-root[data-pos=bar] .dsg-banner-inner{display:flex;align-items:center;gap:24px;max-width:1200px;margin:0 auto}.dsg-root[data-pos=bar] .dsg-banner-text{flex:1 1 auto}.dsg-root[data-pos=bar] .dsg-actions{flex:0 0 auto;margin-top:0;flex-wrap:nowrap}.dsg-root[data-pos=corner] .dsg-banner{right:16px;bottom:16px;width:400px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);overflow-y:auto;border-radius:10px}.dsg-root[data-pos=modal] .dsg-banner{top:50%;left:50%;transform:translate(-50%,-50%);width:520px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);overflow-y:auto;border-radius:10px}.dsg-backdrop{position:fixed;inset:0;background:#00000080;z-index:2147482999}.dsg-prefs{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);display:flex;flex-direction:column;border-radius:10px;z-index:2147483001}.dsg-prefs-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px 12px}.dsg-prefs-head .dsg-title{margin-bottom:0}.dsg-close{appearance:none;-webkit-appearance:none;flex:0 0 auto;width:40px;height:40px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;font-size:26px;line-height:1;cursor:pointer}.dsg-close:hover{background:var(--dsg-muted)}.dsg-prefs-body{overflow-y:auto;padding:0 24px}.dsg-cat{padding:14px 0;border-top:1px solid var(--dsg-muted)}.dsg-cat-head{display:flex;align-items:center;justify-content:space-between;gap:16px}.dsg-cat-name{font-size:15px;font-weight:700}.dsg-cat-desc{margin-top:4px;font-size:13px;opacity:.85}.dsg-always{font-size:13px;font-weight:600;white-space:nowrap;opacity:.8}.dsg-prefs .dsg-actions{padding:16px 24px 20px;margin-top:0;border-top:1px solid var(--dsg-muted)}.dsg-switch{appearance:none;-webkit-appearance:none;position:relative;flex:0 0 auto;width:48px;height:28px;border:2px solid currentColor;border-radius:999px;background:transparent;color:inherit;cursor:pointer}.dsg-switch:after{content:\"\";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:currentColor;transition:transform .15s ease}.dsg-switch[aria-checked=true]{background:var(--dsg-btn-bg);border-color:var(--dsg-btn-bg)}.dsg-switch[aria-checked=true]:after{background:var(--dsg-btn-text);transform:translate(20px)}.dsg-switch[aria-disabled=true]{cursor:not-allowed;opacity:.6}.dsg-icon{appearance:none;-webkit-appearance:none;position:fixed;left:16px;bottom:16px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:0;border-radius:50%;background:var(--dsg-btn-bg);color:var(--dsg-btn-text);box-shadow:0 4px 14px #00000040;cursor:pointer;z-index:2147482998}.dsg-icon svg{width:24px;height:24px;display:block}@media(max-width:760px){.dsg-root[data-pos=bar] .dsg-banner-inner{display:block}.dsg-root[data-pos=bar] .dsg-actions{margin-top:16px}.dsg-actions,.dsg-root[data-pos=bar] .dsg-actions{flex-direction:column;flex-wrap:nowrap}.dsg-btn{flex:0 0 auto;width:100%;min-width:0}.dsg-banner{padding:16px}.dsg-root[data-pos=corner] .dsg-banner{right:8px;left:8px;bottom:8px;width:auto;max-width:none}}@media(prefers-reduced-motion:reduce){.dsg-switch:after{transition:none}}";
  var SCRIPT_VERSION = "1.1.0";

  var DEFAULTS = {
    version: '1',
    expiryDays: 180,
    lang: 'auto',
    position: 'bar',
    showIcon: true,
    highlightAccept: false,
    cookieName: 'dsg_consent',
    policyUrl: { cs: '', en: '' },
    texts: { cs: {}, en: {} },
    colors: {}
  };

  var I18N = {
    cs: {
      title: 'Používáme cookies',
      description: 'Nezbytné cookies zajišťují, aby web fungoval. S vaším souhlasem použijeme i další cookies – k zapamatování nastavení, měření návštěvnosti a marketingu. Souhlas můžete kdykoli změnit nebo odvolat.',
      acceptAll: 'Přijmout vše',
      rejectAll: 'Odmítnout vše',
      settings: 'Nastavení',
      save: 'Uložit výběr',
      policy: 'Zásady cookies',
      prefsTitle: 'Nastavení cookies',
      close: 'Zavřít',
      always: 'Vždy aktivní',
      iconLabel: 'Nastavení cookies',
      cat: {
        necessary: ['Nezbytné', 'Zajišťují základní funkce a bezpečnost webu. Nelze je vypnout.'],
        preferences: ['Preferenční', 'Pamatují si vaše volby (např. jazyk) a umožňují přizpůsobit obsah webu.'],
        analytics: ['Analytické', 'Pomáhají nám pochopit, jak návštěvníci web používají, abychom ho mohli zlepšovat.'],
        marketing: ['Marketingové', 'Slouží k zobrazování relevantní reklamy a měření její účinnosti, i na jiných webech.']
      }
    },
    en: {
      title: 'We use cookies',
      description: 'Necessary cookies keep this website working. With your consent we also use other cookies to remember your settings, measure traffic and for marketing. You can change or withdraw your consent at any time.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      settings: 'Settings',
      save: 'Save selection',
      policy: 'Cookie policy',
      prefsTitle: 'Cookie settings',
      close: 'Close',
      always: 'Always active',
      iconLabel: 'Cookie settings',
      cat: {
        necessary: ['Necessary', 'Provide basic functions and security of the website. They cannot be switched off.'],
        preferences: ['Preferences', 'Remember your choices (e.g. language) and allow us to personalise the website.'],
        analytics: ['Analytics', 'Help us understand how visitors use the website so we can improve it.'],
        marketing: ['Marketing', 'Used to show relevant ads and measure their effectiveness, including on other websites.']
      }
    }
  };

  // Cookies removed when the matching category is withdrawn.
  var CLEANUP = {
    analytics: [/^_ga($|_)/, /^_gid$/, /^_gat/],
    marketing: [/^_gcl_/, /^_fbp$/, /^_fbc$/]
  };

  var CATEGORIES = ['preferences', 'analytics', 'marketing'];

  var ICON_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5zm-3.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm3-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>';

  // ---------- Config ----------

  function merge(target, source) {
    if (!source || typeof source !== 'object') return target;
    for (var key in source) {
      if (!Object.prototype.hasOwnProperty.call(source, key)) continue;
      var value = source[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        target[key] = merge(target[key] && typeof target[key] === 'object' ? target[key] : {}, value);
      } else if (value !== undefined && value !== null && value !== '') {
        target[key] = value;
      }
    }
    return target;
  }

  var config = merge(JSON.parse(JSON.stringify(DEFAULTS)), window.__dsgConsentConfig);
  config.version = String(config.version);
  config.expiryDays = Math.max(1, parseInt(config.expiryDays, 10) || DEFAULTS.expiryDays);
  if (['bar', 'modal', 'corner'].indexOf(config.position) === -1) config.position = 'bar';
  config.showIcon = config.showIcon !== false && config.showIcon !== 'false';
  // Off by default: accept and reject look the same (safest reading of EDPB guidance).
  config.highlightAccept = config.highlightAccept === true || config.highlightAccept === 'true';

  function detectLang() {
    if (config.lang === 'cs' || config.lang === 'en') return config.lang;
    var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    return /^(cs|sk)/.test(htmlLang) ? 'cs' : 'en';
  }

  var lang = detectLang();
  var t = merge(JSON.parse(JSON.stringify(I18N[lang])), config.texts[lang]);

  // ---------- Helpers ----------

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function safeUrl(url) {
    url = String(url || '').trim();
    return /^(https?:\/\/|\/)/i.test(url) ? url : '';
  }

  function safeColor(value) {
    if (!value) return '';
    value = String(value).trim();
    var css = window.CSS;
    return css && css.supports && css.supports('color', value) ? value : '';
  }

  // ---------- Cookie storage ----------

  // Candidate domains from the broadest (example.cz) to the full host (www.example.cz).
  function domainCandidates() {
    var host = location.hostname;
    if (!host || host === 'localhost' || /^[\d.]+$/.test(host) || host.indexOf(':') !== -1) return [''];
    var parts = host.split('.');
    var list = [];
    for (var i = parts.length - 2; i >= 0; i--) list.push(parts.slice(i).join('.'));
    return list;
  }

  function readCookie(name) {
    var pairs = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0; i < pairs.length; i++) {
      var idx = pairs[i].indexOf('=');
      if (pairs[i].slice(0, idx) === name) return pairs[i].slice(idx + 1);
    }
    return null;
  }

  function writeCookie(name, value, maxAge, domain) {
    var cookie = name + '=' + value + '; path=/; max-age=' + maxAge + '; SameSite=Lax';
    if (domain) cookie += '; domain=' + domain;
    if (location.protocol === 'https:') cookie += '; Secure';
    document.cookie = cookie;
  }

  // Writes on the broadest domain the browser accepts, so www and non-www share one choice.
  function setCookie(name, value, maxAge) {
    var domains = domainCandidates();
    for (var i = 0; i < domains.length; i++) {
      writeCookie(name, value, maxAge, domains[i]);
      if (readCookie(name) === value) return true;
    }
    return false;
  }

  function deleteCookie(name) {
    var domains = domainCandidates();
    for (var i = 0; i < domains.length; i++) writeCookie(name, '', 0, domains[i]);
    writeCookie(name, '', 0, '');
  }

  // Returns {preferences, analytics, marketing, timestamp} or null when missing, broken,
  // expired or saved under a different settings version.
  function loadConsent() {
    var raw = readCookie(config.cookieName);
    if (!raw) return null;
    try {
      var data = JSON.parse(decodeURIComponent(raw));
      if (!data || typeof data.c !== 'object' || String(data.v) !== config.version) return null;
      if (typeof data.t !== 'number' || Date.now() - data.t > config.expiryDays * 864e5) return null;
      return {
        preferences: data.c.p === 1,
        analytics: data.c.a === 1,
        marketing: data.c.m === 1,
        timestamp: data.t
      };
    } catch (e) {
      return null;
    }
  }

  function saveConsent(state) {
    var payload = {
      v: config.version,
      t: Date.now(),
      c: { p: state.preferences ? 1 : 0, a: state.analytics ? 1 : 0, m: state.marketing ? 1 : 0 }
    };
    setCookie(config.cookieName, encodeURIComponent(JSON.stringify(payload)), config.expiryDays * 86400);
    return payload.t;
  }

  function cleanupCookies(previous, next) {
    var names = (document.cookie ? document.cookie.split('; ') : []).map(function (pair) {
      return pair.split('=')[0];
    });
    ['analytics', 'marketing'].forEach(function (cat) {
      if (!previous || !previous[cat] || next[cat]) return;
      names.forEach(function (name) {
        if (CLEANUP[cat].some(function (re) { return re.test(name); })) deleteCookie(name);
      });
    });
  }

  // ---------- Consent Mode ----------

  function toSignals(state) {
    var g = function (on) { return on ? 'granted' : 'denied'; };
    return {
      ad_storage: g(state.marketing),
      ad_user_data: g(state.marketing),
      ad_personalization: g(state.marketing),
      analytics_storage: g(state.analytics),
      functionality_storage: g(state.preferences),
      personalization_storage: g(state.preferences),
      security_storage: 'granted'
    };
  }

  function dataLayer() {
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  }

  function gtag() {
    dataLayer().push(arguments);
  }

  // Prefer the GTM template callback (updateConsentState); gtag is only a fallback,
  // Google recommends against gtag('consent','update') for templates.
  function sendUpdate(signals) {
    if (typeof window.__dsgConsentUpdate === 'function') {
      try {
        window.__dsgConsentUpdate(signals);
        return;
      } catch (e) {
        /* fall through to gtag */
      }
    }
    gtag('consent', 'update', signals);
  }

  var current = loadConsent();

  function commit(state, method) {
    var previous = current;
    state = {
      preferences: !!state.preferences,
      analytics: !!state.analytics,
      marketing: !!state.marketing
    };
    // Order matters: consent update first, so tags fired by the event see the new state.
    sendUpdate(toSignals(state));
    state.timestamp = saveConsent(state);
    cleanupCookies(previous, state);
    current = state;
    dataLayer().push({
      event: 'cookie_consent_update',
      consent: {
        necessary: true,
        preferences: state.preferences,
        analytics: state.analytics,
        marketing: state.marketing
      },
      consent_method: method,
      consent_version: config.version
    });
    closeAll();
    updateIcon();
  }

  // ---------- UI ----------

  var host, root, banner, backdrop, prefs, icon, lastFocus;

  function button(action, label, secondary) {
    return '<button type="button" class="dsg-btn' + (secondary ? ' dsg-btn--secondary' : '') +
      '" data-action="' + action + '">' + esc(label) + '</button>';
  }

  function categoryRow(key, locked) {
    var labels = t.cat[key];
    var id = 'dsg-cat-' + key;
    var control = locked
      ? '<span class="dsg-always">' + esc(t.always) + '</span>'
      : '<button type="button" class="dsg-switch" role="switch" aria-checked="false" data-cat="' + key +
        '" aria-labelledby="' + id + '" aria-describedby="' + id + '-d"></button>';
    return '<div class="dsg-cat"><div class="dsg-cat-head"><span class="dsg-cat-name" id="' + id + '">' +
      esc(labels[0]) + '</span>' + control + '</div><p class="dsg-cat-desc" id="' + id + '-d">' +
      esc(labels[1]) + '</p></div>';
  }

  function render() {
    var policy = safeUrl(config.policyUrl[lang]);
    var policyLink = policy
      ? ' <a href="' + esc(policy) + '" target="_blank" rel="noopener">' + esc(t.policy) + '</a>'
      : '';
    var isModal = config.position === 'modal';

    var colors = config.colors || {};
    var vars = [
      ['--dsg-bg', colors.background],
      ['--dsg-text', colors.text],
      ['--dsg-btn-bg', colors.buttonBackground],
      ['--dsg-btn-text', colors.buttonText],
      ['--dsg-btn2-bg', colors.secondaryBackground],
      ['--dsg-btn2-text', colors.secondaryText]
    ].map(function (pair) {
      var c = safeColor(pair[1]);
      return c ? pair[0] + ':' + c + ';' : '';
    }).join('');

    host = document.createElement('designia-consent');
    host.setAttribute('style', 'all:initial !important;');
    var shadow = host.attachShadow({ mode: 'open' });

    shadow.innerHTML =
      '<style>' + STYLES + '</style>' +
      '<div class="dsg-root" data-pos="' + config.position + '" lang="' + lang + '" style="' + vars + '">' +
        '<div class="dsg-backdrop" hidden></div>' +
        '<section class="dsg-panel dsg-banner" tabindex="-1" hidden ' +
          (isModal ? 'role="dialog" aria-modal="true"' : 'role="region"') +
          ' aria-labelledby="dsg-title" aria-describedby="dsg-desc">' +
          '<div class="dsg-banner-inner"><div class="dsg-banner-text">' +
            '<h2 class="dsg-title" id="dsg-title">' + esc(t.title) + '</h2>' +
            '<p class="dsg-desc" id="dsg-desc">' + esc(t.description) + policyLink + '</p>' +
          '</div><div class="dsg-actions">' +
            button('accept', t.acceptAll) + button('reject', t.rejectAll, config.highlightAccept) + button('settings', t.settings, true) +
          '</div></div>' +
        '</section>' +
        '<div class="dsg-panel dsg-prefs" role="dialog" aria-modal="true" aria-labelledby="dsg-prefs-title" tabindex="-1" hidden>' +
          '<div class="dsg-prefs-head"><h2 class="dsg-title" id="dsg-prefs-title">' + esc(t.prefsTitle) + '</h2>' +
            '<button type="button" class="dsg-close" data-action="close" aria-label="' + esc(t.close) + '">&times;</button></div>' +
          '<div class="dsg-prefs-body">' +
            categoryRow('necessary', true) + categoryRow('preferences') + categoryRow('analytics') + categoryRow('marketing') +
            (policy ? '<p class="dsg-cat-desc" style="padding:4px 0 14px"><a class="dsg-link" href="' + esc(policy) +
              '" target="_blank" rel="noopener">' + esc(t.policy) + '</a></p>' : '') +
          '</div>' +
          '<div class="dsg-actions">' +
            button('reject', t.rejectAll, config.highlightAccept) + button('save', t.save, true) + button('accept', t.acceptAll) +
          '</div>' +
        '</div>' +
        '<button type="button" class="dsg-icon" data-action="open" aria-label="' + esc(t.iconLabel) +
          '" title="' + esc(t.iconLabel) + '" hidden>' + ICON_SVG + '</button>' +
      '</div>';

    root = shadow.querySelector('.dsg-root');
    banner = shadow.querySelector('.dsg-banner');
    backdrop = shadow.querySelector('.dsg-backdrop');
    prefs = shadow.querySelector('.dsg-prefs');
    icon = shadow.querySelector('.dsg-icon');

    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKeydown);

    // First in the body so keyboard users reach it first.
    document.body.insertBefore(host, document.body.firstChild);
  }

  function onClick(e) {
    var target = e.target.closest('[data-action], [data-cat]');
    if (!target) return;
    if (target.hasAttribute('data-cat')) {
      target.setAttribute('aria-checked', target.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
      return;
    }
    switch (target.getAttribute('data-action')) {
      case 'accept': commit({ preferences: true, analytics: true, marketing: true }, 'accept_all'); break;
      case 'reject': commit({}, 'reject_all'); break;
      case 'save': commit(readSwitches(), 'custom'); break;
      case 'settings': openPrefs(); break;
      case 'open': openPrefs(); break;
      case 'close': closePrefs(); break;
    }
  }

  function readSwitches() {
    var state = {};
    CATEGORIES.forEach(function (cat) {
      state[cat] = prefs.querySelector('[data-cat="' + cat + '"]').getAttribute('aria-checked') === 'true';
    });
    return state;
  }

  function focusables(container) {
    return Array.prototype.filter.call(
      container.querySelectorAll('button, a[href]'),
      function (el) { return !el.disabled && el.offsetParent !== null; }
    );
  }

  function activeDialog() {
    if (!prefs.hidden) return prefs;
    if (!banner.hidden && config.position === 'modal') return banner;
    return null;
  }

  function onKeydown(e) {
    if (e.key === 'Escape' && !prefs.hidden) {
      e.preventDefault();
      closePrefs();
      return;
    }
    if (e.key !== 'Tab') return;
    var dialog = activeDialog();
    if (!dialog) return;
    var items = focusables(dialog);
    if (!items.length) return;
    var active = host.shadowRoot.activeElement;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && (active === first || active === dialog)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function showBanner() {
    banner.hidden = false;
    backdrop.hidden = config.position !== 'modal';
    icon.hidden = true;
    if (config.position === 'modal') banner.focus();
  }

  function openPrefs() {
    var active = host.shadowRoot.activeElement || document.activeElement;
    if (!lastFocus || prefs.hidden) lastFocus = active;
    var state = current || {};
    CATEGORIES.forEach(function (cat) {
      prefs.querySelector('[data-cat="' + cat + '"]').setAttribute('aria-checked', state[cat] ? 'true' : 'false');
    });
    banner.hidden = true;
    icon.hidden = true;
    backdrop.hidden = false;
    prefs.hidden = false;
    prefs.focus();
  }

  function closePrefs() {
    prefs.hidden = true;
    backdrop.hidden = true;
    if (!current) {
      // No choice yet – back to the banner, it must stay until the visitor decides.
      showBanner();
      var settingsBtn = banner.querySelector('[data-action="settings"]');
      if (settingsBtn) settingsBtn.focus();
    } else {
      updateIcon();
      restoreFocus();
    }
  }

  function closeAll() {
    banner.hidden = true;
    prefs.hidden = true;
    backdrop.hidden = true;
    restoreFocus();
  }

  function restoreFocus() {
    var el = lastFocus;
    lastFocus = null;
    if (el && el !== document.body && typeof el.focus === 'function' && el.isConnected) {
      try { el.focus(); } catch (e) { /* ignore */ }
    }
  }

  // Footer links: <a href="#cookie-settings"> or any element with data-dsg-consent-open.
  var SETTINGS_LINK = '[data-dsg-consent-open], a[href$="#cookie-settings"]';

  // The floating icon is only a fallback: a page with its own settings link doesn't get it.
  // While the page is still parsing, the footer may not exist yet – decide after DOMContentLoaded.
  function updateIcon() {
    var parsed = document.readyState !== 'loading';
    var hasLink = !!document.querySelector(SETTINGS_LINK);
    icon.hidden = !(config.showIcon && parsed && !hasLink && current && banner.hidden && prefs.hidden);
  }

  function onDocumentClick(e) {
    var el = e.target && e.target.closest && e.target.closest(SETTINGS_LINK);
    if (!el) return;
    e.preventDefault();
    api.open();
  }

  // ---------- Public API ----------

  var api = {
    version: SCRIPT_VERSION,
    open: function () {
      if (!root) return;
      lastFocus = document.activeElement;
      openPrefs();
    },
    get: function () {
      return current
        ? { necessary: true, preferences: current.preferences, analytics: current.analytics, marketing: current.marketing, timestamp: current.timestamp, version: config.version }
        : null;
    },
    reset: function () {
      deleteCookie(config.cookieName);
      var previous = current;
      current = null;
      sendUpdate(toSignals({}));
      cleanupCookies(previous, {});
      if (root) {
        prefs.hidden = true;
        showBanner();
      }
    }
  };

  window.DesigniaConsent = api;

  function init() {
    render();
    document.addEventListener('click', onDocumentClick);
    if (current) {
      updateIcon();
    } else {
      showBanner();
    }
    // The script usually runs before the footer is parsed – re-check once the page is complete.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateIcon);
    }
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})(window, document);
