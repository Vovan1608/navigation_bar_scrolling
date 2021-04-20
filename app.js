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
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;

	scrollHeight > navHeight ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav");
	scrollHeight > 500 ? topLink.classList.add("show-link") : topLink.classList.remove("show-link");
});

// --------- smooth scroll ---------
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
	link.addEventListener("click", (e) => {
		// preventDefault - not recommend
		e.preventDefault();
		// navigate to specific spot - recommend
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		//offsetTop - A Number, representing the top position of the element, in pixels
		let position = element.offsetTop;

		window.scrollTo({
			left: 0, top: position
		});
		// close links
		linksContainer.style.height = 0;
	});
});