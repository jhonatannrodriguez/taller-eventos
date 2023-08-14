let div = document.querySelector("div");
let boton = document.getElementById("btn");

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

boton.addEventListener("click", function(event) {
   event.stopPropagation();
});
