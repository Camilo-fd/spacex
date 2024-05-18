import { Izquierdo1 } from "../modules/izquierda.js";

const crew = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/crew");
    let data = await res.json();

    return data;
}

const lunch = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/launches");
    let data = await res.json();
    return data;
}

export const pilotos = async () => {
    let crewData = await crew();
    let lunchData = await lunch();
    let rocketsData = await Izquierdo1();
    let pilotos = [];

    for (let crewMember of crewData) {
        for (let lunch of lunchData) {
            if (crewMember.launches.includes(lunch.id)) {
                for (let rocket of rocketsData) {
                    if (lunch.rocket === rocket.id) {
                        pilotos.push(crewMember);
                    }
                }
            }
        }
    }
    return pilotos;
}

pilotos()

