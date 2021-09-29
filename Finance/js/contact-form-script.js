/*==============================================================*/
// Battle Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict

$("#tg-formtheme").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

$("#tg-themeform").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorContact();
        submitMSGContact(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitFormContact();
    }
});

$("#tg-formsignup").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSGSignup(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitFormSignUp();
    }
});

function submitFormSignUp(){
    // Initiate Variables With Form Content
    var name = $("#signup-name").val();
    var email = $("#signup-email").val();


    $.ajax({
        type: "POST",
        url: "php/form-process-signup.php",
        data: "name=" + name + "&email=" + email ,
        success : function(text){
            console.log(text);
            if (text == "Success"){
                formSuccessSignup();
            } else {
                formErrorSignup();
                submitMSGSignup(false,text);
            }
        }
    });
}

function submitFormContact(){
    // Initiate Variables With Form Content
    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var phonenumber = $("#contact-number").val();
    var message = $("#contact-message").val();
    var contactEmail = $('#contact-address').val();
    console.log(contactEmail);
    $.ajax({
        type: "POST",
        url: "php/form-contact.php",
        data: "contactemail="+ contactEmail +"&phonenumber=" + phonenumber + "&name=" + name + "&email=" + email + "&message=" + message ,
        success : function(text){
            console.log(text);
            if (text == "Success"){
                formSuccessContact();
            } else {
                formErrorContact();
                submitMSGContact(false,text);
            }
        }
    });
}

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phonenumber = $("#phone-number").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php.php",
        data: "phonenumber=" + phonenumber + "&name=" + name + "&email=" + email ,
        success : function(text){
            console.log(text);
            if (text == "Success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#tg-formtheme")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formSuccessContact(){
    $("#tg-themeform")[0].reset();
    submitMSGContact(true, "Message Submitted!")
}

function formSuccessSignup(){
    $("#tg-formsignup")[0].reset();
    submitMSGSignup(true, "Message Submitted!")
}

function formError(){
    $("#tg-formtheme").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function formErrorContact(){
    $("#tg-themeform").removeClass().addClass('tg-themeform').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function formErrorSignup(){
    $("#tg-formsignup").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h5 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSGContact(valid, msg){
    if(valid){
        var msgClasses = "h5 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmitContact").removeClass().addClass(msgClasses).text(msg);
}

function submitMSGSignup(valid, msg){
    if(valid){
        var msgClasses = "h5 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmitSignup").removeClass().addClass(msgClasses).text(msg);
}
}(jQuery)); // End of use strict