function ejercicio16(){
    let arr=[{nombre:'A',precio:1},{nombre:'B',precio:2}];
    let json=JSON.stringify(arr);let obj=JSON.parse(json);
    let ul=document.getElementById('ul16');
    ul.innerHTML='';
    obj.forEach(p=>{
        let li=document.createElement('li');
        li.textContent=p.nombre;ul.appendChild(li);
    });
}

