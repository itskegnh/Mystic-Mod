// What are you looking at?

function tick() {save(); check_admin();}

function check_admin() {if (admin) {document.getElementById("admin_panel").style.visibility = "visible";} else {document.getElementById("admin_panel").style.visibility = "hidden";}}

function save() {
  localStorage.setItem("admin", admin);
}

function load() {
  if (localStorage.getItem("admin") === "true") {
    admin = true;
  } else {
    admin = false;
}}

load()
  
setInterval(tick, 100)
