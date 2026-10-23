const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const yearEl = document.getElementById("year");

if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
}

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        const icon = menuBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("bi-list");
            icon.classList.toggle("bi-x-lg");
        }
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.add("bi-list");
                icon.classList.remove("bi-x-lg");
            }
        });
    });
}
