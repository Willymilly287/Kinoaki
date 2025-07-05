// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                // Close mobile menu after clicking a link
                if (nav.classList.contains("active")) {
                    nav.classList.remove("active");
                }
            }
        });
    });

    // Franchise Modal Logic
    const franchiseModal = document.getElementById("franchise-modal");
    const openFranchiseFormBtn = document.getElementById("open-franchise-form");
    const closeButton = document.querySelector(".modal .close-button");

    if (openFranchiseFormBtn && franchiseModal && closeButton) {
        openFranchiseFormBtn.addEventListener("click", function() {
            franchiseModal.style.display = "flex";
        });

        closeButton.addEventListener("click", function() {
            franchiseModal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == franchiseModal) {
                franchiseModal.style.display = "none";
            }
        });
    }

    // Form handling (simplified for client-side demonstration)
    const contactForm = document.querySelector(".contact-section .contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Nachricht gesendet! Wir melden uns bald bei Ihnen.");
            contactForm.reset();
        });
    }

    const franchiseFormModal = document.querySelector(".franchise-form-modal");
    if (franchiseFormModal) {
        franchiseFormModal.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Franchise-Anfrage gesendet! Wir senden Ihnen ein personalisiertes Angebot.");
            franchiseFormModal.reset();
            franchiseModal.style.display = "none";
        });
    }
});


