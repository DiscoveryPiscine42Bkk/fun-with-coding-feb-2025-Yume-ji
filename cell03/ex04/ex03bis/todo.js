$(document).ready(function() {
    $('#addnew').click(function() {
        const todo = prompt("Text here : ");
        if (todo && todo.trim() !== "") {
            const newtodo = $('<div></div>').text(todo);
    
            newtodo.click(function() {
                if (confirm("Remove its?")) {
                    newtodo.remove();
                    scookie();
                }
            });
            $('#ft_list').prepend(newtodo);
            scookie();
        }
    })
})


function scookie() {
    const todos = [];
    $('#ft_list').children().each(function() {
        todos.push($(this).text());
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/; max-age=86400";
    console.log("Saved: ", document.cookie);
}

function lcookie() {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cook = cookies[i].split("=");
        if (cook[0] === "todos") {
            const todos = JSON.parse(cook[1]);
            console.log("Loaded: ", todos);
            for (let i = 0; i < todos.length; i++) {
                const newtodo = $('<div></div>').text(todos[i]);

                newtodo.click(function() {
                    if (confirm("Remove its?")) {
                        newtodo.remove();
                        scookie();
                    }
                });
                $('#ft_list').prepend(newtodo);
                scookie();
            }
            break;
        }
    }
}

window.onload = function() {
    lcookie();
};