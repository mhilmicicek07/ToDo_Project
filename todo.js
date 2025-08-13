//! ToDo Eleman Ekleme

//? Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
// const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4","Todo 5","Todo 6"];
let todos;


//? Load Items Fonskiyonu

function loadItems() {
    // items.forEach(function (item) {
    //     createItem(item);
    // });
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    })
}

loadItems();


eventListeners();

function eventListeners() {
    // Submit Event
    // console.log("submit")
    form.addEventListener("submit", addNewItem);
    // Delete an Item
    taskList.addEventListener("click", deleteItem);
    // Delete all Item
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

//? Get Items From Local Storage

function getItemsFromLS() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

//? Set Item To Local Storage

function setItemToLS(newTodo) {
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {
    // li(liste elemanı) oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    // li.appendChild(document.createTextNode(text));
    li.appendChild(document.createTextNode(newTodo));

    // a(link) oluşturmak

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // Birbiriyle Bağlantılama 

    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e) {
    // console.log("submit")

    if (input.value === '') {
        alert("add new item");
        // console.log("submit");
    }

    // // li oluşturma

    // const li = document.createElement("li");
    // li.className = "list-group-item list-group-item-secondary";
    // li.appendChild(document.createTextNode(input.value));

    // // a oluşturma

    // const a = document.createElement("a");
    // a.classList = "delete-item float-right";
    // a.setAttribute("href", "#");
    // a.innerHTML = '<i class="fas fa-times"></i>';

    // li.appendChild(a);
    // taskList.appendChild(li);

    //* Create Item

    createItem(input.value);

    setItemToLS(input.value);

    input.value = "";

    e.preventDefault();

}

//? Eleman Silme

function deleteItem(e) {

    // console.log(e.target)

    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek İstediğinize Emin Misiniz?")) {
            // console.log(e.target);
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

//? Local Storage dan eleman silme

function deleteTodoFromStorage(deletetodo) {
    let todos = getItemsFromLS();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

//? Tüm Elemanları Silme

function deleteAllItems(e) {
    if (confirm("Tüm Elemanları Silmek İstediğinize Emin Misiniz?")) {

        // taskList.childNodes.forEach(function (item) {
        //     console.log(item)
        //     if (item.nodeType == 1) {
        //         item.remove();
        //     }
        // });
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    // taskList.innerHTML=""; // Alternatif Yöntem
}