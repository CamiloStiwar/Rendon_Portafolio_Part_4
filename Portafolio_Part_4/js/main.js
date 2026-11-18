/*
    Author: Camilo Rendon
    File Name: main.js
    Date: 11/10/2026
    Description: Scripts for the portfolio website. Controls the mobile hamburger menu.
*/

// Let the CSS know JavaScript is running (menu stays visible if JS is off)
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (!menuButton || !nav) {
        return;
    }

    // Open or close the menu and update aria-expanded for screen readers
    menuButton.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
});
