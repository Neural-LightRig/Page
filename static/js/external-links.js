document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a.external-link');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
    });
});