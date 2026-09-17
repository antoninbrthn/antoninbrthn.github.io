/** Mark the navigation item that matches the current page. */
function markActiveNav() {
  const currentPath = window.location.pathname.endsWith("/")
    ? `${window.location.pathname}index.html`
    : window.location.pathname;
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkUrl = new URL(link.getAttribute("href"), window.location.href);
    const linkPath = linkUrl.pathname.endsWith("/")
      ? `${linkUrl.pathname}index.html`
      : linkUrl.pathname;
    const isNestedBlogPost = currentPath.startsWith("/blog/") && linkPath === "/blog.html";
    if (linkPath === currentPath || isNestedBlogPost) {
      link.classList.add("is-active");
    }
  });
}

/** Toggle the compact navigation menu on small screens. */
function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) {
    return;
  }
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

markActiveNav();
setupMobileNav();
