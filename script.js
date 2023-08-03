'use strict';


const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmpasswordInput = document.getElementById('confirm-password');

const btnsubmit = document.getElementById('btn-submit');

const formE1 = document.getElementById('form');

// function
        function showErrorMesssage (input, message){
        const formContainerE1 = input.parentElement;

        input.classList.remove('success');

        input.classList.add('error-input');

        const errorE1 = formContainerE1.querySelector('.error');

        errorE1.classList.add('error-message');
        errorE1.innerText = message;
        }

        function showSuccess(input){
            input.classList.add('success');
            input.classList.remove('error-input');

        const formContainerE1 = input.parentElement;

        const errorE1 = formContainerE1.querySelector('.error');

        errorE1.classList.remove('error-message');
        

        }

        const checkLength = function (input, message,min,max) {
            if(input.value.trim().length < min){
            showErrorMesssage(input,`${message} should be at least ${min}characters`);
            }else if (input.value.trim().length > max){
            showErrorMesssage(input,`${message} should be less than ${max}characters`);
            }else{
            showSuccess(input);
    }
        };

        const isEmailAddress = function(str) {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean 
        }

        const comparepasswords = function(inputOne, inputTwo){
            if(inputOne.value.trim() === inputTwo.value.trim() )  {
                showSuccess(inputTwo);
            }else{
                showErrorMesssage(inputTwo, 'Password and Confirm Password is Not Matching');
            }
        };

        const checkEmail = function(input){
            if(isEmailAddress(input.value.trim())){
                showSuccess(input)
            }else{
                showErrorMesssage(input,`Enter a Valid email address`)
            }
        };


    
        const inputs = [
            {input:usernameInput, message:'Username'},
            {input:emailInput, message:'Email'},
            {input:passwordInput, message:'Password'},
            {input:confirmpasswordInput, message: 'Confirm Password'},
        ];

        const checkRequired =  function(input, message) {
            if(input.value.trim()){

            }else{
            showErrorMesssage(input, `${ message} is Mandatory`);
        }
    };
    


    formE1 = addEventListener('submit',function(event){event.preventDefault();

    for (let i = 0; i<inputs.length; i++){
        checkRequired(inputs[i].input,inputs[i].message)
    }

    checkLength(usernameInput,'Username', 5, 16);
    checkLength(passwordInput,'Password', 8, 12);
    checkEmail(emailInput);
    
    comparepasswords(passwordInput, confirmpasswordInput);
});