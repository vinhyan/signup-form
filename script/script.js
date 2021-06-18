const form = document.querySelector('form')
const submitBtn = document.querySelector('button')
const errMsgDivs = document.querySelectorAll('.err-msg')
const nameAndPwInputs = document.querySelectorAll('input[type=text], input[type=password]')
const emailInput = document.querySelector('input[type=email]')
const passwordInput = document.querySelector('input[type=password]')



const app = () => {

     form.addEventListener('submit', (e) => {

        nameAndPwInputs.forEach(input => {
            if (input.value == null || input.value == '') {
                input.classList.add('none-text')
                const errMsgDiv = input.nextElementSibling; 
                errMsgDiv.innerText = `${input.placeholder} cannot be empty`

                input.style.border = '1px solid hsl(0, 100%, 74%)';

                const errorIcon = input.closest('.input-container').querySelector('img');
                errorIcon.classList.add('error-on')
                

                e.preventDefault();

            }
        })

        if (!emailInput.value.includes('@')) {
            emailInput.classList.add('red-text');
            emailInput.placeholder = 'email@example.com'
            const errMsgDiv = emailInput.nextElementSibling;
            errMsgDiv.innerText = `Looks like this is not an email`

            emailInput.style.border = '1px solid hsl(0, 100%, 74%)';

            const errorIcon = emailInput.closest('.input-container').querySelector('img');
            errorIcon.classList.add('error-on')
            e.preventDefault();
        }

     })




}

app();