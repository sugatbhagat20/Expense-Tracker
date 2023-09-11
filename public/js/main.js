var form = document.getElementById("form");

var list = document.getElementById("list");

async function renderList() {
  //get the form value
  try {
    const expenses = await axios.get("http://localhost:4000/get/expenses");

    expenses.data.forEach((expense) => {
      //create a new li element
      var li = document.createElement("li");
      var deleteBtn = document.createElement("button");
      var editBtn = document.createElement("button");
      //give classname to the li element
      li.className = "items";
      deleteBtn.className = "delete btn btn-dark";
      editBtn.className = "edit btn btn-info";
      editBtn.id = expense.id;
      deleteBtn.id = expense.id;
      deleteBtn.appendChild(document.createTextNode("Delete"));
      editBtn.appendChild(document.createTextNode("Edit"));
      let span1 = document.createElement("span");
      span1.textContent = `${expense.name}  `;
      let span2 = document.createElement("span");
      span2.textContent = `${expense.amount}  `;
      let span3 = document.createElement("span");
      span3.textContent = `${expense.expense} `;
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);
      //apend the txt

      li.appendChild(deleteBtn);
      li.appendChild(editBtn);

      //append li to ul
      list.appendChild(li);
    });

    //   var selectElement = document.querySelector("#expense");
    // var input3 = selectElement.options[selectElement.selectedIndex].value;

    // var input1 = document.getElementById("name").value;
    // var input2 = document.getElementById("amount").value;
  } catch (e) {
    console.log(e);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  renderList();
});

async function del(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    let id = e.target.id;

    await axios.get(`http://localhost:4000/get/deleteExpense/${id}`);

    list.removeChild(li);
  }
}

list.addEventListener("click", (e) => {
  del(e);
});
// function editItem(e) {
//   var li = e.target.parentElement;
//   var itemName = li.dataset.name; //getting name of the expense
//   var itemAmount = li.dataset.amount; //getting amount of the expense
//   if (e.target.classList.contains("edit")) {
//     var li = e.target.parentElement;
//     //setting back values to the placeholders
//     document.getElementById("name").value = itemName;
//     document.getElementById("amount").value = itemAmount;

//     localStorage.removeItem(itemName);

//     list.removeChild(li);
//   }
// }
