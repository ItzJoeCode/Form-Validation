document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    function checkFormValidity() {
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
  
      const isEmailValid = validateEmail(email);
      const isFirstNameValid = firstName !== '';
      const isLastNameValid = lastName !== '';
      const isMessageValid = message !== '';
  
      const isFormValid = isEmailValid && isFirstNameValid && isLastNameValid && isMessageValid;

      if (isFormValid) {
        submitBtn.classList.add('valid');
      } else {
        submitBtn.classList.remove('valid');
      }
  
      submitBtn.disabled = !isFormValid;
    }
  
    firstNameInput.addEventListener('input', checkFormValidity);
    lastNameInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
    messageInput.addEventListener('input', checkFormValidity);
  
    submitBtn.addEventListener('click', function() {
      const formData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };
      console.log(formData);
      setTimeout(function() {
        window.location.href = 'https://www.youtube.com';
      }, 30000); 
    });
  });
  