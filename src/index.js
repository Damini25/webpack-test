//import sum from './sum';
//const total=sum(10, 20);

const btn=document.createElement('button');

btn.innerText="Click me";
btn.onclick=()=>{
    System.import('./image-viewer').then(module=>console.log('mod',module)).catch(e=>console.log(e));
}
document.body.appendChild(btn);