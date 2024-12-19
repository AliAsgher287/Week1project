const Taskinput = document.getElementById("task-input");
const Taskbtn = document.getElementById("task-btn");
const Tasklist = document.getElementById("task-list");

Taskbtn.addEventListener("click", () => {
  const tasktext = Taskinput.value.trim();
  if (tasktext !== "") {
    const li = document.createElement("li");
    li.textContent = tasktext;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteBtn);

    
    Tasklist.insertBefore(li, Tasklist.firstChild);
    Taskinput.value = "";
  }
});

Taskinput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    Taskbtn.click();
  }
});
