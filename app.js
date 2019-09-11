
// function submit = 
// document.getElementById("submit").addEventListener("onclick", function(event)  {
//     event.preventDefault();
//     console.log("done");    
//     alert("hello");
// }, true);
//     const submit = document.getElementById("formSubmit")
//     submit.addEventListener("submit", function submit(e) {
//     e.preventDefault();
//     const textarea = document.getElementById("messageField");
//     let textcontent = textarea.value;
//     console.log(textcontent);
//   });



// function show(evt) {
//     evt.preventDefault();
    
//     alert("hello");
// }


const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const NameValue = document.getElementById("formName").value;
    const textValue = document.getElementById("messageField").value;

    console.log(NameValue);
    console.log(textValue);
});

