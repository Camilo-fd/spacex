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
                <td><b>nombre_completo:</b> ${landpads.full_name}</td>
            </tr>
            <tr>
                <td><b>status:</b> ${landpads.status}</td>
            </tr>
            <tr>
                <td><b>tipo:</b> ${landpads.type}</td>
            </tr>
            <tr>
                <td><b>locacion:</b> ${landpads.locality}</td>
            </tr>
            <tr>
                <td><b>region:</b> ${landpads.region}</td>
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
                <td><b>latitud:</b> ${landpads.latitude}</td>
            </tr>
            <tr>
                <td><b>longitud:</b> ${landpads.longitude}</td>
            </tr>
            <tr>
                <td><b>intentos_de_aterrizaje:</b> ${landpads.landing_attempts}</td>
            </tr>
            <tr>
                <td><b>aterrizaje_éxitos:</b> ${landpads.landing_successes}</td>
            </tr>
</tbody>
            <tr>
                <td><b>wikipedia:</b> ${landpads.wikipedia}</td>
            </tr>
        </tbody>
    </table>

    `
}