
$('#signin_btn').click(function(){

    let pattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let email = $("#email").val();
    if(pattern.test(email)){
     $('#errr_msg').html("") 
    }else{
     $('#errr_msg').html("Please enter correct email ID") 
    }

    let passlength = $("#password").val().length;
    if(passlength < 8){
     $('#err_msg').html("Password can't be less than 8") 
    
   }else{
     $('#err_msg').html("") 
   }


   if($('#email').val() == "" || $('#password').val() == ""){
     $('#errr_msgs').html("Email or password cannot be empty") 
   }else{
     $('#errr_msgs').html('')
           
     $.ajax({
       url:"http://159.65.21.42:9000/login",
       type:"POST",
       data:{
         "email":$('#email').val(),
         "password":$('#password').val()
       },
       success:function(res){
         console.log(res)
         if(res.error){
           $('#errr_msgs').html(res.error)            
         }else{
           $('#errr_msgs').html("Login Successful")  
           localStorage.setItem("user",JSON.stringify(res))
           window.location.href = "index.html";
         }
        
       },
       error:function(err){
         console.log(err.statusCode)
         $('#msg').html(err) 
       }
     })

   }
 })