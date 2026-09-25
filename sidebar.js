const target = document.getElementById("sidebar-target");
if (target) {
  const isSubPage = window.location.pathname.includes("/pages/");
  const rootPath = isSubPage ? "../" : "";
  const pagePath = isSubPage ? "" : "pages/";
  const homeHref = isSubPage ? "../index.html" : "index.html";
  const pageHref = (page) => `${pagePath}${page}`;

  const sidebarHTML = `
    <div class="side_nav" id="side-nav" aria-label="Primary">
      <div class="nav_controls">
        <button class="theme_toggle" type="button" id="theme-toggle">Theme</button>
      </div>
      <div class="profile">
        <div class="profile-image" style="background-image: url('${rootPath}img/IMG_1277.JPG')"></div>
        <div>
          <div class="name">Hossm.dev</div>
        </div>
      </div>
      <ul class="nav_items">
        <li><a href="${homeHref}">Home</a></li>
        <li><a href="${pageHref("about.html")}">About</a></li>
        <li><a href="${pageHref("projects.html")}">Projects</a></li>
        <li><a href="${pageHref("get-know-me.html")}">Get Know Me</a></li>
        <li><a href="${pageHref("contacts.html")}">Contacts</a></li>
        <li><a href="${pageHref("hire-me.html")}">Hire Me</a></li>
      </ul>
    </div>
  `;

  target.innerHTML = sidebarHTML;

  const normalize = (path) => path.split("/").pop() || "index.html";
  const currentPath = normalize(window.location.pathname);
  const links = target.querySelectorAll("a");
  links.forEach((link) => {
    if (normalize(link.getAttribute("href")) === currentPath) {
      link.classList.add("active-nav");
      link.setAttribute("aria-current", "page");
    }
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch {}
    });
  }
}
