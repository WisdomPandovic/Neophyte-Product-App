$('#signup_btn').click(function(event){
    event.preventDefault();
    
    let pattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let email = $("#email").val();
    if(pattern.test(email)){
     $('#errr_email').html("") 
    }else{
     $('#errr_email').html("Please enter correct email ID") 
    }


    let passlength = $("#password").val().length;
    if(passlength < 8){
     $('#errr_pwd').html("Password can't be less than 8") 
    
   }else{
     $('#errr_pwd').html("") 
   }


    if($('#email').val() == "" || $('#password').val() == "" || $('#firstname').val() == "" || $('#phone_no').val() == ""){
      $('#msg').html("fields cannot be empty") 
    }else{
      $('#msg').html('')


    $.ajax({
      type:"post",
      url:"http://159.65.21.42:9000/register",
      data:{
      "name": $('#firstname').val(),
      "phone": $('#phone_no').val(),
      "email": $('#email').val(),
      "password": $('#password').val(),
     },
      success:function(res){
        console.log("Success response:", res);
          if(res.error){
            $('#msg').html(res.error)
          }else{
              $('#msg').html("User Created")
              window.location.href = "account-login.html";
          }
      },
      error: function (err) {
        console.error("Error:", err);
    }
    })
}
  })