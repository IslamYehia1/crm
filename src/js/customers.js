export default function loadCstPage(mainContainer) {
  import("../customers.html").then((data) => {
    mainContainer.innerHTML = data.default;
    const addCstBtn = document.getElementById("addCstBtn");
    const addCstForm = document.querySelector("form");
    const discountSelect = document.getElementById("discountSelect");
    const customDiscount = document.getElementById("customDiscount");
    //Hides the add button and displays the form to add a customer
    addCstBtn.addEventListener("click", hideAddBtn);
    discountSelect.addEventListener("change", showCustomDiscount);
  });
}

function showCustomDiscount(event) {
  let selected = event.target.value;
  if (selected == "customDiscount") {
    customDiscount.style.display = "flex";
  } else {
    customDiscount.style.display = "none";
  }
}
function hideAddBtn(event) {
  event.target.style.display = "none";
  addCstForm.style.display = "block";
}
