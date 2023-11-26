const wrapper= document.querySelector('.wrapper');
const registerLink= document.querySelector('.register-link');
const loginLink= document.querySelector('login-link');


registerLink.oneclick = () => {
    wrapper.classList.add('active');
}
loginLink.oneclick = () => {
    wrapper.classList.remove('active');
}


