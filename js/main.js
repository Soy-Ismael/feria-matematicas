/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    root = document.documentElement;

/* Menu show */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  root.style.setProperty('--title-color', '#111')
  root.style.setProperty('--body-color', 'hsl(230, 100%, 98%)');
});

/* Menu hidden */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  root.style.setProperty('--title-color', 'white')
  root.style.setProperty('--body-color', 'transparent');
});

/*=============== SEARCH ===============*/
const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

/* Search show */
searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

/* Search hidden */
searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});

/*=============== LOGIN ===============*/
const login = document.getElementById("login"),
  loginBtn = document.getElementById("login-btn"),
  loginClose = document.getElementById("login-close");

/* Login show */
loginBtn.addEventListener("click", () => {
  login.classList.add("show-login");
});

/* Login hidden */
loginClose.addEventListener("click", () => {
  login.classList.remove("show-login");
});

// Intersection observer
const main = document.getElementById("main");
const header = document.getElementById("header");

const callback = (entries) => {
  console.log(entries)
    entries.forEach(entry => {
      console.log(entry);
        if (entry.isIntersecting) {
            root.style.setProperty("--title-color", "#111");
            root.style.setProperty("--body-color", "hsl(230, 100%, 98%)");
        }else {
          root.style.setProperty("--title-color", "white");
          root.style.setProperty("--body-color", "transparent");
        }
    });
  console.log(entries);
  
}

const options = {
    root: null,
    rootMargin: "-100px",
    threshold: 0.1,
}

const observer = new IntersectionObserver(callback, options)
observer.observe(document.getElementById('observer'));