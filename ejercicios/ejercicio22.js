function ejercicio22_guardar(){
    let p={n:document.getElementById('n22').value,e:document.getElementById('e22').value,p:document.getElementById('p22').value};
    localStorage.setItem('p22',JSON.stringify(p));
    document.getElementById('perfil22').textContent=JSON.stringify(p);
}
window.onload=()=>{let x=localStorage.getItem('p22');
    if(x)document.getElementById('perfil22').textContent=x;
}

