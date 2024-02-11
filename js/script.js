
/* Funcion para cambiar la imagen principal del producto*/
function imgSlider(cambiarImg){
    document.querySelector('.productos').src = cambiarImg;
  }
/* Fin Funcion para cambiar la imagen principal del producto*/

/* Buscador de productos*/

document.addEventListener('keyup', e => {
  if(e.target.matches('#buscador')) {
    document.querySelectorAll('.articulos').forEach(articulo => {
      articulo.textContent.toLowerCase().includes(e.target.value)
      ? articulo.classList.remove('filtro')
      : articulo.classList.add('filtro')
    })
  }
})

/* Fin Buscador de productos*/
