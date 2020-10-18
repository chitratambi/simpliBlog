function validate_Signin_Form() {
    var x = document.forms["mySigninForm"]["login"].value;
    if (x == "") {
      alert("You have successfully logged in");
      return false;
    }
  }

function validate_Signup_Form() {
    var x = document.forms["mySignupForm"]["register"].value;
    if (x == "") {
      alert("You have successfully create an account");
      return false;
    }
  }

  $('.your-checkbox').prop('indeterminate', true)
  
  function validate_Publication_Form() {
    var x = document.forms["myPublicationForm"]["publish"].value;
    if (x == "") {
      alert("You have successfully post an article");
      return false;
    }
  }
