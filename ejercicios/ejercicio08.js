function ejercicio08(){
    let n=document.getElementById('nom8').value;
    let c=document.getElementById('cor8').value;
    let e=document.getElementById('err8');
    e.innerHTML='';
    if(!n)e.innerHTML+='<span class=error>Nombre vacío</span><br>';
    if(!c)e.innerHTML+='<span class=error>Correo vacío</span>'; 
}

