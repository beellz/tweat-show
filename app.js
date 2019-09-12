const form = document.querySelector("form"); //select a form only
form.addEventListener('submit', (event) => { //add event
    event.preventDefault(); //prevent Default to load 
    
    const NameValue = document.getElementById("formName").value; //get the document value
    const textValue = document.getElementById("messageField").value; // get the document value

    const mew = {  //make it an object
        NameValue,
        textValue
    };

    var parent = document.getElementById("element"); //getting place where to put the element 
    
    const div = document.createElement('div'); //making a div class
    div.classList = "look"; //giving it class for style
    const header = document.createElement('h3'); // creating header with h3
    header.textContent = mew.NameValue; //creating the value

    const content = document.createElement('p'); //creating a p element
    content.textContent = mew.textValue; //giving object value

    div.appendChild(header);  //appending the header to the div
    div.appendChild(content); // appending the child element <p> to the inside of it p element

    parent.appendChild(div); // putting the element on the html using appendchild
      

    console.log(mew.NameValue);
    console.log(mew.textValue);
    console.log(header);
    console.log(content);
    form.reset(); // this will reset the form object 
});