function ejercicio10(){
    const productos=[{nombre:'Laptop',precio:3500},{nombre:'Mouse',precio:80}];
    let h='<table border=1>';
    productos.forEach(p=>h+=`<tr><td>${p.nombre}</td><td>${p.precio}</td></tr>`);
    h+='</table>';
    document.getElementById('tabla10').innerHTML=h;
}

