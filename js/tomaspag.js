const buttonOpenClose = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

const maquina1 = document.getElementById("maquina-de-escribir1");

buttonOpenClose.addEventListener("click", e =>{
    menuMobileItems.classList.toggle("menu-mobile-closed");
});

//EFECTO MAQUINA DE ESCRIBIR con cursor al final

const maquinaEscribir1 = ( text= " ",tiempo=100, etiqueta= "") => {
    
    let arrayCaracteres= text.split("");
    etiqueta.innerHTML= "";
    let i = 0;
    let escribir= setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres[i];
        i++;
    

    if ( i === arrayCaracteres.length) {
        clearInterval(escribir);
    }
  }, tiempo);
};

maquinaEscribir1("Me apasiona retratar las vidas de personas reales, contar sus historias de lucha, mostrar los lugares donde viven. En definitiva capturar el mundo que me rodea para que otros/as lo conozcan alrededor del planeta. Dar a conocer la fuerza y la belleza de las tierras que habito en el Norte de Argentina es mi pasión. Además me encanta viajar y como documentalista he tenido la posibilidad de vivir y compartir con diversas comunidades. Siempre desde el respeto y el valor que poseen las diversas culturas. Adonde sea que voy, llevo mi cámara, siempre seguro de que habrá una historia para contar, una lucha, un derecho por conquistar. Por eso elijo vivir del cine documental.",100, maquina1);
