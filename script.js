// What are you looking at?

function tick() {save(); check_admin(); check_bg()}

function check_admin() {if (admin) {document.getElementById("admin_panel").style.visibility = "visible";} else {document.getElementById("admin_panel").style.visibility = "hidden";}}

function save() {
  localStorage.setItem("admin", admin);
}

function check_bg() {
  if (theme === "default") {document.body.style.backgroundImage = "url('https://img.itch.zone/aW1nLzY2MzA2MzcucG5n/original/CI6uUc.png')";}
  else if (theme === "rainbow") {document.body.style.backgroundImage = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";}
  else if (theme === "dark") {document.body.style.backgroundImage = "linear-gradient(light_grey, light_grey)";}
  else {document.body.style.backgroundImage = "url('https://media.tenor.com/images/52c80bffe2f2675700e4397d25071ae3/tenor.gif')";}
}

function load() {
  if (localStorage.getItem("admin") === "true") {
    admin = true;
  } else {
    admin = false;}
  if (!!localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else {
    theme = "default";}
 }

load()
  
setInterval(tick, 100)
