var arr = ["Usmanov Shaxriyor", "Usmanov Abubakr", "Usmanov Jafarbek"]

var Text = document.getElementById("text");
var globalid = -1

function IntialList() {
  var table = "";
  for (let id = 0; id < arr.length; id++) {
   table = table +
  `<div id="java">
  <li>${arr[id]}</li>
  <div id="box" >
  <button id="btn-6" onclick="Edit(${id})">Edit</button>
  <button id="btn-5" onclick="Delete(${id})"><i class="fas fa-trash-alt"></i></button>
  </div>
  </div>
   `
 }

  Text.innerHTML = table;
}

 function Add() {
   var Todo = document.getElementById("todo");

   if(Todo.value === "") {
     alert("Impurtni toldiring")
    }
  else{

   if (globalid === -1) {
    arr.push(Todo.value);
    IntialList();
    Todo.value = "";
    }
   else{
    arr[globalid] = Todo.value;
    var Btn = document.getElementById("btn")
    Btn.textContent = "Add"
    globalid = -1
    Todo.value = "";
   }
  }
   IntialList()
 }

 function Delete(id) {
   arr.splice(id,1);
   IntialList();

 }

function Edit(id){
  var Todo = document.getElementById("todo");
  var Btn = document.getElementById("btn");
  Btn.textContent = "Save"
  globalid = id
  Todo.value = arr[id]
  IntialList();
}

  IntialList()

  function Shax() {
    var a = Math.floor (Math.random() *255)
    var b = Math.floor (Math.random() *255)
    var c = Math.floor (Math.random() *255)

    document.querySelector("body").style.backgroundColor = `rgb(${a},${b},${c})`
    document.querySelector("body").style.backgroundImage = `url('http://unsplash.it/g/${1000+a}/800?&gravity=center')`
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
  }
    setInterval(Shax,4500)
