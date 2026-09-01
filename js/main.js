async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function init() {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });

        navbar.classList.toggle("scrolled", window.scrollY > 50);

    });

}

init();