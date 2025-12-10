function ejercicio15(){
    let cad='{"curso":"DOM","anio":2025}';
    let o=JSON.parse(cad);
    document.getElementById('p15').textContent=o.curso;
}

