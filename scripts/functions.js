/********************************
          CHANGE COLOR
********************************/
function changeColor() {

  // Grab COLOR Input Value
  let color = document.getElementById("changeColor").value;

  // Grab Container for changing COLOR Value
  let example1 = document.getElementById("example1");

  // Change the Background Color
  let colorChoice = example1.style.backgroundColor = color;
}

/********************************
          CHANGE OPACITY
********************************/
function changeOpacity() {

  // Grab OPACITY Input Value
  let opacity = document.getElementById("changeOpacity").value;

  // Grab Container for changing OPACITY Value
  let example1 = document.getElementById("example1");

  // Change the Opacity
  let opacityChoice = example1.style.opacity = opacity;
}

/********************************
          CHANGE WIDTH
********************************/
function changeWidth() {

  // Grab WIDTH Input Value
  let width = document.getElementById("changeWidth").value;

  // Grab Container for changing WIDTH Value
  let example1 = document.getElementById("example1");

  // Change the Width
  let widthChoice = example1.style.width = width;
}

/********************************
          CHANGE HEIGHT
********************************/
function changeHeight() {

  // Grab HEIGHT Input Value
  let height = document.getElementById("changeHeight").value;

  // Grab Container for changing HEIGHT Value
  let example1 = document.getElementById("example1");

  // Change the Height
  let heightChoice = example1.style.height = height;
}

/********************************
         CHANGE MARGIN
********************************/
function changeMargin() {

  // Grab MARGIN Input Value
  let margin = document.getElementById("changeMargin").value;

  // Grab Container for changing MARGIN Value
  let example1 = document.getElementById("example1");

  // Change the Margin
  let marginChoice = example1.style.margin = margin;
}

/********************************
         CHANGE PADDING
********************************/
function changePadding() {

  // Grab PADDING Input Value
  let padding = document.getElementById("changePadding").value;

  // Grab Container for changing PADDING Value
  let example1 = document.getElementById("example1");

  // Change the Padding
  let paddingChoice = example1.style.padding = padding;
}

/********************************
      CHANGE BORDER
********************************/
function changeBorder() {

  // Grab Border Input Value
  let border = document.getElementById("changeBorder").value;

  // Grab Container for changing Border Value
  let example1 = document.getElementById("example1");

  // Change the Border
  let borderChoice = example1.style.border = border;
}

/********************************
      CHANGE BORDER RADIUS
********************************/
function changeBR() {

  // Grab BR Input Value
  let br = document.getElementById("changeBR").value;

  // Grab Container for changing BR Value
  let example1 = document.getElementById("example1");

  // Change the Border Radius
  let brChoice = example1.style.borderRadius = br;
}

/********************************
        CHANGE BOX SHADOW
********************************/
function changeBS() {

  // Grab BS Input Value
  let bs = document.getElementById("changeBS").value;

  // Grab Container for changing BS Value
  let example1 = document.getElementById("example1");

  // Change the Box Shadow
  let bsChoice = example1.style.boxShadow = bs;
}

/********************************
        CHANGE TRANSFORM
********************************/
function changeTransform() {

  // Grab Transform Input Value
  let transform = document.getElementById("changeTransform").value;

  // Grab Container for changing Transform styling
  document.getElementById("example1").style.transform = transform;

  // Set property for CSS Variable
  let example1 = document.getElementById("example1");
  example1.style.setProperty('--transform', transform);

}

/********************************
        CHANGE ANIMATION
********************************/
function changeAnimation() {

  // Grab Animation Checkboc Value
  let checkbox = document.getElementById("changeAnimation");

  // Grab Container for changing Animation state.
  let example1 = document.getElementById("example1");

  // If checked, activate Animation
  if (checkbox.checked == true) {
    example1.style.animation = "checked-animation 5s linear infinite";
  }
  else {
    example1.style.animation = "none";
  }
}

/********************************
  DOM MANIPULATION - ADD PROPS
********************************/

function newProperty() {

  let element1 = document.createElement('div');
  let div1 = document.getElementById('properties');
  let selector1 = document.querySelector('#property1');

  let element2 = document.createElement('div');
  let div2 = document.getElementById('properties');
  let selector2 = document.querySelector('#property2');

  let element3 = document.createElement('div');
  let div3 = document.getElementById('properties');
  let selector3 = document.querySelector('#property3');

  let element4 = document.createElement('div');
  let div4 = document.getElementById('properties');
  let selector4 = document.querySelector('#property4');

  let element5 = document.createElement('div');
  let div5 = document.getElementById('properties');
  let selector5 = document.querySelector('#property5');

  let element6 = document.createElement('div');
  let div6 = document.getElementById('properties');
  let selector6 = document.querySelector('#property6');

  element1.innerHTML = '<label>Change Margin: </label><input type="text" id="changeMargin" placeholder="30px">';
  div1.insertBefore(element1, selector1.nextSibling);

  element2.innerHTML = '<label>Change Padding: </label><input type="text" id="changePadding" placeholder="30px">';
  div2.insertBefore(element2, selector2.nextSibling);

  element3.innerHTML = '<label>Change Border: </label><input type="text" id="changeBorder" placeholder="5px solid purple">';
  div3.insertBefore(element3, selector3.nextSibling);

  element4.innerHTML = '<label>Change Border Radius: </label><input type="text" id="changeBR" placeholder="25px, 50%">';
  div4.insertBefore(element4, selector4.nextSibling);

  element5.innerHTML = '<label>Change Box Shadow: </label><input type="text" id="changeBS" placeholder="3px 3px 3px 3px black">';
  div5.insertBefore(element5, selector5.nextSibling);

  element6.innerHTML = '<label>Change Transform: </label><input type="text" id="changeTransform" placeholder="scale(2), rotate(45deg)">';
  div6.insertBefore(element6, selector6.nextSibling);

  let hide = document.getElementById('propBtn').style.display = "none";
}

/********************************
          RESET FORM
********************************/
function resetForm() {
  document.getElementById("resetForm").reset();

  example1.style.backgroundColor = "#e00b55";
  example1.style.opacity = 1;
  example1.style.width = "90%";
  example1.style.height = "50px";
  example1.style.margin = "10px 0px 15px 0px";
  example1.style.padding = "0px 0px 0px 10px";
  example1.style.border = "none";
  example1.style.borderRadius = "0px";
  example1.style.boxShadow = "none";
  example1.style.transform = "none";
  example1.style.animation = "none";
  document.getElementById("changeAnimation").checked = false;
  example1.style.setProperty('--transform', transform);
}


/********************************
          TOGGLE ON/OFF
********************************/
function toggleBtn() {

  let x = document.getElementById("toggleBtn");
  x.classList.toggle("toggleOff");

  if (x.innerHTML === "On") {
    x.innerHTML = "Off";
  }
  else {
    x.innerHTML = "On";
  }
}

/********************************
   TOGGLE BACKGROUND ANIMATION
********************************/
function toggleBGC() {

  let x = document.getElementsByClassName("bgc")[0];
  x.classList.toggle("no-bgc");
}