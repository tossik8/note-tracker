let notes = 0;
function createElements(){
    if(document.getElementById("textarea").value === "") return;
    let div = document.createElement("div");
    let title = document.createElement("h4");
    let content = document.createElement("p");
    let button = document.createElement("button");
    button.setAttribute("value", ++notes);
    button.addEventListener("click", () => {
        document.getElementById(button.value).remove();
        document.getElementById("textarea").focus();
    });
    div.setAttribute("id", notes);
    let date = new Date();
    title.innerHTML = date.getDay()+"/" + date.getMonth() + "/" + date.getFullYear() + ", "
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    content.innerHTML = document.getElementById("textarea").value;
    addElements(div, title, content, button);
}
function addElements(div, title, content, button){
    div.append(title);
    div.append(button);
    div.append(content);
    document.getElementById("notes").appendChild(div);
    document.getElementById("textarea").value = "";
    document.getElementById("textarea").focus();
}
