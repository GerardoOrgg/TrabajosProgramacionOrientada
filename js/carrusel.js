

let imagenes = ["img/1.png","img/2.png"]

let indice = imagenes.length;


document.getElementById("siguiente").addEventListener("click",()=>{
    if (indice < 5 ){
        indice++;
        console.log(indice);
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})

document.getElementById("anterior").addEventListener("click",()=>{
    if (indice > 0 ){
        indice--;
        console.log(indice);
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})