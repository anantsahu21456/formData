let form = document.getElementById("form")
 let main = document.getElementById("main")
 form.addEventListener("submit",function(event)
    {
        event.preventDefault();
        let name = event.target.username.value;
        let email = event.target.useremail.value;
        let pass = event.target.userpass.value;
        let phone = event.target.userphone.value;
        let message = event.target.usermessage.value;
        console.log(name,email,phone,message)

        

          let userdetails = {
            Name:name,
            Email:email,
            Pass: pass,
            Phone:phone,
            Message:message
        }
        localStorage.setItem(email,JSON.stringify(userdetails))
        
        event.target.reset();

    }
   );

 // ~ toggle the password to change in text formate
function togglepassword() {
  var a = document.getElementById("anant");
  if (a.type === "password") 
  {
     a.type = "text";
  }
   else
   {
       a.type = "password";
   }
}