const loadTodo = () =>{
    const url ="https://jsonplaceholder.typicode.com/todos";

    fetch(url)
    .then((res) => res.json())
    .then((json) => displayTodo(json));
}

const displayTodo = (todos) =>{
 const todoContainer = document.getElementById("todo-container");
 todoContainer.innerHTML ="";

 todos.forEach((todo) =>{
    console.log(todo);
 } )
 
}
loadTodo()