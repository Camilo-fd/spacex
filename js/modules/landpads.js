
export const getAllLandpads = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLandpadsId = async (landpadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${landpadsId}`)
    let data = await res.json();
    return data;
}

export const informationOfLandpads1= async (landpads) =>{

    let centerCapculesLeft = document.querySelector("#information__table__1")
    centerCapculesLeft.innerHTML = /*html*/ `
    
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th, td {
            border: 1px solid #ddd;
            text-align: left;
            color: white; 
        }
        
        td {
            display: flex;
            align-items: center;
            flex-wrap: wrap; 
            gap: 0.5rem
        }

        img {
            width: 30px;
            height: 30px;
        }

        th {
            background-color: #e72d2d7a;
        }
        
        tr {
            background-color: #e72d2d7a;
        }

        b {
            font-size: 1.2rem
        }

    </style>


    <table>
        <tbody>
            <tr>
                <td>
                    <img src="storage/img/icons/detalles.svg">
                    <b>nombre_completo:</b> ${landpads.full_name}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>locacion:</b> ${landpads.locality}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>region:</b> ${landpads.region}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLandpads2= async (landpads) =>{

    let centerCapculesRight = document.querySelector("#information__table__2")
    centerCapculesRight.innerHTML = /*html*/ `
    
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            color: white; 
        }
        
        th {
            background-color: #e72d2d7a;
        }
        
        tr {
            background-color: #e72d2d7a;
        }

    </style>

    <table>
        <tbody>
            <tr>
                <td>
                    <img src="storage/img/icons/medidas.svg">
                    <b>latitud:</b> ${landpads.latitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/medidas.svg">
                    <b>longitud:</b> ${landpads.longitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/aterrizaje.svg">
                    <b>intentos_de_aterrizaje:</b> ${landpads.landing_attempts}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/aterrizaje.svg">
                    <b>aterrizaje_éxitos:</b> ${landpads.landing_successes}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLandpads3= async (landpads) =>{

    let centerCapculesRight = document.querySelector("#description__item")
    centerCapculesRight.innerHTML = /*html*/ `
    
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th, td {
            border: 1px solid #ddd;
            text-align: left;
            color: white; 
        }
        
        td {
            display: flex;
            align-items: center;
            flex-wrap: wrap; 
            gap: 0.5rem
        }

        img {
            width: 30px;
            height: 30px;
        }

        th {
            background-color: #e72d2d7a;
        }
        
        tr {
            background-color: #e72d2d7a;
        }

        b {
            font-size: 1.2rem
        }

    </style>


    <table>
        <tbody>
            <tr>
                <td>
                    <img src="storage/img/icons/tipo.svg">
                    <b>tipo:</b> ${landpads.type}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>wikipedia:</b> ${landpads.wikipedia}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>id:</b> ${landpads.id}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/estado.svg">
                    <b>status:</b> ${landpads.status}
                </td>
            </tr>
        </tbody>
    </table>

    <img style="height: 50%; width: 80%; margin-left: 1rem; margin-top: 2rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFqaTE4aWw1c2Rybmh1ODYyOWc1cXlreWpqbDd5dWpoZWE2b3M5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btZ3T6y3JTmjg4w/giphy.gif">


    `
}

export const informationOfLandpads4= async (landpads) =>{

    let centerCapculesRight = document.querySelector("#information__2")
    centerCapculesRight.innerHTML = /*html*/ `
    
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            color: white; 
        }
        
        th {
            background-color: #e72d2d7a;
        }
        
        tr {
            background-color: #e72d2d7a;
        }

    </style>

    <table>
        <tbody>
            <tr>
                <td>
                    <img src="storage/img/icons/detalles.svg">
                    <b>detalles:</b> ${landpads.details}
                </td>
            </tr>
        </tbody>
    </table>

    <img style="height: 40%; width: 90%; margin-left: 1rem; margin-top: 2rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3JnbGpldW1ydzNub2Z6a2g5b3FiYXJvdHMxaWwxc2Rpb2l4aGt3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7guVjhMF9qBKE/giphy.gif">

    `
}