
const signInBtn = document.querySelector('.signIn-btn');
const emailOne = document.querySelector('.email-id');
const passwordOne = document.querySelector('.pass-word');
const emailLabel = document.getElementById('email-label');


const emailCheck = (e) => {
    const emailReggEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailOne.value){
        if(!emailReggEx.test(emailOne.value)){
            e.preventDefault();
           const emailSpan = document.getElementById('email-span');
           emailSpan.innerText= "Please Enter Valid Email";
         }
         else{
             
             const emailSpan = document.getElementById('email-span');
             emailSpan.innerText= "";
         }
    }else{
        const emailSpan = document.getElementById('email-span');
        emailSpan.innerText= "";
    }    
}

const passwordCheck = () => {
    const passwordRegEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g;
    if(passwordOne.value){
        if(!passwordRegEx.test(passwordOne.value)){
            const PasswordSpan = document.getElementById('password-span');
            PasswordSpan.innerText = "Please Enter a Strong Password";
        }else{
            const PasswordSpan = document.getElementById('password-span');
            PasswordSpan.innerText = "";
        }
    }else{
        const PasswordSpan = document.getElementById('password-span');
        PasswordSpan.innerText = "";
    }
   

}

const fullCheck = () => {
    emailCheck();
    passwordCheck();
}

emailOne.addEventListener('keyup',emailCheck);
passwordOne.addEventListener('keyup',passwordCheck);
signInBtn.addEventListener('click',fullCheck);