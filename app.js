const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const NameValue = document.getElementById("formName").value;
    const textValue = document.getElementById("messageField").value;
    
    console.log(NameValue);
    console.log(textValue);
});
