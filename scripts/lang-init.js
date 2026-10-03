// Antes de pintar: marca el idioma y el tema guardados para que la página no parpadee. En archivo aparte para que la CSP no necesite scripts inline.
try{if(localStorage.getItem('eg_lang')==='en')document.documentElement.lang='en'}catch(e){}
// Tema: oscuro por defecto (la identidad de la web); claro solo si se eligió en el botón de la nav
try{document.documentElement.dataset.theme=localStorage.getItem('eg_theme')==='light'?'light':'dark'}catch(e){}
