let button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  document.getElementById("hide").classList.toggle("hidden");
  document.getElementById("hide1").classList.toggle("hidden");
  button.style.backgroundColor = "hsl(217, 19%, 35%)";
});
// button.addEventListener("click",()=>{
//     let button = document.getElementById("btn");
//     button.style.backgroundColor = hsl(217, 19%, 35%);
// })