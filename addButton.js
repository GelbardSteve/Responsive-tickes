addButton.addEventListener("click", e => {
  if (e.target.className == "addButton") {
    sectionButton();
    clickButton();
    addSection.style.display = "none";
  }
});

function sectionButton() {
  //Insert userSection into sectionContainer
  let userSection = document.createElement("div");
  userSection.className = "userSection";
  sectionContainer.appendChild(userSection);

  let userDetails = document.createElement("div");
  userDetails.className = "user-Details";
  userSection.appendChild(userDetails);

  let figure = document.createElement("figure");
  userDetails.appendChild(figure);

  let image = document.createElement("img");
  image.src = e.options[e.selectedIndex].text;
  figure.appendChild(image);

  let figcaption = document.createElement("figcaption");
  figcaption.className = "userPosition";
  figcaption.textContent = addPosition.value;
  figure.appendChild(figcaption);
  addPosition.value = "";

  let userDetail = document.createElement("div");
  userDetail.className = "userDetail";
  userDetails.appendChild(userDetail);

  let h3user = document.createElement("h3");
  h3user.textContent = addUName.value;
  userDetail.appendChild(h3user);
  addUName.value = "";

  let pLocation = document.createElement("div");
  userDetail.appendChild(pLocation);

  let i = document.createElement("i");
  i.className = "fas fa-map-marker-alt";
  pLocation.appendChild(i);

  let span = document.createElement("span");
  span.textContent = addPlace.value;
  pLocation.appendChild(span);

  let pTwitter = document.createElement("p");
  userDetail.appendChild(pTwitter);

  let bold = document.createElement("b");
  bold.textContent = addTwitter.value;
  pTwitter.appendChild(bold);
  addTwitter.value = "";

  let pDesc = document.createElement("p");
  pDesc.className = "description";
  pDesc.textContent = addDescription.value;
  userDetail.appendChild(pDesc);
  addDescription.value = "";

  let pTel = document.createElement("p");
  pTel.textContent = addTelephon.value;
  userDetail.appendChild(pTel);
  addTelephon.value = "";

  let editButtons = document.createElement("div");
  editButtons.className = "editbuttons";
  userSection.appendChild(editButtons);

  let editButt = document.createElement("i");
  editButt.className = "editbutton far fa-edit";
  editButtons.appendChild(editButt);

  let deleButt = document.createElement("i");
  deleButt.className = "deletebutton fas fa-trash";
  editButtons.appendChild(deleButt);
}

//--------------------------------------------

addSection.style.display = "none";
addNewUser.addEventListener("click", e => {
  addSection.style.display = "flex";
});
