const title = document.querySelector("h1");
const in1 = document.querySelector("#input1");
const in2 = document.querySelector("#input2");
const but = document.querySelector("#boton");
const res = document.querySelector("#resultado");

function boton1() {
const calRes = Number(in1.value) + Number(in2.value);
res.innerText = calRes; 
 
}