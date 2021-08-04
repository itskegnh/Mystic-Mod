// What are you looking at?

function tick() {save_load(); check_admin();}

function check_admin() {if (admin) {document.getElementById("admin_panel").style.opacity = 1;}}

function save() {
  localStorage.setItem("admin", admin);
}

function load() {
  if (!!localStorage.getItem("admin")) {
    admin = (!!localStorage.getItem("apples"));
  } else {
    admin = false;
}

load()
  
setInterval(tick, 100)
