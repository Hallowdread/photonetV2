import './style.css';
import './main.ts';

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle") as HTMLInputElement;
    const body = document.body;
    const nav = document.querySelector(".container") as HTMLDivElement;
    const logo = document.getElementById("logo") as HTMLAnchorElement;
    const moonIcon = document.querySelector(".moon-icon") as HTMLAnchorElement;
    const sunIcon = document.querySelector(".sun-icon") as HTMLAnchorElement;
    const headerTwo = document.querySelector(".header-two") as HTMLDivElement;
    const bigText = document.querySelector(".big-text") as HTMLHeadingElement;
    const span = document.querySelector(".span") as HTMLSpanElement;
    const smallText = document.querySelector(".small-text") as HTMLParagraphElement;
    const searchForm = document.querySelector(".search-form") as HTMLFormElement;
    const moreBtn = document.querySelector(".more-btn") as HTMLButtonElement;

    //* Load User Prefrence From Local Storage
    const saveMode = localStorage.getItem("dark-mode");

    if (saveMode === "true") {
        body.classList.add("dark-mode");
        nav.classList.add("dark-mode");
        logo.classList.add("dark-mode");
        moonIcon.classList.add("dark-mode");
        sunIcon.classList.add("dark-mode");
        headerTwo.classList.add("dark-mode");
        bigText.classList.add("dark-mode");
        span.classList.add("dark-mode");
        smallText.classList.add("dark-mode");
        searchForm.classList.add("dark-mode");
        moreBtn.classList.add("dark-mode");
        toggle.checked = true;
    };

    //* Toggle Dark Mode 
    toggle.addEventListener("change" ,() => {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            nav.classList.add("dark-mode");
            logo.classList.add("dark-mode");
            moonIcon.classList.add("dark-mode");
            sunIcon.classList.add("dark-mode");
            headerTwo.classList.add("dark-mode");
            bigText.classList.add("dark-mode");
            span.classList.add("dark-mode");
            smallText.classList.add("dark-mode");
            searchForm.classList.add("dark-mode");
            moreBtn.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "true");
        } else {
            body.classList.remove("dark-mode");
            nav.classList.remove("dark-mode");
            logo.classList.remove("dark-mode");
            moonIcon.classList.remove("dark-mode");
            sunIcon.classList.remove("dark-mode");
            headerTwo.classList.remove("dark-mode");
            bigText.classList.remove("dark-mode");
            span.classList.remove("dark-mode");
            smallText.classList.remove("dark-mode");
            searchForm.classList.remove("dark-mode");
            moreBtn.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "false")
        };
    });
});