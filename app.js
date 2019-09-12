
const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    var NameValue = document.getElementById("formName").value;
    const textValue = document.getElementById("messageField").value;


    var para = document.createElement("p"); //creating a p element
    var node = document.createTextNode(NameValue); //creating the value
    // var pode = document.createTextNode(textValue);
    para.appendChild(node);     // appending the child element <p> to the inside of it p element
    // para.appendChild(pode);

    var parent = document.getElementById("element"); //getting place where to put the element 
    parent.appendChild(para);       // putting the element on the html using appendchild
    
    console.log(NameValue);
    console.log(textValue);
});
