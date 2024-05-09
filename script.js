let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// addEventListener is a method used in JavaScript to attach an event handler to a specified element. It allows you to listen for certain events, such as clicking a button, hovering over an element, or pressing a key, and then execute a function in response to that event.
form.addEventListener("submit", (e) => {
    // preventDefault is a method available in event objects in JavaScript, particularly in the context of handling DOM events. It's used to stop the default behavior of an event from occurring.    
    e.preventDefault();
    console.log("button clicked");

    // formValidation = if the textarea is blank you got failure , if the area you got success in your console.     
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {

        // innereHTML can create a text in html with the #.        
        msg.innerHTML = "Post cannot be blank"
        console.log("failure");
    }
    else {

        // if the innerHTML no text inside in the double qoutes it means blank        
        msg.innerHTML = ""
        console.log("success");
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML +=
        `
    <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
        `;

// make blank the input.value to reset the textarea.        
        input.value = "";
};

let deletePost = (e) => {

// .remove to delete the tarhet.    
// .parentElement to target the parent.     
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {

//  .previousElementSibling to jump into prev. elements
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};