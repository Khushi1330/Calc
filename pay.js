document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const nameInput = document.getElementById('name');
        const cardNumberInput = document.getElementById('cardNumber');
        const expiryInput = document.getElementById('expiry');
        const cvvInput = document.getElementById('cvv');
        const inputData={
            "operation": "insert",
            "name": nameInput.value,
            "cardNumber": cardNumberInput.value,
            "expiry": expiryInput.value,
            "cvv": cvvInput.value
        }

        const apiEndpoint = 'https://lig1akz2ng.execute-api.ap-south-1.amazonaws.com/prod';
  console.log(JSON.stringify(inputData));
  // Fetch options
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Add any additional headers if needed
    },
    body: JSON.stringify(inputData)
  };
  
  // Make the API call
  fetch(apiEndpoint, fetchOptions)
    .then(response => {
      // Check if the response status is OK (2xx)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then(result => {
      // Process the result
      console.log('API Result:', result);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error.message);
    });
  
}); 
        // Validate name (no numbers allowed)
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(nameInput.value)) {
            alert('Please enter a valid name without numbers.');
            return;
        }

        // Validate card number (only capital letters and numbers)
        const cardNumberRegex = /^[A-Z0-9]*$/;
        if (!cardNumberRegex.test(cardNumberInput.value)) {
            alert('Please enter a valid card number with capital letters and numbers only.');
            return;
        }

        // Validate CVV (3 digits)
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(cvvInput.value)) {
            alert('Please enter a valid CVV with 3 digits.');
            return;
        }

        // Validate expiry date (MM/YY format)
        const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!expiryRegex.test(expiryInput.value)) {
            alert('Please enter a valid expiry date in MM/YY format.');
            return;
        }

        // Show confirmation message
        alert('Payment Successful! Redirecting to Scientific Calculator.');

        // Redirect to scientific calculator page after confirmation
        window.location.href = 'scientific.html';
    });

    
