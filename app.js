const list = document.querySelector("ul");
const item = document.querySelector("#item");
const btn = document.querySelector("button");

function checkClick(event) {
    event.preventDefault();

    if (item.value !== "")
    {
        const input = item.value;
        
        item.value = "";
    
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");
        
        listItem.appendChild(span);
        listItem.appendChild(deleteBtn);
    
        span.textContent = input;
        deleteBtn.textContent = "Delete";
    
        list.append(listItem);
    
        deleteBtn.addEventListener("click", () =>{
            list.removeChild(listItem);
        })
    
        input.focus();
    }
}


btn.addEventListener("click", checkClick);