// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('voteForm');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    // Input validation
    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    // Create and handle the promise
    new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    })
    .then(message => alert(message))
    .catch(error => alert(error));
  });
});
