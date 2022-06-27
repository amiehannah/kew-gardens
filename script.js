window.onload = () => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });
  };
  
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  
  menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
  
  const faders = document.querySelectorAll(".fade-in");
  
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px",
  };
  
  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  });
  
  faders.forEach((fader) => appearOnScroll.observe(fader));
  