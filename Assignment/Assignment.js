

function formValidation(){  
var name=document.getStartedForm.name.value;
var name=document.getStartedForm.name.value.length;   
var email=document.getStartedForm.email.value; 
var phoneNumber=document.getStartedForm.phoneNumber.value;  
var phoneNumber=document.getStartedForm.phoneNumber.value.length;   
var workExeperience=document.getStartedForm.workExeperience.value;
  
  if (name==null || name==""){  
    alert("Name field should not be Empty");  
    return false;  
    }

  else if (name<4) {
    alert("Name should be minimun of 4 characters");
  return false;  
  }

  else if (email==null || email=="") {
    alert("Email field should not be Empty");
    return false;  
  }

  else if (phoneNumber==null || phoneNumber=="") {
    alert("Mobile Number field should not be Empty");
    return false;  
  }

  else if (phoneNumber!=10) {
  alert("Please enter valid Mobile Number ");
  return false;  
  }

  else if (workExeperience==null || workExeperience=="") {
    alert("Work Exeperience field should not be Empty");
    return false;  
  }
}


function storeValues(){
  var name= document.getElementById("name");
  localStorage.setItem("name", name.value);

  var email= document.getElementById("email");
  localStorage.setItem("email", email.value);

  var phoneNumber= document.getElementById("phoneNumber");
  localStorage.setItem("phoneNumber", phoneNumber.value);

  var workExeperience= document.getElementById("workExeperience");
  localStorage.setItem("workExeperience", workExeperience.value);

  var currentOrganization= document.getElementById("currentOrganization");
  localStorage.setItem("currentOrganization", currentOrganization.value);
}

  var storedName = localStorage.getItem("name");
  console.log(storedName);

  var storedEmail = localStorage.getItem("email");
  console.log(storedEmail);

  var storedPhoneNumber = localStorage.getItem("phoneNumber");
  console.log(storedPhoneNumber);

  var storedWorkExeperience = localStorage.getItem("workExeperience");
  console.log(storedWorkExeperience);

  var storedcurrentOrganization = localStorage.getItem("currentOrganization");
  console.log(storedcurrentOrganization);

