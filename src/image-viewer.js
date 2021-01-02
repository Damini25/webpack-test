// import '../styles/image-viewer.css';
// import big from '../assets/images/big.jpg';
// import small from '../assets/images/100.jpg';

// let img = document.createElement('img');
// img.src="http://lorempixel.com/400/400";

// document.body.appendChild(img);

import '../styles/image-viewer.css';
import big from '../assets/images/big.jpg';
import small from '../assets/images/100.jpg';

let img = document.createElement('img');
img.src=big;

let img2= document.createElement('img');
img2.src=small;

let div=document.createElement('div');
div.appendChild(img);
div.appendChild(img2);

document.body.appendChild(div);