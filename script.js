//add event listener to the button that will trigger the addItem function when clicked
document.getElementById("add-button").addEventListener("click", addItem);
//in the addItem funcion, Get the input value using the Id, iff its not empty then create a new list Item
function addItem(){
    let input = document.getElementById("input-text").value.trim();
    if(input !== ""){
        //Set the text of the list item to input value
        let listItem = document.createElement("li");
        listItem.textContent = input;
        //append the new list item to the listcontainer
        document.getElementById("list-container").appendChild(listItem);
        //clear the input value
        document.getElementById("input-text").value = "";

    }

}


