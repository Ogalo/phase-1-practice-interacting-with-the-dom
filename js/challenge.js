const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const counter = document.getElementById('counter')


minus.addEventListener("click", (e)=>{
  e.preventDefault()
  for(let i=0; i<10000000; i--){
    return counter-i
  }
})

plus.addEventListener('click', ()=>{
  for (let i = 0; i < array.length; i++) {
    return counter + i; 
  }
})