let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let bntAgregar = document.getElementById("btnAgregar")
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto")
let alertValidaciones = document.getElementById("alertValidaciones")

bntAgregar.addEventListener("click", function (event){
event.preventDefault();

    txtName.value = txtName.value.trim()
    txtNumber.value = txtNumber.value.trim()


    if(txtName.value.length < 3){
        txtName.style.border="solid medium red"; 
        alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es correco</strong>"
        alertValidaciones.style.display="block";
    } 
})
