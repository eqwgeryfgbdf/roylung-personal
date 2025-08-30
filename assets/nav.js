(() => {
  const links = [
    { href: 'index.html', label: '首頁' },
    { href: 'profile.html', label: '個人檔案' },
    { href: 'awards.html', label: '獎狀' },
    { href: 'gallery.html', label: '活動圖庫' },
    { href: 'timeline.html', label: '時間軸' }
  ];

  const style = document.createElement('style');
  style.textContent = `
    .site-nav { position: sticky; top: 0; z-index: 1000; backdrop-filter: saturate(150%) blur(6px); background: rgba(241,239,236,0.9); border-bottom: 1px solid rgba(3,3,3,0.08); }
    .site-nav .wrap { max-width: 1200px; margin: 0 auto; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; }
    .brand { font-weight: 700; color: #123458; letter-spacing: .5px; text-decoration: none; }
    .nav-links { display: flex; gap: 12px; flex-wrap: wrap; }
    .nav-links a { text-decoration: none; color: #123458; font-weight: 600; padding: 8px 12px; border-radius: 18px; transition: background .15s ease, color .15s ease; }
    .nav-links a:hover { background: rgba(18,52,88,.08); }
    .nav-links a.active { background: #123458; color: #F1EFEC; }
    @media (max-width:700px){ .nav-links { gap: 6px; } .nav-links a{ padding:6px 10px; } }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html">Roy Lung</a>
      <div class="nav-links">
        ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </div>`;

  document.addEventListener('DOMContentLoaded', () => {
    document.body.prepend(nav);
    const current = (location.pathname.split('/').pop() || 'index.html');
    nav.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === current) a.classList.add('active');
    });
  });
})();

