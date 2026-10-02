// Antes de pintar: marca el idioma guardado para que la página no parpadee. En archivo aparte para que la CSP no necesite scripts inline.
try{if(localStorage.getItem('eg_lang')==='en')document.documentElement.lang='en'}catch(e){}
