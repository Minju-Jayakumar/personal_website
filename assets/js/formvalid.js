$("#contactForm").submit((e)=>{
    e.preventDefault();
    if($("#contactForm").valid()){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxNDlAdmCuRwYFMEabfoxE-hQ9263kFVu38Y1pnZJkBL89kiUObregNqqQ8-naHjhYL/exec",
            data:$("#contactForm").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                $("#contactForm")[0].reset();
                // window.location.reload();
            },
            error:function (err){
                alert("Something Error");
            }
        })
    }
})

function validateContactForm(){
    var valid = $("#contactForm").validate({
        rules:{
            name:{
                required: true,
                minlength: 3,
                maxlength: 30,
                lettersonly: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email:{
                required: true,
                email: true,
                minlength: 5,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            subject:{
                required: true,
                minlength: 5,
                maxlength: 30,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            message:{
                required: true,
                minlength: 8,
                maxlength: 30,
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        }
    })
    return valid;
}


jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Only letters and spaces are allowed");


$(document).ready(function(){
    console.log("bbbbbb")
    validateContactForm();
})