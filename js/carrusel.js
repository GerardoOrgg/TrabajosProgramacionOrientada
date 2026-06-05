

let imagenes = ["img/0.jpg","img/1.jpg","img/2.jpg","img/3.jpg"]

let indice = 0;


document.getElementById("siguiente").addEventListener("click",()=>{

    if (indice < 3 ){
        indice++;
    }
    console.log(indice)
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})

document.getElementById("anterior").addEventListener("click",()=>{
    if (indice > 0 ){
        indice--;
        let caca;
    }
    console.log(indice)
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})