import _ from "lodash";
import $ from "jquery";
import Foundation from "foundation-sites";
import navElements from "./nav.html";
import sideNavContent from "./sideNav.html";
import "./css/style.scss";
import mainContainerContent from "./mainContainer.html";

var nav = document.querySelector("nav");
nav.innerHTML = navElements;

var sideNav = document.getElementById("sideNav");
sideNav.innerHTML = sideNavContent;

var mainContainer = document.getElementById("mainContainer");
mainContainer.innerHTML = mainContainerContent;

var getCstInfo = document.getElementById("two");
getCstInfo.addEventListener("click", async function loadCstInfo() {
  var loadCstPage = await import("./js/customers.js");
  loadCstPage.default(mainContainer);
});

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$(".multilevel-accordion-menu").foundation();
$("nav").foundation();
