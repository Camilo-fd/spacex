export const getAllLaunches = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchesId = async (launchesId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${launchesId}`)
    let data = await res.json();
    return data;
}

export const informationOfLaunches1= async (launches) =>{

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
                    <img src="../storage/img/icons/iconos_texto/actualizacion.svg">
                    <b>última actualización:</b> ${launches.static_fire_date_utc}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/agencia.svg">
                    <b>fecha_incendio_unix:</b> ${launches.static_fire_date_unix}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/propulsores.svg">
                    <b>last_update:</b> ${launches.rocket}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLaunches2= async (launches) =>{

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
                    <img src="../storage/img/icons/iconos_texto/identificador.svg">
                    <b>nombre:</b> ${launches.name}
                </td>
            </tr>
            <tr>    
                <td>
                    <img src="../storage/img/icons/iconos_texto/primer_vuelo.svg">
                    <b>número_vuelo:</b> ${launches.flight_number}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>fracaso-razon:</b> ${launches.failures[0].reason}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLaunches3= async (launches) =>{

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
                    <img src="../storage/img/icons/iconos_texto/wikipedia.svg">
                    <b>transmicion_web:</b> ${launches.links.webcast}
                </td>
            </tr>
            <tr>    
                <td>
                    <img src="../storage/img/icons/iconos_texto/wikipedia.svg">
                    <b>articulo:</b> ${launches.links.article}
                </td>
            </tr>
            <tr>    
                <td>
                    <img src="../storage/img/icons/iconos_texto/wikipedia.svg">
                    <b>wikipedia:</b> ${launches.links.wikipedia}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>detalles:</b> ${launches.details}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfLaunches4= async (launches) =>{

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
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>fecha_utc:</b> ${launches.date_utc}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>fecha_unix:</b> ${launches.date_unix}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>fecha_local:</b> ${launches.date_local}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">   
                    <b>fecha_precisión:</b> ${launches.date_precision}
                </td>
            </tr>
        </tbody>
    </table>

    `
}