// What are you looking at?

function set_theme() {theme = prompt("What Theme?");}

function tick() {save(); check_admin(); check_bg()}

function check_admin() {if (admin) {document.getElementById("admin_panel").style.visibility = "visible";} else {document.getElementById("admin_panel").style.visibility = "hidden";}}

function rickroll() {window.location.href = "https://cdn.discordapp.com/attachments/865552215145578516/880230581860958288/4.2.3.0_Mystic_Mod.zip";}

function save() {
  localStorage.setItem("admin", admin);
  localStorage.setItem("theme", theme);
}

function check_bg() {
  if (theme === "default") {document.body.style.backgroundImage = "url('https://img.itch.zone/aW1nLzY2MzA2MzcucG5n/original/CI6uUc.png')";}
  else if (!theme) {document.body.style.backgroundImage = "url('https://img.itch.zone/aW1nLzY2MzA2MzcucG5n/original/CI6uUc.png')";}
  else if (theme === "rainbow") {document.body.style.backgroundImage = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";}
  else if (theme === "dark") {document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/791818284370231318/872692442040774707/unknown.png')";}
  else if (theme === "crab") {document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EMQ6ZJEWsAIyDmw?format=jpg&name=small')";}
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
