//preventing forms to refresh page on submit

    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }


//first name on contact form validation
function firstNameValidate() {
    let x = document.forms["contactForm", "dealsForm"]["fName"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
  }

  //alerts user to caps lock when caps lock is pressed on any input field
  function isCaps() {
      //let input = document.getElementsByTagName("input")
    let capsWarn = document.getElementById("capsLock");
    
    this.addEventListener("keyup", function(event) {
    
      if (event.getModifierState("CapsLock")) {
        capsWarn.style.display = "block";
      } else {
        capsWarn.style.display = "none"
      }
    });
  }


//email validation on active deals page
function validateEmail(emailId)
{
var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailFormat))
{
document.dealsForm.email.focus();
return true;

}
else
{
alert("Invalid email address.");
document.dealsForm.email.focus();
return false;
}
}    

function reasonStated() {
    let reasons = document.getElementsByName("reason");
    let valid = false;
    for(let i = 0 ; i = reasons.length; i++)
    {
        if(reasons[i].checked)
        {
            valid = true;
            break;
        }
    }
    if(!valid)alert("Please select a reason for contact (can be other!)");
}

