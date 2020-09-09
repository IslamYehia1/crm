// Radio buttons for choosing the setting type
export function addConfigModal() {
  var modal = document.getElementById("addSettingModal");
  var confTypes = document.getElementsByName("confType");
  var confTypesInput = document.getElementsByClassName("inputConfType");
  var listOptionInput = document.getElementById("listOptionInput");
  var textOptionInput = document.getElementById("textOptionInput");
  var closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", (event) => {
    hideModal(modal);
    event.preventDefault;
  });
  //Once a radio button is selected an input for it will show if exists
  confTypes.forEach(function (radioBtn) {
    radioBtn.addEventListener("click", function (event) {
      switch (event.target.value) {
        case "onOffOption":
          showInputField(null, confTypesInput); // Empty means it'll hide any shown input fields
          break;
        case "listOption":
          showInputField(listOptionInput, confTypesInput);
          break;
        case "textOption":
          showInputField(textOptionInput, confTypesInput);
          break;
      }
    });
  });
  showModal(modal);
}

//Hide all input areas in confTypes
function showInputField(elementToShow, elementsToHide) {
  if (elementsToHide) {
    for (let input of elementsToHide) {
      input.style.display = "none";
    }
  }

  if (elementToShow) {
    elementToShow.style.display = "block";
  }
}

function hideModal(modal) {
  modal.style.display = "none";
  modal.parentElement.style.display = "none"; //OverLay
}

function showModal(modal) {
  modal.style.display = "block";
  modal.parentElement.style.display = "block"; // OverLay
}
