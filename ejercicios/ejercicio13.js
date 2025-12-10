function ejercicio13_add(){
    let n=document.getElementById('n13').value;
    let e=document.getElementById('e13').value;
    let tr=document.createElement('tr');
    tr.innerHTML=`<td>${n}</td><td>${e}</td><td><button class='edit'>E</button><button class='del'>X</button></td>`;
    document.getElementById('t13').appendChild(tr);
}
document.getElementById('t13').addEventListener('click',ev=>{
    let tr=ev.target.closest('tr');if(ev.target.className==='del')tr.remove();
});

