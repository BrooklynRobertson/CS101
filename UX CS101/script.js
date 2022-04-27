


// hamburgerClick() = nav function to show links on mobile with hamburger link
const title = document.querySelector("#titleMain");
const navButtons = document.getElementById("nav");

//listens for the click
document.body.addEventListener('onclick', hamburgerClick());


function hamburgerClick() {
  
  if (navButtons.className == "") {
     navButtons.classList.add("navReveal");
    title.classList.add("navReveal");
    navButtons.stopPropagation();
  } 
  else {
  navButtons.classList.remove("navReveal");
  title.classList.remove("navReveal");
  }
}


//setting real viewport height to use as variable
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
  
//setting real viewport width to use as variable
  let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

//add to listen to resizing
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  });

//calling reveal function to check page position on load
reveal();


//adding event listener to when someone scrolls
  document.body.addEventListener("scroll", reveal);

  //adding event listener to when someone scrolls on phone
  document.addEventListener('swiped-up', reveal);

  //function to make elements with class name 'reveal' to animate by 
  //fading in to view, from the bottom.
 function reveal() {
    let reveals = document.getElementsByClassName("reveal");
    
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

 // Get the pop up
let popUp = document.getElementById("popUpBooking");

// Get the element that opens the pop up
let popUpTrigger = document.getElementById("checkAvailibility");

// Get the <span> element that closes the pop up
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the pop up 
popUpTrigger.onclick = function() {
  popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the pop up
span.onclick = function() {
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the popUp, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}

