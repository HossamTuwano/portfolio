document.addEventListener("DOMContentLoaded", () => {
  const sideNav = document.querySelector(".side_nav");
  const miniSideNav = document.querySelector(".mini_sideNav");
  const cross = document.querySelector(".cross_icon");
  const collapse = document.querySelector(".collapse_icon");

  if (!sideNav || !miniSideNav || !cross || !collapse) return;

  const setCollapsed = (collapsed) => {
    sideNav.classList.toggle("hide", collapsed);
    sideNav.setAttribute("aria-hidden", String(collapsed));
    miniSideNav.classList.toggle("hide", !collapsed);
    miniSideNav.setAttribute("aria-hidden", String(!collapsed));
  };

  const getStored = () => {
    try {
      return localStorage.getItem("nav-collapsed") === "true";
    } catch {
      return false;
    }
  };

  const setStored = (value) => {
    try {
      localStorage.setItem("nav-collapsed", String(value));
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  };

  setCollapsed(getStored());

  cross.addEventListener("click", () => {
    setCollapsed(true);
    setStored(true);
  });

  collapse.addEventListener("click", () => {
    setCollapsed(false);
    setStored(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !sideNav.classList.contains("hide")) {
      setCollapsed(true);
      setStored(true);
    }
  });
});
