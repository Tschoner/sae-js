window.onload = function() {
    promptUser();

    function promptUser() {
        let userInput = prompt("Enter your input:");
        let list = document.getElementById("user-input-list");

        if (userInput === "!stop") {
            let listItem = document.createElement("li");
            let boldElement = document.createElement("b");
            boldElement.textContent = "--- End of List ---";
            listItem.appendChild(boldElement);
            list.appendChild(listItem);
        } else {
            let listItem = document.createElement("li");
            let paragraph = document.createElement("p");
            paragraph.textContent = userInput;
            listItem.appendChild(paragraph);
            list.appendChild(listItem);
            setTimeout(promptUser, 3000);
        }
    }
}
