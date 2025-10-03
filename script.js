console.log("Hello World");

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", function(e) {
        e.preventDefault()});

    const task = input.value.trim();
    const deadline = date.value;

    if (todoInput.value.trim() !== "" && todoDate.value !== "") { 
        
        const li = document.createElement("li")
        li.textContent = `${todoInput.value} - ${todoDate.value}`;

        //tombol hapus//
        const btn = document.createElement("button");
        btn.textContent = "x";
        btn.style.marginLeft = "10px";
        btn.onclick = () => li.remove();

        li.appendChild(btn);
        todoList.appendChild(li);

        //reset input//
        todoInput.value = "";
        todoDate.value = "";
      } else {
        alert("Isi task dan tanggal dulu ya!");
      }
    }
