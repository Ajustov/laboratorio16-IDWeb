function ejercicio07_agregar(){
    let v=document.getElementById('input7').value;
    if(v){
        let li=document.createElement('li');
        li.textContent=v;
        document.getElementById('lista7').appendChild(li);
    }
}function ejercicio07_borrar(){
    let l=document.getElementById('lista7');if(l.lastChild)l.removeChild(l.lastChild);
}

