function newt() {
    const todo = prompt("Text here : ");

    if (todo && todo.trim() !== "") {
        const newtodo = document.createElement("div");
        newtodo.textContent = todo;

        newtodo.addEventListener("click", function() {
            if (confirm("Remove its?")) {
                newtodo.remove();
                scookie();
            }
        });

        const list = document.getElementById("ft_list");
        list.insertBefore(newtodo, list.firstChild);

        scookie();

    }
}

function scookie() {
    const todos = [];
    const listItems = document.getElementById("ft_list").children;
    for (let i = 0; i < listItems.length; i++) {
        todos.push(listItems[i].textContent);
    }
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/; max-age=86400";
    console.log("Saved:", document.cookie);
}

function lcookie() {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === "todos") {
            const todos = JSON.parse(cookie[1]);
            console.log("Loaded:", todos);
            for (let i = 0; i < todos.length; i++) {
                const newtodo = document.createElement("div");
                newtodo.textContent = todos[i];

                newtodo.addEventListener("click", function() {
                    if (confirm("Remove its?")) {
                        newtodo.remove();
                        scookie();
                    }
                })

                const list = document.getElementById("ft_list");
                list.appendChild(newtodo);
            }
            break;
        }
    }
}

window.onload = function() {
    lcookie();
};

document.getElementById("addnew").addEventListener("click", newt);