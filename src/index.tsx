import "./mystyle.scss";
import logoImg from "./content/logo.png";



const message:string = "Hola Mundo! entorno: " + process.env.NODE_ENV;

const para:HTMLParagraphElement = document.createElement("p");
para.innerText = message;
document.getElementById("texto").appendChild(para);


const img:HTMLImageElement = document.createElement("img");
img.src = logoImg;

document.getElementById("logo-container").appendChild(img);



