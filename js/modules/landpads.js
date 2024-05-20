
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
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>nombre_completo:</b> ${landpads.full_name}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/ubicacion.svg">
                    <b>locacion:</b> ${landpads.locality}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/ubicacion.svg">
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
                    <img src="../storage/img/icons/iconos_texto/medidas.svg">
                    <b>latitud:</b> ${landpads.latitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/medidas.svg">
                    <b>longitud:</b> ${landpads.longitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/aterrizaje.svg">
                    <b>intentos_de_aterrizaje:</b> ${landpads.landing_attempts}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/aterrizaje.svg">
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
                    <img src="../storage/img/icons/iconos_texto/tipo.svg">
                    <b>tipo:</b> ${landpads.type}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/wikipedia.svg">
                    <b>wikipedia:</b> ${landpads.wikipedia}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/identificador.svg">
                    <b>id:</b> ${landpads.id}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/estado.svg">
                    <b>status:</b> ${landpads.status}
                </td>
            </tr>
        </tbody>
    </table>

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
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>detalles:</b> ${landpads.details}
                </td>
            </tr>
        </tbody>
    </table>

    `
}