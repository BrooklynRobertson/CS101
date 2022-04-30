// //making a style sheet in the html file, so that we can avoid inline styling
// let htmlStyle = document.createElement("style");

// // Get the first script tag
// let firstScript = document.querySelector("script");

// // Insert our new styles before the first script tag
// firstScript.parentNode.insertBefore(htmlStyle, firstScript);/ 


//hamburgerClick() = nav function to show links on mobile with hamburger link
const title = document.querySelector("#titleMain");
const navButton = document.querySelector("#collapsedNavButton");
const nav = document.querySelector("nav");

// function hamburgerClick () {
// if (nav.classList.contains("isVisible")) {
//   navButton.classList.add("navReveal");
//  title.classList.add("navReveal");
//  console.log("nav REVEAL");
// }
// else {
//   navButton.classList.remove("navReveal");
//   title.classList.remove("navReveal");
//   console.log("nav REVEAL hide");
//   }
// }


// Toggle nav and title visibility
let navToggle = function (elem, timing) {
  // If the nav is visible, reveal it
  if (nav.classList.contains("isVisible")) {
    title.classList.remove("navReveal");
    return;
  }
  // Otherwise, hide it
  title.classList.add("navReveal");
};

//listens for the click
navButton.addEventListener('click', navToggle);





// //setting real viewport height to use as variable
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// //setting real viewport width to use as variable
//   let vw = window.innerWidth * 0.01;
// document.documentElement.style.setProperty('--vw', `${vw}px`);

// //add to listen to resizing
// window.addEventListener('resize', () => {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//     let vw = window.innerWidth * 0.01;
//     document.documentElement.style.setProperty('--vw', `${vw}px`);
//   });

//calling reveal function to check page position on load
reveal();

//adding event listener to when someone scrolls
document.body.addEventListener("scroll", reveal);
console.log("scrolling heard");
  //adding event listener to when someone scrolls on phone
  document.addEventListener('swiped-up', reveal);

  //function to make elements with class name 'reveal' to animate by
  //fading in to view, from the bottom.
 function reveal() {
    let reveals = document.getElementsByClassName("reveal");
    console.log("scrolling intialised");
    for (let i = 0; i < reveals.length; i++) {

      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;

      let elementVisible = 1;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");

      }
      else {
        reveals[i].classList.remove("active");

      }
    }
  }

// Get the event name
// Adapted from Modernizr: https://modernizr.com
let whichTransitionEvent = function () {
  let el = document.createElement("fakeelement");
  let transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (let t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
};

// Get transition type
let transition = whichTransitionEvent();

// Show an element
let show = function (elem) {
  // Get the natural height of the element
  let getHeight = function () {
    elem.style.display = "block"; // Make it visible
    let height = elem.scrollHeight + "px"; // Get it's height
    elem.style.display = ""; //  Hide it again
    return height;
  };

  const height = getHeight(); // Get the natural height
  elem.classList.add("isVisible"); // Make the element visible
  elem.style.height = height; // Update the max-height
  console.log("using show function");
  
  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.addEventListener(
    "transitionend",
    function removeHeight(event) {
      if (!event.propertyName === "height") return;
      elem.style.height = "";
      window.removeEventListener("transitionend", removeHeight, false);
    },
    false
  );
};




// Hide an element
const hide = function (elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + "px";

  // Set the height back to 0
  window.setTimeout(function () {
    elem.style.height = "0";
  }, 1);
console.log("using hide function");
  // When the transition is complete, hide it
  window.addEventListener(
    "transitionend",
    function removeVisibility(event) {
      if (!event.propertyName === "height") return;
      elem.classList.remove("isVisible");
      window.removeEventListener("transitionend", removeVisibility, false);
    },
    false
  );
};

// Toggle element visibility
let toggle = function (elem, timing) {
  // If the element is visible, hide it
  if (elem.classList.contains("isVisible")) {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};


const titleMain = document.querySelector("#titleMain");
// Listen for click events for TOGGLE buttons
document.addEventListener("click", function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();
    console.log("inside event listener click for toggle");
    // Get the content
    let content = document.querySelector(event.target.hash);
    if (!content) return;
    if (content=="#nav") 
      toggle(titleMain),console.log("toggling title");
    
    // Toggle the content
    toggle(content),console.log("toggling "+ content);;
  },
  
);false






const fNameEl = document.querySelector("#fName");
const emailEl = document.querySelector("#email");

// Get forms
const subForm = document.getElementById("subscribe");

//variables for ROOMS FORM

const roomsForm = document.querySelector("#bookingForm");
// Get the pop up we show when for submits
const popUp = document.querySelector("#popUpBooking");

// Get the button that submits the form and opens the pop up
const popUpTrigger = document.querySelector("#checkAvailability");
popUpTrigger.hash = "#popUpBooking";

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};



  // document.addEventListener('click', function (event) {
  //   console.log("listening to popUp......");
  //  // When the user clicks the button, open the pop up
  //  console.log("using hide pop up function in event listener");
  //     // If the clicked element is the close button
  //     if (event.target.getElementsByClassName("close")) {
  //       // close the modal
  //       hide(popUp);
  //      // return;
  //     }
  //     // If the clicked element is the `pop up`, do nothing
  //     if (!event.target.closest('#popUpBooking')) return;
  //     // Otherwise, close it
  //   hide(popUp);
  //   }, true);



window.addEventListener(popUp, function (event) {
  console.log(event);
});



//   // validate subForm
//   let isfNameValid = checkfName(),
//     isEmailValid = checkEmail();

//   let isFormValid =
//     isfNameValid && isEmailValid;

//   // submit to the 'server' if the form is valid
//   if (isFormValid) {
//     // show modal
//     show(subscribeForm);
//   }
//;



const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const reEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reEmail.test(email);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkfName = () => {
  let valid = false;
  const min = 2,
    max = 25;
  const fName = fNameEl.value.trim();

  if (!isRequired(fName)) {
    showError(fNameEl, "Name cannot be blank.");
  } else if (!isBetween(fName.length, min, max)) {
    showError(fNameEl, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(fNameEl);
    valid = true;
  }
  return valid, fName;
};
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(
      emailEl,
      "Email is not valid. (Make sure email follow format: email@example.com)"
    );
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid, email;
};
