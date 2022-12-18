
const formEl = document.querySelector('.login-form');

const onSubmit = (event) => {
    const {
    elements: { email, password }
    } = event.currentTarget;
    
if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
}
console.log(`Email: ${email.value} Password: ${password.value}`);  
     event.currentTarget.reset();
     event.preventDefault();
}

formEl.addEventListener("submit", onSubmit);