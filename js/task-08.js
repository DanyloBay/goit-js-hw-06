const form = document.querySelector('.login-form');
const inputFieldMail = document.querySelector(
  '.login-form input[type="email"]',
);
const inputFieldPass = document.querySelector(
  '.login-form input[type="password"]',
);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (inputFieldMail.value === '' || inputFieldPass.value === '') {
    alert('Please enter all login details');
  }

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  form.reset();
}
