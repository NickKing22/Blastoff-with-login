//This function will run when the submit button is pressed
function validate()
    {
        //This variable gets the first name input
        var user1 = document.getElementById("first").value;
        //This variable gets the last name input
        var user2 = document.getElementById("last").value;
        //This variable puts the first and last name inputs together
        var full = user1 +" " + user2;
        //This variable gets the password input
        var pass = document.getElementById("password").value;
        
        //This if statement is for the password, stating that if the password is greater than three characters, do this..
        if (pass.length >= 3) 
            {
                //This alert will show if the password is greater than three characters
                alert("The badge number provided is invalid, please check your ID and try again.");
                
            }
        //This else if statement will take effect if the first if statment is false
        else if (full.length >= 20)
            {
                //This alert will show when the combined first and last name are greater than 20 characters
                alert("The name" +full +"is invalid, please try again.");
            }
        //If the two statments above are both false then the following statement will take effect
        else
        {
            //If both the first and last name are less than 20 characters and the password is less than 2 characters, then the user will gain access to the following website
            alert("Access granted! Welcome "+full+"!");
                //This next line will send the user to the linked page
                window.location = "blastoff2.html";
        }



    }