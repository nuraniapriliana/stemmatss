document.addEventListener("DOMContentLoaded", () => {

    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const navLinks = document.querySelector(".nav-links");
    const navPills = document.querySelectorAll(".nav-pill");

    // Fungsi Toggle Menu
    const toggleMenu = () => {
        hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        
        // Opsional: Kunci scroll body saat menu terbuka
        document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
    };

    // Event Listener Klik Hamburger
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", toggleMenu);
    }

    // Klik Link -> Tutup Menu
    navPills.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });

    // Sembunyikan menu otomatis jika user memperlebar layar ke Desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            hamburgerBtn.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
    
    // SCROLL ANIMATION
    const elements = document.querySelectorAll(".animate-on-scroll");

    const showElement = () => {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;

            if(position < window.innerHeight - 100){
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showElement);

    showElement();

    // RIPPLE BUTTON EFFECT
    const buttons = document.querySelectorAll(".primary-btn");

    buttons.forEach(button => {

        button.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = button.getBoundingClientRect();

            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });

});