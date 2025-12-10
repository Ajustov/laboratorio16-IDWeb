function ejercicio21(){
    let t=[{t:'A',c:true},{t:'B',c:false}];
    let ul=document.getElementById('ul21');
    ul.innerHTML='';
    t.forEach(x=>{let li=document.createElement('li');
        li.textContent=x.t;if(x.c)li.classList.add('completada');
        ul.appendChild(li);
    });
}

