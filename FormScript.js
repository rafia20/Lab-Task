// // Creating variable for that function 
// {
       var btn = document.querySelector(".btn btn-default");

//     // btn.addEventListener("onclick", addOnClick);
//     var selectedtr = null;

//     // function addOnClick() {

//     //     var transferdata = readData()
//     //     if (selectedtr==null){
//     //         insertdata(transferdata);


//     //     }

//     //     else{
//     //         update()
//     //     }
//     //     // insertdata(transferdata);
//     //     reset();
//     // }

//     function addOnClick() {
//         var transferdata = readData();
//         if (selectedtr == null) {
//             insertdata(transferdata);
//         } else {
//             updateFunc(transferdata);
//         }
//         reset();
//     }
//     function readData() {


//         var addOnClick = {}
//         addOnClick["Name"] = document.querySelector("#name").value;
//         addOnClick["Gender"] = document.querySelector("#gender").value;
//         addOnClick["City"] = document.querySelector("#city").value;
//         addOnClick["Age"] = document.querySelector("#Age").value;


//         return addOnClick


//         // console.log(addOnClick.Name);

//     }

//     function insertdata(data) {

//         var tab = document.querySelector(".table");
//         var tr = tab.insertRow(tab.length);
//         var th1 = tr.insertCell(0);
//         var th2 = tr.insertCell(1);
//         var th3 = tr.insertCell(2);
//         var th4 = tr.insertCell(3);
//         var th5 = tr.insertCell(4);

//         th1.innerHTML = data.Name;
//         th2.innerHTML = data.Gender;
//         th3.innerHTML = data.Age;
//         th4.innerHTML = data.City;
//         // on clicking the update will update
//         th5.innerHTML = "<a class='edit' onclick='Update(this)'>Update</a>/ <a class='Remove'   onclick='Remove()'  > Remove</a>";


//     }


//     function reset() {

//         document.querySelector("#name").value = '';
//         document.querySelector("#gender").value = '';
//         document.querySelector("#city").value = '';
//         document.querySelector("#Age").value = '';

//     }

//     function Update(y) {
//         var onclick={}

//         // used this button will give parent of that 
//         Selectedtr = y.parentElement.parentElement;

//         document.querySelector("#name").value = selectedtr.cells[0].innerHTML;
//         document.querySelector("#gender").value = selectedtr.cells[1].innerHTML;
//         document.querySelector("#city").value = selectedtr.cells[2].innerHTML;
//         document.querySelector("#Age").value = selectedtr.cells[3].innerHTML;
// return Update;

//     }



//     function updateFunc(data) {
//         selectedtr.cells[0].innerHTML = data.Name;
//         selectedtr.cells[1].innerHTML = data.Gender;
//         selectedtr.cells[2].innerHTML = data.City;
//         selectedtr.cells[3].innerHTML = data.Age;
//         selectedtr = null;
//     }
// }
var selectedtr = null;

function addOnClick() {
  var transferdata = readData();
  if (selectedtr == null) {
    insertdata(transferdata);
  } else {
    updateFunc(transferdata);
  }
  reset();
}

function readData() {
  var addOnClick = {}
  addOnClick["Name"] = document.querySelector("#name").value;
  addOnClick["Gender"] = document.querySelector("#gender").value;
  addOnClick["Age"] = document.querySelector("#Age").value;
  addOnClick["City"] = document.querySelector("#city").value;
 
  return addOnClick
}

function insertdata(data) {
  var tab = document.querySelector(".table");
  var tr = tab.insertRow(tab.length);
  var th1 = tr.insertCell(0);
  var th2 = tr.insertCell(1);
  var th3 = tr.insertCell(2);
  var th4 = tr.insertCell(3);
  var th5 = tr.insertCell(4);

  th1.innerHTML = data.Name;
  th2.innerHTML = data.Gender;
  th3.innerHTML = data.Age;
  th4.innerHTML = data.City;
  // on clicking the update will update
  th5.innerHTML = "<a class='edit' onclick='Update(this)'>Update</a>/ <a class='Remove' onclick='Remove(this)'  > Remove</a>";
}

function reset() {
  document.querySelector("#name").value = '';
  document.querySelector("#gender").value = '';
  document.querySelector("#Age").value = '';
  document.querySelector("#city").value = '';

}

function Update(y) {
  selectedtr = y.parentElement.parentElement;
  document.querySelector("#name").value = selectedtr.cells[0].innerHTML;
  document.querySelector("#gender").value = selectedtr.cells[1].innerHTML;
  document.querySelector("#Age").value = selectedtr.cells[2].innerHTML;
  document.querySelector("#city").value = selectedtr.cells[3].innerHTML;
  
}

function updateFunc(data) {
  selectedtr.cells[0].innerHTML = data.Name;
  selectedtr.cells[1].innerHTML = data.Gender;
  selectedtr.cells[2].innerHTML = data.Age;
  selectedtr.cells[3].innerHTML = data.City;

  selectedtr = null;
}

function Remove(y) {
  var row = y.parentElement.parentElement;
  row.parentNode.removeChild(row);
}
