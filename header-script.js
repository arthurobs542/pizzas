//interações com a header

const navBar = document.getElementById("header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});

console.log(navBar);
