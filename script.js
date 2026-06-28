let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // stop the instant jump

    let targetId = link.getAttribute("href"); // e.g. "#about"
    let targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});