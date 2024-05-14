// import { getAllRockets } from "./modules/rockets.js";
// import { Izquierdo1 } from "./modules/izquierda.js";
// import { apartadoIzquierdo1, imagenPiloto, titulo } from "./modulesComponents/apartadoizquierdo.js";
// import { 
//     progressRocketWeight, 
//     progressPayloadWeights, 
//     progressHeightRocket, 
//     progressDiameterRocket,
//     progressSecondStageDiameterRocket,
//     progressSecondStageHeightRocket
// } from "./modulesComponents/progressBar.js";


// let description__item = document.querySelector(".description__item")


// let information__2 = document.querySelector("#information__2");
// let dataRockets = await getAllRockets();
// let Totales = dataRockets.pop()

// let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets; 

// // console.log(dataRockets);
// // console.log(Totales);

// information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3))
// information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))
// information__2.append(...progressHeightRocket(Totales.height, Rockets3))
// information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3))
// information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3))
// information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3))
// description__item.append(... await apartadoIzquierdo1())
// description__item.append(... await titulo())



import { getAllRockets } from "./modules/rockets.js";
import { Izquierdo1 } from "./modules/izquierda.js";
import { apartadoIzquierdo1, imagenPiloto, titulo } from "./modulesComponents/apartadoizquierdo.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";

// Función principal asincrónica para cargar y mostrar los datos
async function main() {
    let description__item = document.querySelector(".description__item");
    let information__2 = document.querySelector("#information__2");
    let description__imagen = document.querySelector(".description__imagen");

    // Obtener los datos de los cohetes
    let dataRockets = await getAllRockets();
    let Totales = dataRockets.pop();
    let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets;

    // Mostrar la información en la sección #information__2
    information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3));
    information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3));
    information__2.append(...progressHeightRocket(Totales.height, Rockets3));
    information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3));
    information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3));
    information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3));

    // Mostrar los apartados izquierdos y el título
    description__item.append(... await apartadoIzquierdo1());
    description__item.append(... await titulo());

    // Mostrar las imágenes de los pilotos
    await imagenPiloto()
}

// Llama a la función principal
main();