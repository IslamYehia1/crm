import { addConfigModal } from "./addSetting.js";
$(document).foundation();

// Adding a configuration into the settings is done through
//a modal in addSetting.js file
var addConfBtn = document.getElementById("addConfBtn");
var empty = document.getElementById("empty");
addConfBtn.addEventListener("click", async (event) => {
  let modal = await (await fetch("addSetting.html")).text();
  empty.innerHTML = modal;
  addConfigModal();
  event.preventDefault;
});
