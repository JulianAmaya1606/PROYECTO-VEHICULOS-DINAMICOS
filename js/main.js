//creamos las constantes globales para los elementos princiupales son globales por que no estan dentro de una funcion

const form = document.getElementById('vehiculo-form');
const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const km = document.getElementById('kilometraje');
const precio = document.getElementById('precio');
const addBtn = document.getElementById("btnAgregar");
const contPadre = document.getElementById("cont-vehiculos");



function createCard(fotovl,nombrevl,marcavl,modelovl,kmvl,preciovl){
    //creamos el nodo o elemento padre del contenedor 
    const item = document.createElement("div");
    item.classList.add("item-vehiculo", "col-md-6");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const img = document.createElement("img");
    img.setAttribute("src", fotovl);
    img.setAttribute("alt", "foto-vehiculo");
    img.classList.add("card-img-top", "w-100")

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const tittle = document.createElement("h3");
    tittle.classList.add("card-title");
    tittle.textContent = nombrevl

    const subTittle = document.createElement("h4");
    subTittle.classList.add("card-subtitle", "text-muted");
    subTittle.textContent = marcavl 
    
    const model = document.createElement("h4");
    model.classList.add("card-text");
    model.textContent = "Modelo:" + modelovl;
    
    const kmm = document.createElement("h4");
    kmm.classList.add("card-text");
    kmm.textContent ="Kilometraje:" + kmvl;
    
    const price = document.createElement("h2");
    price.classList.add("text-success");
    price.textContent ="$" + preciovl;

    const divButtons = document.createElement("div");
    divButtons.classList.add("d-flex", "justify-content-between", "mt-3")
    
    const btnComprar = document.createElement("button");
    btnComprar.classList.add("btn", "btn-success", "btn-comprar");
    btnComprar.textContent= "comprar";

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger", "btn-eliminar");
    btnEliminar.textContent= "Eliminar"; 
    
    item.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(tittle);
    cardBody.appendChild(subTittle);
    cardBody.appendChild(model);
    cardBody.appendChild(kmm);
    cardBody.appendChild(price);
    cardBody.appendChild(divButtons)
    divButtons.appendChild(btnComprar)
    divButtons.appendChild(btnEliminar)

     return item;
}


form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que la página se recargue

    // Capturar los valores
    let fotovl= foto.value.trim();
    let nombrevl = nombre.value.trim();
    let marcavl = marca.value.trim();
    let modelovl = modelo.value.trim();
    let kmvl = km.value.trim();
    let preciovl = precio.value.trim();
    form.reset();


    if(nombrevl=="" || marcavl=="" || modelovl =="" || kmvl=="" || preciovl==""){
            alert ("ingrese todos los datos ")
            return;
    }
    if(fotovl==""){
        fotovl= "img/foto.jpg"
    } 
      
    
    const newItem = createCard(fotovl,nombrevl,marcavl,modelovl,kmvl,preciovl);
    contPadre.appendChild(newItem);
    eventsToItems(newItem);

                
       
});

function eventsToItems(item){
    
    const btnComprar = item.querySelector(".btn-comprar")
    const btnEliminar = item.querySelector(".btn-eliminar")

    btnComprar.addEventListener('click',()=>{
        alert("Nos pondremos en contacto contigo para confirmar el pago ")

    });

    btnEliminar.addEventListener('click', ()=>{
        item.remove();
    });
}







