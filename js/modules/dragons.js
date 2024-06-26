export const getAllDragons = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllDragonsId = async (dragonsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${dragonsId}`)
    let data = await res.json();
    return data;
}

export const informationOfDragons1= async (dragons) =>{

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
                    <img src="storage/img/icons/primer_vuelo.svg">
                    <b>primer_vuelo:</b> ${dragons.first_flight}
                </td>
            </tr>
            <tr>

                <td>
                    <img src="storage/img/icons/escudo_termico.svg">
                    <b>escudo térmico:</b> ${dragons.heat_shield.material}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/tipo.svg">
                    <b>tipo:</b> ${dragons.type}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfDragons2= async (dragons) =>{

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
                    <img src="storage/img/icons/tipo.svg">
                    <b>activo:</b> ${dragons.active}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/tripulacion.svg">
                    <b>capacidad_tripulación:</b> ${dragons.crew_capacity}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>id:</b> ${dragons.id}
                </td>
            </tr>

        </tbody>
    </table>

    `
}

export const informationOfDragons3= async (dragons) =>{

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
                    <img src="storage/img/icons/propulsores.svg">
                    <b>propulsores-tipo:</b> ${dragons.thrusters[0].type}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>wikipedia:</b> ${dragons.wikipedia}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>descripcion:</b> ${dragons.description}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfDragons4= async (dragons) =>{

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
                    <img src="storage/img/icons/combustible.svg">
                    <b>combustible_1:</b> ${dragons.thrusters[0].fuel_1}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/combustible.svg">
                    <b>combustible_2:</b> ${dragons.thrusters[0].fuel_2}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/pared_lateral.svg">
                    <b>pared_lateral_ángulo:</b> ${dragons.sidewall_angle_deg}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/orbita.svg">
                    <b>duración_de_órbita:</b> ${dragons.orbit_duration_yr}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/masa.svg">
                    <b>masa_seca_kg:</b> ${dragons.dry_mass_kg}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/masa.svg">
                    <b>lb_masa_seca:</b> ${dragons.dry_mass_lb}
                </td>
            </tr>
        </tbody>
    </table>

    `

    let centerCapculesImg = document.querySelector("#section__image")
    centerCapculesImg.innerHTML = /*html*/ `
        <img style="height: 70%; width: 300px; margin-left: 2rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXM2cG1xbDZsZjJ3am9nYnBkMzAxcHcwYTY0b3A4MHAyZ3psd3AzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LjYvYvNufttgZsF7WR/giphy-downsized-large.gif">
    `
}