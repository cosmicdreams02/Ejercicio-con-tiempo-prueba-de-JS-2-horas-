/* Usando la API de emojis de GitHub muestra todos los emojis (su imagen en un nodo HTML cada una) que contengan una "y" en su nombre (las claves del JSON de respuesta contienen los nombres de los emojis)


URL API: https://api.github.com/emojis */

const apiUrl = 'https://api.github.com/emojis';



document.getElementById('boton').addEventListener('click', (e) => {

    let emojisArray = [];
    let cont = 0;

    if (localStorage.getItem('emojis') == null) {         
        localStorage.setItem('emojis', JSON.stringify([]));  
      }


    


    
fetch(apiUrl)
    .then((response) => response.json())
    .then(({ message }) => {
    

    let imagen = document.querySelector('#emoji');
    imagen.setAttribute('src', message); 
    let emojis = message.split('/'); 
    emojisArray.push(emojis);
    emojisArray = JSON.parse(localStorage.getItem('emojis')); 


    

    localStorage.setItem('emojis', JSON.stringify(emojisArray));


});

});







