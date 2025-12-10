function ejercicio18(){
    let json='[{"titulo":"A","autor":"X"},{"titulo":"B","autor":"Y"}]';
    let arr=JSON.parse(json);
    let h='<table border=1>';
    arr.forEach(l=>h+=`<tr><td>${l.titulo}</td><td>${l.autor}</td></tr>`);
    h+='</table>';
    document.getElementById('div18').innerHTML=h;
}

