function validateForm(){
var x = document.forms["myform"]["userid"].value;
    var y = document.forms["myform"]["fname"].value;
    var z = document.forms["myform"]["lname"].value;
document.getElementById("id_msg").innerHTML = "";
document.getElementById("fname_msg").innerHTML = "";
document.getElementById("lname_msg").innerHTML = "";
       
	   if(x== "" && y== "" && z== ""){
	  
	   document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	    document.getElementById("fname_msg").innerHTML="Please Enter a First Name ";
		 document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
		  alert("You forgot to fill in the following Field's Id, First Name and Last Name");
		  
		  return false;
	   }else{
	   if(y== "" && z=="")
	   {
	              document.getElementById("fname_msg").innerHTML="Please Enter a First Name ";
				  document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
				  alert("You forgot to fill in the following Field's First Name and Last Name");
				  
				return false;
	   }else if(x== "" && y=="")
	   {
	   document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	   document.getElementById("fname_msg").innerHTML="Please Enter a First Name "; 
	   alert("You forgot to fill in the following Field's ID and First Name");
	   
	   return false;
	   }else if(x== "" && z==""){
	    document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	   document.getElementById("lname_msg").innerHTML="Please Enter a Last Name "; 
	   alert("You forgot to fill in the following Field's ID and Last Name");
	   
	   return false;
	   }
	   else if(x=="" || x== null)
	   {
	   document.getElementById("id_msg").innerHTML="Please Enter an ID"; 
	   alert("You forgot to fill in the following Field ID");
	   
	   return false;
	   }
	   else if(y=="" || y== null)
	   {
	   document.getElementById("fname_msg").innerHTML="Please Enter a First Name "; 
	   alert("You forgot to fill in the following Field First Name");
	   
	   return false;
	   }
	   else if(z=="" || z== null)
	   {
	   document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
	   alert("You forgot to fill in the following Field Last Name");
	   
	    return false;
	   }
	   else
	   {
	   document.getElementById("id_input").innerHTML="<b>ID: </b> " +x;
    document.getElementById("id_fname").innerHTML="<b>FirstName:</b> "+y;
    document.getElementById("id_lname").innerHTML="<b>LastName:</b> "+z;
    document.getElementById("myform").reset();
	   }
}
    
    
    
    return true;
     
}

