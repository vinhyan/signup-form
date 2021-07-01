const form = document.querySelector('form')
const submitBtn = document.querySelector('button')
const inputs = document.querySelectorAll('input');


// Display error message:
const errInput = (input, errMsg, errIcon) => {

    input.type == 'email' ? errMsg.innerText = `Looks like this is not an email` : errMsg.innerText = `${input.placeholder} cannot be empty`;

    input.classList.add('error-input')

    errIcon.classList.add('error-icon')

}


const app = () => {

     form.addEventListener('submit', (e) => {

        inputs.forEach(input => {

            const errIcon = input.closest('.input-container').querySelector('img');

            const errMsg = input.nextElementSibling;

            if (input.type == 'email' && !input.value.includes('@')) {
                input.classList.add('red-text');
                input.placeholder = 'email@example.com'
                errInput(input, errMsg, errIcon);
                e.preventDefault();

            } else if (input.value == null || input.value == '') {
                input.classList.add('none-text')
                errInput(input, errMsg, errIcon);
                
                e.preventDefault();
                
        
            } else {
                input.classList.remove('error-input')
                errIcon.classList.remove('error-icon')
                errMsg.innerText = ''
            }
        })
       

     })


}

app();