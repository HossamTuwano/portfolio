document.addEventListener("DOMContentLoaded", () => {
  const saved = (() => {
    try { return localStorage.getItem("theme"); } catch { return null; }
  })();
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
});
