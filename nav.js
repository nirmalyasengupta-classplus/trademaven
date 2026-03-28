/* nav.js — Trade Maven shared navigation (FIXED VERSION) */

(function(){

const NAV_CSS = `
  :root { --g:#00e5a0; --nav-h:68px; }

  #tm-nav {
    position:fixed; top:0; left:0; right:0;
    height:var(--nav-h); z-index:99999;
    display:flex; align-items:center; padding:0 5%;
    background:rgba(0,0,0,0.92);
    border-bottom:1px solid rgba(0,229,160,0.1);
    backdrop-filter:blur(20px);
    font-family:'DM Sans',sans-serif;
  }

  .tm-nav-logo {
    display:flex; align-items:center; gap:10px;
    text-decoration:none; flex-shrink:0;
  }

  .tm-nav-logo img {
    width:34px; height:34px;
    object-fit:contain; border-radius:7px;
  }

  .tm-nav-logo-text {
    font-family:'Bebas Neue',sans-serif;
    font-size:21px; letter-spacing:2px; color:#fff;
  }

  .tm-nav-logo-text span { color:var(--g); }

  .tm-nav-links {
    display:flex; align-items:center; gap:4px;
    margin:0 auto; list-style:none; padding:0;
  }

  .tm-nav-links a {
    font-family:'Rajdhani',sans-serif;
    font-size:13px; font-weight:600;
    letter-spacing:.5px;
    color:rgba(255,255,255,0.55);
    text-decoration:none;
    padding:6px 14px; border-radius:8px;
    transition:color .2s, background .2s;
  }

  .tm-nav-links a:hover,
  .tm-nav-links a.tm-active {
    color:#fff;
    background:rgba(255,255,255,0.06);
  }

  .tm-nav-links a.tm-active {
    color:var(--g);
  }

  .tm-nav-cta {
    display:inline-flex; align-items:center; gap:7px;
    background:var(--g); color:#000;
    padding:9px 22px; border-radius:8px;
    font-family:'Rajdhani',sans-serif;
    font-size:13px; font-weight:700;
    text-decoration:none;
    transition:all .2s;
  }

  .tm-nav-cta:hover {
    background:#00ffb3;
    transform:translateY(-1px);
    box-shadow:0 4px 20px rgba(0,229,160,0.4);
  }

  body { padding-top:var(--nav-h) !important; }
`;

/* Detect current page */
const path = window.location.pathname;

const isHome = path === "/" || path === "/index.html";
const isMentor = path.includes("meet-the-mentor");
const isCommunity = path.includes("community-contact");

function active(condition){
  return condition ? ' class="tm-active"' : '';
}

/* NAV HTML */
const NAV_HTML = `
<nav id="tm-nav">
  <a class="tm-nav-logo" href="/">
    <img src="https://play-lh.googleusercontent.com/hvznbb19QDAuKVHKBY8-nBu-4zSexAQZDywYElnUhqJMkyfUQ2Dv6kcj0iWf6rI53gwKmfbzrxbp2jS73f5SVg=w480-h960-rw" alt="Trade Maven"/>
    <span class="tm-nav-logo-text">TRADE <span>MAVEN</span></span>
  </a>

  <ul class="tm-nav-links">
    <li><a href="/"${active(isHome)}>Home</a></li>
    <li><a href="/meet-the-mentor"${active(isMentor)}>Meet the Mentor</a></li>
    <li><a href="/community-contact"${active(isCommunity)}>Community & Contact</a></li>
  </ul>

  <a href="https://www.itrademaven.com/courses" target="_blank" class="tm-nav-cta">
    Explore Courses →
  </a>
</nav>
`;

/* Inject styles */
const style = document.createElement("style");
style.textContent = NAV_CSS;
document.head.appendChild(style);

/* Inject nav */
document.body.insertAdjacentHTML("afterbegin", NAV_HTML);

})();