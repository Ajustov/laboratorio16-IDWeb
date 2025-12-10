function ejercicio17(){
    let u={nombre:'Luis',correo:'a@b.com',rol:'admin'};
    localStorage.setItem('u17',JSON.stringify(u));
    document.getElementById('p17').textContent=JSON.stringify(u);
}

