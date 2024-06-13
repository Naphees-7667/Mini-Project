const todoContainer = document.getElementById("allTodo")

const btn = document.querySelector("#addBtn")

const todoInput = document.querySelector("#todoInput")

let data = JSON.parse(localStorage.getItem("allTodo")) || []

let displayTodo = () => {
    data.map( (element) => {
        addTodo(element);
    })
}

const addTodo = (value) => {

    const newElement = document.createElement('div');
    newElement.setAttribute('class','singleTodo')

    newElement.innerHTML = `<h2>${value}</h2>
            <input type="checkbox" name="" id="">
            <button>Remove Todo</button>`;

    const buttonEle = newElement.getElementsByTagName('button')

    buttonEle[0].addEventListener('click', (evt) => {
        evt.target.parentNode.remove();
    })

    const inputButton = newElement.getElementsByTagName('input')

    inputButton[0].addEventListener('click', (evt) => {
        const list = evt.target.previousElementSibling.classList;
        list.toggle("checked")
    })

    todoContainer.appendChild(newElement);
    todoInput.value = ""
}

btn.addEventListener('click' , (evt) => {
    evt.preventDefault()

    const value = todoInput.value;

    if(value == ""){
        alert("Task is empty.......")
        return
    }

    data.push(value);

    localStorage.setItem ("allTodo",JSON.stringify(data))

    addTodo(value)

})

displayTodo();