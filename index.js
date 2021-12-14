let toggle = document.querySelector('input[type="checkbox"]');
let nav = document.querySelector(".navbar");
let toggleSwitch = document.querySelector(".toggle_icon");

function darkMode(){
toggleSwitch.children[0].textContent="dark mode";
toggleSwitch.children[1].className.remove("fas fa-sun");
toggleSwitch.children[1].className.add("fas fa-moon");
}
function darkTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggle.addEventListener("change", darkTheme);
