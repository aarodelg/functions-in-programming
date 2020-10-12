function writeSomething(name,age){
  var ele = document.createElement("div");
  ele.innerHTML=name+" "+age;
  
  document.body.appendChild(ele);
}

for(var i=0; i<3; i++){
writeSomething("Jerry", 25);
}

document.body.querySelector(".button").addEventListener("click", function(){
writeSomething("Sally", 45);
});