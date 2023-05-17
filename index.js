const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addSound = new Audio('move.mp3');
const deleteSound = new Audio('food.mp3');

function addTask(){
   addSound.play();
  if(inputBox.value === ''){
    alert("you must write something!");
  }else{
  let li = document.createElement("li");
  li.innerText = inputBox.value;
  console.log(inputBox.value, li.innerHTML)
  listContainer.appendChild(li);

  

  let span = document.createElement("span");
  span.innerHTML = "\u00d7"
  li.appendChild(span);
  }
  inputBox.value ='';
  saveData();
}

listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
  saveData();
 }
 else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
  deleteSound.play();
 }
})

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function displayTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
//  for display task everytime open
displayTask();


//search list
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchTask);

function searchTask() {
  const searchTerm = searchInput.value.toLowerCase();
  const tasks = listContainer.getElementsByTagName("li");
  
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskText = task.innerText.toLowerCase();
    
    if (taskText.includes(searchTerm)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  }
}