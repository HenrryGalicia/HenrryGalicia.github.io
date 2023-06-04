function cambiarCSS() {
    var menu = document.getElementsByClassName('menu')[0];
    if (menu.classList.contains('estilo2')) {
      menu.classList.remove('estilo2');
    } else {
      menu.classList.add('estilo2');
    }
  }
  