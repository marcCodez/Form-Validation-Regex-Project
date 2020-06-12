// Form Blur Event Listeners
// blur occurs when an elment loses focus
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName(){
    // get element
    const name = document.querySelector('#name');
    //add regex
    // must start with a letter and be between 2-10 characters
    const re = /^[a-zA-Z]{2,10}$/;

    // if the inputted character is valid 
    !re.test(name.value) ?
        // give the element the invalid class
        (name.classList.add('is-invalid')) :
          // if valid remove the class
        (name.classList.remove('is-invalid'))
}


function validateZip(){
       // get element
       const zip = document.querySelector('#zip');
       //add regex
       // Regex for aus post codes
       const re = /^[0-9]{4}$/;
   
       // if the inputted character is valid 
       !re.test(zip.value) ?
           // give the element the invalid class
           (zip.classList.add('is-invalid')) :
           // if valid remove the class
           (zip.classList.remove('is-invalid'))

    
}
function validateEmail(){
       // get element
       const email = document.querySelector('#email');
       //add regex
       // We want letters, numbers, underscors and dots
       // escape character to treat characters as literals
       // + for more than one, same thing for the suffix
       //then we need a literal .
       // 2-10 chars, around 10 for tld (top level domain)
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,10})$/;
   
       // if the inputted character is valid 
       !re.test(email.value) ?
           // give the element the invalid class
           (email.classList.add('is-invalid')) :
             // if valid remove the class
           (email.classList.remove('is-invalid'))
    
}
function validatePhone(){
        // get element
        const phone = document.querySelector('#phone');

         const re = /^(\+61)\s?0?4([0-9]\s?){8}$/;
    
        // if the inputted character is valid 
        !re.test(phone.value) ?
            // give the element the invalid class
            (phone.classList.add('is-invalid')) :
              // if valid remove the class
            (phone.classList.remove('is-invalid'))
    
}