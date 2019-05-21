// js/script.js - Create a JavaScript file inside the "js" folder and link it to index.html

// When the page first loads, the first text field should be in focus by default.

$(function() {
$("#name").focus();
});

// Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".

const jobRole = document.getElementById("title");
const jobOther = document.getElementById("other");
const otherJob = document.querySelector("#other-title");

otherJob.style.display = "none";

jobRole.onchange = function () { 
  if(this.value === "other"){ 
      otherJob.style.display = "";
  }
  else {
    otherJob.style.display = "none"; 
  }
};

// Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu
// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
const colorDiv = document.querySelector('#colors-js-puns');
colorDiv.style.display = "none";

 var shirtSelected = false;
 $("#design").change(function() {
    if ($("#design option:selected").val() === "js puns") {
      $("#colors-js-puns").show();
      $("#color").html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
      shirtSelected = true;
      return shirtSelected;

    } else if ($("#design option:selected").val() === "heart js") {
      $("#colors-js-puns").show();
      $("#color").html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
      shirtSelected = true;
      return shirtSelected;
    } else {
      $("#color-js-puns").hide();
      shirtSelected = false;
      return shirtSelected;
    }
  });


//   Register for Activities” section
// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.

  $(".activities").append('<div id="total"></div>');
		var totalCost = 0;
  		var updateCost = function (cost) {
    		totalCost += cost;
    	document.getElementById("total").innerHTML = "Acitives Total: $" + totalCost;
  		};

  const mainCon = document.getElementById("all");
  mainCon.type = 'checkbox';
		  mainCon.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      mainCon.disabled = false;
		      updateCost(200);
		    } else {
		      updateCost(-200);
		    }
		  });

  const jsFra = document.getElementById("js-frameworks");
  jsFra.type = 'checkbox';
		  jsFra.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      expressWor.disabled = true;
		      document.getElementById("4").style.color = "#00ff00";
		      updateCost(100);
		    } else {
		      updateCost(-100);
		      expressWor.disabled = false;
		      document.getElementById("4").style.color = "black";
		    }
		  });

  const jsLib = document.getElementById("js-libs");
  jsLib.type = 'checkbox';
		  jsLib.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      nodeWor.disabled = true;
		      document.getElementById("5").style.color = "#00ff00";
		      updateCost(100);
		    } else {
		      nodeWor.disabled = false;
		      document.getElementById("5").style.color = "black";
		      updateCost(-100);
		    }
		  });

  const expressWor = document.getElementById("express");
  expressWor.type = 'checkbox';
		  expressWor.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      jsFra.disabled = true;
		      document.getElementById("2").style.color = "#00ff00";
		      updateCost(100);
		    } else {
		      jsFra.disabled = false;
		      document.getElementById("2").style.color = "black";
		      updateCost(-100);
		    }
		  });

  const nodeWor = document.getElementById("node");
  nodeWor.type = 'checkbox';
		  nodeWor.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      jsLib.disabled = true;
		      document.getElementById("3").style.color = "#00ff00";
		      updateCost(100);
		    } else {
		      jsLib.disabled = false;
		      document.getElementById("3").style.color = "black";
		      updateCost(-100);
		    }
		  });

  const buildToo = document.getElementById("build-tools");
  buildToo.type = 'checkbox';
		  buildToo.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      updateCost(100);
		    } else {
		      updateCost(-100);
		    }
		  });

  const npmWor = document.getElementById("npm");
  npmWor.type = 'checkbox';
		  npmWor.addEventListener('change', (e) => {
		    const isChecked = e.target.checked;
		    if(isChecked) {
		      updateCost(100);
		    } else {
		      updateCost(-100);
		    }
		  });


// "Payment Info" section
// Display payment sections based on the payment option chosen in the select menu.
// The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
// When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
// When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.


  $('#paypal, #bitcoin').hide();

  $('#payment').change(function(){
    if ($('#payment option:selected').val() === "paypal") {
      $('#credit-card, #bitcoin').hide();
      $('#paypal').show();
    } else if ($('#payment option:selected').val() === "bitcoin") {
      $('#credit-card, #paypal').hide();
      $('#bitcoin').show();
    } else {
      $('#credit-card').show();
      $('#paypal, #bitcoin').hide();
    }
  });




//Form validation
// Name field can't be blank.
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
// User must select at least one checkbox under the "Register for Activities" section of the form.
// If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
// Credit Card field should only accept a number between 13 and 16 digits.
// The Zip Code field should accept a 5-digit number.
// The CVV should only accept a number that is exactly 3 digits long.


const nameInput = document.querySelector('#name');
const activitiesSection = document.querySelector('.activities');
const activities = activitiesSection.querySelectorAll('label');
const activityTotal = document.createElement('p');
let total = 0;
activityTotal.textContent = `Total: $${total}`;
activitiesSection.appendChild(activityTotal);
activitiesSection.addEventListener('change', (event) => {
  const activity = event.target;
  const isChecked = activity.checked;
});
const paymentInput = document.querySelector('#payment');
const creditCardSection = document.querySelector('#credit-card');
const submitButton = document.querySelector('button');
const emailInput = document.querySelector('#mail');
submitButton.addEventListener('click', (event) => {
  const stop = () => event.preventDefault();

  function addErrorMessage (message, elementWithError) {
    const paragraph = document.createElement('p');
    paragraph.style.color = 'red';
    paragraph.innerHTML = `<bold>${message}</bold>`;
    elementWithError.previousElementSibling.appendChild(paragraph);
  }

  if (nameInput.value === '') {
    stop();
    addErrorMessage('Please provide your name.', nameInput);
  }
 
  const email = emailInput.value.toLowerCase();
  if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
    stop();
    addErrorMessage('Please enter a valid email address.', emailInput);
  }

  let activitySelectedTotal = 0;
  for (i=0; i < activities.length; i++) {
    let isChecked = activities[i].firstChild.checked;
    if (isChecked) {
      activitySelectedTotal += 1;
    }
  }
  if (activitySelectedTotal === 0) {
    stop();
    addErrorMessage('One activity should be selected.', activityTotal);
  }

  if (paymentInput.value === 'credit card') {
    const ccNumberInput = document.querySelector('#cc-num');
    const zipInput = document.querySelector('#zip');
    const cvvInput = document.querySelector('#cvv');
    if (isNaN(ccNumberInput.value) || ccNumberInput.value === '') {
      stop();
      addErrorMessage('Please enter a credit card number.', ccNumberInput);
    } else if (ccNumberInput.value.length < 13 || ccNumberInput.value.length > 16) {
      stop();
      addErrorMessage('Please enter a 13-16 digit number.', ccNumberInput)
    }
    if (isNaN(zipInput.value) || zipInput.value === '') {
      stop();
      addErrorMessage('Please enter a valid zip code.', zipInput);
    } else if (zipInput.value.length !== 5) {
      stop();
      addErrorMessage('Please enter a 5 digit number.', zipInput);
    }
    if (isNaN(cvvInput.value) || cvvInput.value === '') {
      stop();
      addErrorMessage('Please enter your CVV number.', cvvInput);
    } else if (cvvInput.value.length !== 3) {
      stop();
      addErrorMessage('Please enter a 3 digit number.', cvvInput);
    }
  }
});




//real time Regex Email Validation (Vanilla JS) A  Code PEN 



const email = document.querySelector('.email');
const update = document.querySelector('.update');

email.addEventListener('input', inputEmail);

function inputEmail(e) {
  const input = e.target.value;

  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'Keep Going...';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};












    