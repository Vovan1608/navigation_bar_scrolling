"use strict";

// -------- set date --------
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// -------- close links --------
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
	// 1-st case - but not very good (fixed height in styles)
	// linksContainer.classList.toggle("show-links");

	// 2-nd case - better (height is dynamic)
	// Element.getBoundingClientRect() method returns the size of
	// an element and its position relative to the viewport.
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	linksContainer.style.height = containerHeight === 0 ? `${linksHeight}px` : 0;
});

// -------- fixed navbar --------
