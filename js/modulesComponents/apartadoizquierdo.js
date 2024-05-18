import { Izquierdo1 } from "../modules/izquierda.js";
import { pilotos } from "./pilotos.js"

export const apartadoIzquierdo1 = async () => {
    let datos = await Izquierdo1();
    let description__container = document.querySelector('.description__container');

    datos.forEach((cohete) => {
        let contenidoDescripcion = document.createElement('div');
        contenidoDescripcion.classList.add('description__contenido');
        
        let identificador = document.createElement("div");
        identificador.classList.add("identificador1");
        let img = document.createElement("img");
        img.src = "storage/img/icons/mech.svg";
        let identificadorP = document.createElement("p");
        identificadorP.textContent = `Id: ${cohete.id}`;
        identificador.appendChild(img);
        identificador.appendChild(identificadorP);

        let informacion = document.createElement("div");
        informacion.classList.add("description__contenido_informacion");
        
        let imgp = document.createElement("img");
        imgp.src = "storage/img/icons/mech.svg";
        let descripcionP = document.createElement("p");
        descripcionP.textContent = `Descripción: ${cohete.description}`;
        descripcionP.appendChild(imgp);
        informacion.appendChild(descripcionP);
        
        let masInformaciona = document.createElement("a");
        let imga = document.createElement("img");
        imga.src = "storage/img/icons/mech.svg";
        masInformaciona.href = cohete.wikipedia;
        masInformaciona.textContent = "Más información";
        masInformaciona.appendChild(imga);
        informacion.appendChild(masInformaciona);

        description__container.appendChild(contenidoDescripcion);
        contenidoDescripcion.appendChild(identificador);
        contenidoDescripcion.appendChild(informacion);
    });   
}

export const imagenPiloto = async () => {
    try {
        let datos = await pilotos();
        let description__container = document.querySelector('.description__imagen');
        datos.forEach((piloto) => {
            let img = document.createElement('img');
            img.src = piloto.image; 
            img.alt = piloto.name;
            description__container.appendChild(img);
        });
    } catch (error) {
        console.error("Error al cargar las imágenes de los pilotos:", error);
    }
}

export const titulo = async() => {
    let datos = await Izquierdo1();
    let header = document.querySelector(".header__title")

    datos.forEach((cohete) => {
        let titulo = document.createElement('h3');
        titulo.textContent = cohete.name;
        header.appendChild(titulo);
    });
}

await titulo()


































// let enlace = document.createElement('a');
// enlace.href = cohete.wikipedia;
// enlace.textContent = "Mas informacion"; 

// let titulo = document.createElement('h3');
// titulo.textContent = cohete.name;
// let parrafo1 = document.createElement('p');
// parrafo1.textContent = `Descripción: ${cohete.description}`;
// let parrafo2 = document.createElement('p');
// parrafo2.textContent = `ID: ${cohete.id}`;

// description__container.append(contenidoDescripcion);
// contenidoDescripcion.append(titulo, parrafo1, parrafo2, enlace);



/* <div class="description__contenido">
    <div id="identificador1">
        <p>example</p>
    </div>
    <div class="description__contenido_informacion">
        <p>Descripcion: ...</p>
        <p>Mas informacion: ....</p>
    </div>
</div> */