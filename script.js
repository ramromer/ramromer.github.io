const productos = [
{
id:1001,
nombre:"Pelota Personalizada Huellitas",
desc:"Pelota resistente personalizada con nombre.",
categoria_id:"Caninos",
fabricante:"Pet Toys Factory",
precio:8500,
stock:12,
activo:true,
imagen:"https://images.unsplash.com/photo-1587300003388-59208cc962cb"
},
{
id:1002,
nombre:"Collar Grabado Deluxe",
desc:"Collar personalizado con placa metálica.",
categoria_id:"Caninos",
fabricante:"PetStyle",
precio:12300,
stock:20,
activo:true,
imagen:"https://images.unsplash.com/photo-1517849845537-4d257902454a"
},
{
id:1003,
nombre:"Rascador Premium Gatuno",
desc:"Rascador reforzado para gatos.",
categoria_id:"Felinos",
fabricante:"CatFun",
precio:18900,
stock:5,
activo:true,
imagen:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
},
{
id:1004,
nombre:"Ratón Interactivo",
desc:"Juguete electrónico para gatos.",
categoria_id:"Felinos",
fabricante:"CatFun",
precio:7200,
stock:15,
activo:true,
imagen:"https://images.unsplash.com/photo-1574158622682-e40e69881006"
},
{
id:1005,
nombre:"Hamaca para Conejos",
desc:"Hamaca suave para descanso.",
categoria_id:"Otros",
fabricante:"PetHome",
precio:9800,
stock:7,
activo:true,
imagen:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308"
},
{
id:1006,
nombre:"Juguete para Aves",
desc:"Juguete colgante de colores.",
categoria_id:"Otros",
fabricante:"BirdPlay",
precio:5400,
stock:11,
activo:true,
imagen:"https://images.unsplash.com/photo-1522926193341-e9ffd686c60f"
}
];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

contenedor.innerHTML="";

lista.forEach(producto=>{

contenedor.innerHTML += `

<div class="card">
<img src="${producto.imagen}">
<div class="card-body">

<h3>${producto.nombre}</h3>

<p>ID: ${producto.id}</p>

<p>${producto.fabricante}</p>

<p class="precio">$${producto.precio}</p>

<p class="stock">Stock: ${producto.stock}</p>

<button onclick="verDetalle(${producto.id})">
Ver Detalle
</button>

</div>
</div>`;
});
}

function filtrarCategoria(categoria){

if(categoria==="Todos"){
mostrarProductos(productos);
return;
}

mostrarProductos(
productos.filter(
p=>p.categoria_id===categoria
)
);
}

document.getElementById("busqueda")
.addEventListener("keyup",e=>{

const texto=e.target.value.toLowerCase();

mostrarProductos(
productos.filter(
p=>p.nombre.toLowerCase().includes(texto)
)
);
});

const modal=document.getElementById("modal");
const detalle=document.getElementById("detalleProducto");

function verDetalle(id){

const p=productos.find(
prod=>prod.id===id
);

detalle.innerHTML=`

<h2>${p.nombre}</h2>
<hr><br>

<p><strong>ID:</strong> ${p.id}</p>

<p><strong>Categoría:</strong>
${p.categoria_id}</p>

<p><strong>Fabricante:</strong>
${p.fabricante}</p>

<p><strong>Precio:</strong>
$${p.precio}</p>

<p><strong>Stock:</strong>
${p.stock}</p>

<br>

<p>${p.desc}</p>

<br>

<button>
Agregar al carrito
</button>
`;

modal.style.display="block";
}

document.getElementById("cerrar")
.onclick=()=>modal.style.display="none";

window.onclick=(e)=>{
if(e.target===modal){
modal.style.display="none";
}
}

mostrarProductos(productos);
