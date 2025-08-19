let form = document.getElementById('register-form');
console.log(form);
let message = document.querySelector('.massege')
console.log(message)

form.addEventListener('submit',function(e){

    e.preventDefault()

    let userName = document.getElementById('reg-name').value
    console.log(userName);
    let password = document.getElementById('reg-password').value
    console.log(password);
    let confPassword = document.getElementById('reg-password-confirm').value
    console.log(confPassword);
    let address = document.getElementById('reg-address').value
    console.log(address);
    let phone = document.getElementById('reg-phone').value
    console.log(phone);

    if(password !== confPassword){
        alert('not match password');
    }

    message.style.display="block";

    message.innerHTML =`<p>Welcome ${userName}<br>
        your password is ${password} <br>,phone: ${phone} <br>and address: ${address}</p>`

    

})
    

