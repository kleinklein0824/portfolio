/* =========================================================
 * 页面逻辑：数据绑定、项目渲染、导航交互、滚动渐显
 * ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var setText = function (id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  /* ---------- 主题：读取 localStorage 初始化 + 切换 ---------- */
  var THEME_KEY = 'theme';
  var themeToggle = document.getElementById('theme-toggle');

  var applyTheme = function (theme) {
    var dark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
    }
  };

  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* 隐私模式下忽略 */ }
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 隐私模式下忽略 */ }
    });
  }

  /* ---------- 个人信息绑定 ---------- */
  document.querySelectorAll('.js-name').forEach(function (el) {
    el.textContent = profile.name;
  });
  setText('profile-year', profile.year);
  setText('profile-role', profile.role);
  setText('profile-tagline', profile.tagline);
  setText('profile-location', profile.location);
  setText('contact-wechat', profile.wechat);

  var mail = document.getElementById('contact-mail');
  if (mail) {
    mail.href = 'mailto:' + profile.email;
    mail.textContent = profile.email + ' ↗';
  }
  var github = document.getElementById('contact-github');
  if (github) github.href = profile.github;
  var homepage = document.getElementById('contact-homepage');
  if (homepage) homepage.href = profile.homepage;

  /* ---------- 技能列表 ---------- */
  var skillsBox = document.getElementById('skills-list');
  if (skillsBox) {
    skillsBox.innerHTML = profile.skills.map(function (s, i) {
      return '<li>' +
        '<span class="skill-no">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="skill-name">' + s.name + '</span>' +
        '<span class="skill-detail">' + s.detail + '</span>' +
        '</li>';
    }).join('');
  }

  /* ---------- 项目渲染：三种版式循环 a → b → c ---------- */
  var layouts = ['a', 'b', 'c'];
  var worksBox = document.getElementById('works-list');
  if (worksBox) {
    worksBox.innerHTML = projects.map(function (p, i) {
      var layout = layouts[i % layouts.length];
      return '' +
        '<article class="work work--' + layout + ' reveal">' +
          '<div class="work-rule">' +
            '<span class="work-no-sm">№ ' + p.no + '</span>' +
          '</div>' +
          '<figure class="work-figure">' +
            '<img src="' + p.image + '" alt="' + p.alt + '" loading="lazy" decoding="async">' +
          '</figure>' +
          '<span class="work-no" aria-hidden="true">' + p.no + '</span>' +
          '<h3 class="work-title">' +
            '<span class="work-tag">' + p.category + '</span>' + p.title +
            '<span class="work-title-en">' + p.titleEn + '</span>' +
            '<span class="work-lead">' + p.summary + '</span>' +
          '</h3>' +
          '<p class="work-desc">' + p.desc + '</p>' +
          '<div class="work-meta">' +
            '<ul class="work-stack">' +
              p.stack.map(function (t) { return '<li>' + t + '</li>'; }).join('') +
            '</ul>' +
            '<p class="work-date">完成时间 — ' + p.date + '</p>' +
          '</div>' +
        '</article>';
    }).join('');
    setText('work-count', String(projects.length));
  }

  /* ---------- 滚动渐显 ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 导航：滚动态 + 汉堡菜单 + 区域高亮 ---------- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('nav-burger');
  var linksBox = document.getElementById('nav-links');

  var onScroll = function () {
    nav.classList.toggle('nav--scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  });
  linksBox.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  var navLinks = linksBox.querySelectorAll('a[href^="#"]');
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 页脚年份 ---------- */
  setText('year', String(new Date().getFullYear()));
})();
