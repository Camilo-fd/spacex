import { Izquierdo1 } from "../modules/izquierda.js";

export const apartadoIzquierdo1 = async() => {
    let datos = await Izquierdo1()
    let description__container = document.querySelector('.description__container');

    datos.forEach((cohete) => {
        let imagenDescripcion = document.createElement('div');
        imagenDescripcion.classList.add('description__image');
        let img = document.createElement('img');
        img.src = cohete.flickr_images;
    
        let contenidoDescripcion = document.createElement('div');
        contenidoDescripcion.classList.add('description__contenido');
        let titulo = document.createElement('h3');
        titulo.textContent = cohete.name;
        let parrafo1 = document.createElement('p');
        parrafo1.textContent = `Descripcion: ${cohete.description}`;
        let parrafo2 = document.createElement('p');
        parrafo2.textContent = `Id: ${cohete.id}`;
        
    
        description__container.append(imagenDescripcion)
        imagenDescripcion.append(img)
        description__container.append(contenidoDescripcion)
        contenidoDescripcion.append(titulo, parrafo1, parrafo2)
      });
}

// <div>
//      <img src="http://www.example.com">
// </div>
// <div>
//      <h3>Title</h3>
//      <small>Lorem ipsum dolor sit amet...</small>
// </div>