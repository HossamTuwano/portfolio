const target = document.getElementById("sidebar-target");
if (target) {

  // Detect if we are in the root or a subfolder
  const isSubPage = window.location.pathname.includes("/pages/");
  const rootPath = isSubPage ? "../" : "";
  const pagePath = isSubPage ? "" : "pages/";
  const homeHref = isSubPage ? "../index.html" : "index.html";
  const pageHref = (page) => `${pagePath}${page}`;

  const sidebarHTML = `
    <div class="side_nav" id="side-nav" aria-label="Primary">
      <div class="navigation">
        <div class="nav_controls">
          <button class="icon_button cross_icon" type="button" aria-label="Collapse navigation" aria-controls="side-nav">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div class="profile">
          <div class="profile-image" style="background-image: url('${rootPath}img/IMG_1277.JPG')"></div>
        </div>
        <div class="nav_items_container">
          <ul class="nav_items">
            <li><a href="${homeHref}">Home</a></li>
            <li><a href="${pageHref("about.html")}">About Me</a></li>
            <li><a href="${pageHref("projects.html")}">Projects</a></li>
            <li><a href="${pageHref("get-know-me.html")}">Get Know Me</a></li>
            <li><a href="${pageHref("contacts.html")}">Contacts</a></li>
            <li><a href="${pageHref("hire-me.html")}">Hire Me</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mini_sideNav hide" aria-label="Collapsed navigation" aria-hidden="true">
      <button class="icon_button collapse_icon" type="button" aria-label="Expand navigation" aria-controls="side-nav">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <div class="icons">
        <a href="${homeHref}" aria-label="Home"><i class="fa-solid fa-house"></i></a>
        <a href="${pageHref("about.html")}" aria-label="About Me"><i class="fa-solid fa-user"></i></a>
        <a href="${pageHref("projects.html")}" aria-label="Projects"><i class="fa-solid fa-briefcase"></i></a>
        <a href="${pageHref("get-know-me.html")}" aria-label="Get Know Me"><i class="fa-solid fa-compass"></i></a>
        <a href="${pageHref("contacts.html")}" aria-label="Contacts"><i class="fa-solid fa-envelope"></i></a>
        <a href="${pageHref("hire-me.html")}" aria-label="Hire Me"><i class="fa-solid fa-paper-plane"></i></a>
      </div>
    </div>
  `;

  target.innerHTML = sidebarHTML;

  // Highlight active link
  const normalize = (path) => path.split("/").pop() || "index.html";
  const currentPath = normalize(window.location.pathname);
  const links = target.querySelectorAll("a");
  links.forEach((link) => {
    if (normalize(link.getAttribute("href")) === currentPath) {
      link.classList.add("active-nav");
      link.setAttribute("aria-current", "page");
    }
  });
}
