//Forgot password form validation
function validate_Forgot_Password_Form() 
{
  var x = document.forms["myForgotPasswordForm"]["new_password"].value;
  if (x == "") 
    {
      alert("We share the link to reset the password. Check your email");
      window.location.href = "login_pg.html";
      return false;
    }
}

//Login form validation
function validate_Signin_Form() 
{
  var x = document.forms["mySigninForm"]["login"].value;
  if (x == "") 
    {
      alert("You have successfully logged in");
      window.location.href = "index.html";
      return false;
    }
}

//Registration form validation
function validate_Signup_Form() 
{
  var x = document.forms["mySignupForm"]["register"].value;
  if (x == "") 
    {
      alert("You have successfully create an account");
      window.location.href = "login_pg.html";
      return false;
    }
}

//Checkbox validation in publication form
$('.your-checkbox').prop('indeterminate', true)

//Publication form validation
function validate_Publication_Form() 
{
  var x = document.forms["myPublicationForm"]["publish"].value;
  if (x == "") 
    {
      alert("You have successfully post an article");
      window.location.href = "index.html";
      return false;
    }
}














