import _ from "lodash";
import $ from "jquery";
import Foundation from "foundation-sites";
import nav from "./nav.html";
import sideNav from "./sideNav.html";
import "./css/style.scss";
var mainContainer = document.getElementById("mainContainer");
mainContainer.innerHTML = sideNav;

function loadNav() {
  const element = document.createElement("div");
  element.innerHTML = nav;
  return element;
}
document.body.insertAdjacentElement("afterbegin", loadNav());
$(".multilevel-accordion-menu").foundation();
$("nav").foundation();
