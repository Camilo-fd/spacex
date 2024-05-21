
    export const getAllLaunchpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchpadsId = async (launchpadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/${launchpadsId}`)
    let data = await res.json();
    return data;
}

export const informationOfLaunchpads1= async (launchpads) =>{

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

        .tb {
            display: flex;
            flex-direction: column;
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
                    <img src="storage/img/icons/identificador.svg">
                    <b>nombre_completo:</b> ${launchpads.full_name}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>localidad:</b> ${launchpads.locality}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>region:</b> ${launchpads.region}
                </td>
            </tr>

        </tbody>
    </table>

    `
}

export const informationOfLaunchpads2= async (launchpads) =>{

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
                    <img src="storage/img/icons/detalles.svg">
                    <b>zona_horaria:</b> ${launchpads.timezone}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/estado.svg">
                    <b>estado:</b> ${launchpads.status}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>id:</b> ${launchpads.id}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLaunchpads3= async (launchpads) =>{

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
                    <img src="storage/img/icons/estado.svg">
                    <b>estado:</b> ${launchpads.status}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/detalles.svg">
                    <b>detalles:</b> ${launchpads.details}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLaunchpads4= async (launchpads) =>{

    let centerCapculesRight = document.querySelector("#description__item")
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
                    <b>latitud:</b> ${launchpads.latitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/medidas.svg">
                    <b>longitud:</b> ${launchpads.longitude}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/lanzamiento.svg">
                    <b>intentos_lanzamiento:</b> ${launchpads.launch_attempts}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/lanzamiento.svg">
                    <b>lanzamiento_éxitos:</b> ${launchpads.launch_successes}
                </td>
            </tr>
        </tbody>
    </table>

    `
}