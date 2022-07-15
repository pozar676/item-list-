import data from './data.json' assert {type:'json'};
const app = document.getElementById('app');
const frag = document.createDocumentFragment();
const count = Object.keys(data).length
const fn =()=>{
    for(let i=0; i<count; i++){
        const anchor=document.createElement('a');
        anchor.innerHTML = data[i+1].name
        anchor.href = data[i+1].path
        frag.appendChild(anchor)
    }
    app.appendChild(frag)
}
window.addEventListener('load', fn)