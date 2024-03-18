  // JavaScript code for form validation
const form = document.querySelector('form');
const inputField = document.querySelector('nameInput');

	// Prevent form from submitting
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted');
  });

  // Retrieve the input field value
  let nameInput = document.getElementById('name');
  console.log(nameInput);


  // Regular expression pattern for alphanumeric 
  let regex = /^[a-zA-Z0-9]*$/;
  if (!regex.test(nameInput)) {
    alert('Invalid format! Only use letters and numbers.');
  };

  // Check if the input value matches the pattern
function validateInput() {
  let text = document.getElementById('name').value;
  let regex = /^[a-zA-Z0-9]*$/;
  if (!regex.test(text)) {
    alert('Invalid name pattern!');
  }
};
 
// Valid input: display confirmation and submit the form
document.getElementById('form').addEventListener('submit', function(event) {
  let name = document.getElementById('inputField').value;
  if (name === regex) {
    alert('Name is valid. The form has been submitted.');
  }
});


// Invalid input: display error message
document.getElementById('form').addEventListener('submit', function(event) {
  let name = document.getElementById('inputField').value;
  if (name != regex) {
    alert('Name is invalid. The form has not been submitted.');
    console.log('Form not submitted.')
  }
});
