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
                <td><b>primer_vuelo:</b> ${dragons.first_flight}</td>
            </tr>
            <tr>
                <td><b>escudo térmico:</b> ${dragons.heat_shield.material}</td>
            </tr>
            <tr>
                <td><b>tipo:</b> ${dragons.type}</td>
            </tr>
            <tr>
                <td><b>wikipedia:</b> ${dragons.wikipedia}</td>
            </tr>
            <tr>
                <td><b>propulsores-tipo:</b> ${dragons.thrusters[0].type}</td>
            </tr>
            <tr>
                <td><b>combustible_1:</b> ${dragons.thrusters[0].fuel_1}</td>
            </tr>
            <tr>
                <td><b>combustible_2:</b> ${dragons.thrusters[0].fuel_2}</td>
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
                <td><b>activo:</b> ${dragons.active}</td>
            </tr>
            <tr>
                <td><b>capacidad_tripulación:</b> ${dragons.crew_capacity}</td>
            </tr>
            <tr>
                <td><b>sidewall_angle_deg:</b> ${dragons.sidewall_angle_deg}</td>
            </tr>
            <tr>
                <td><b>orbit_duration_yr:</b> ${dragons.orbit_duration_yr}</td>
            </tr>
            <tr>
                <td><b>masa_seca_kg:</b> ${dragons.dry_mass_kg}</td>
            </tr>
            <tr>
                <td><b>lb_masa_seca:</b> ${dragons.dry_mass_lb}</td>
            </tr>
            <tr>
                <td><b>id:</b> ${dragons.id}</td>
            </tr>
        </tbody>
    </table>

    `
}