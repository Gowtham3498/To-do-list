let input=document.getElementById('input')
let btn=document.getElementById('btn')
let todolist=document.getElementById('todolist')
let todos=[];
window.onload = () =>{todos=JSON.parse(localStorage.getItem('todos')) || []

todos.forEach(todo => addtodo(todo))
    
};

btn.addEventListener('click',()=>{todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=""

})
function addtodo(todo){
    let li=document.createElement('li')
    li.innerText=todo;
    todolist.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="&#x2716"
    li.appendChild(span)
    li.addEventListener('click',()=>{
        li.style.textDecoration ='line-through';
        // todolist.removeChild(li)
        remove(todo)
    })
    li.addEventListener('dblclick',()=>{
        todolist.removeChild(li)
        remove(todo)
    })
}
function remove (todo){
    let index=todos.indexOf(todo)
    if(index >-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}