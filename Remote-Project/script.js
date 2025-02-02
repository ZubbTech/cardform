document.getElementById('userForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  

    if (!name || !email) {  
        alert('Please fill out all fields.');  
    } else {  
        alert('Form submitted successfully!');  
          
    }  
});