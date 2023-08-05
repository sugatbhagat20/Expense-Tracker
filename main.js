var form = document.getElementById("form");

var list = document.getElementById("list");

var nameItem = document.querySelector("#name");
var amountItem = document.querySelector("#amount");

form.addEventListener("submit", addItem);
list.addEventListener("click", del);
list.addEventListener("click", editItem);

let key = {};
function addItem(e) {
  e.preventDefault();

  //get the form value
  var selectElement = document.querySelector("#expense");
  var input3 = selectElement.options[selectElement.selectedIndex].value;

  // if (input1 && input2) {
  key = { name: nameItem.value, amount: amountItem.value, expense: input3 };

  localStorage.setItem(nameItem.value, JSON.stringify(key));
  // }
  var input1 = document.getElementById("name").value;
  var input2 = document.getElementById("amount").value;
  //create a new li element
  var li = document.createElement("li");
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  //give classname to the li element
  li.className = "items";
  deleteBtn.className = "delete btn btn-dark";
  editBtn.className = "edit btn btn-info";

  // Add a unique key as a data attribute to the li element
  li.dataset.name = input1;
  li.dataset.amount = input2;

  deleteBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));

  //apend the txt
  li.appendChild(document.createTextNode(input1));

  li.appendChild(document.createTextNode(input2));
  li.appendChild(document.createTextNode(input3));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  //append li to ul
  list.appendChild(li);
}

function del(e) {
  var li = e.target.parentElement;
  var itemName = li.dataset.name;

  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;

    localStorage.removeItem(itemName);

    list.removeChild(li);
  }
}

function editItem(e) {
  var li = e.target.parentElement;
  var itemName = li.dataset.name; //getting name of the expense
  var itemAmount = li.dataset.amount; //getting amount of the expense
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    //setting back values to the placeholders
    document.getElementById("name").value = itemName;
    document.getElementById("amount").value = itemAmount;

    localStorage.removeItem(itemName);

    list.removeChild(li);
  }
}
