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
                <td><b>nombre_completo:</b> ${launchpads.full_name}</td>
            </tr>
            <tr>
                <td><b>localidad:</b> ${launchpads.locality}</td>
            </tr>
            <tr>
                <td><b>region:</b> ${launchpads.region}</td>
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
                <td><b>zona_horaria:</b> ${launchpads.timezone}</td>
            </tr>
            <tr>
                <td><b>stato:</b> ${launchpads.status}</td>
            </tr>
            <tr>
                <td><b>id:</b> ${launchpads.id}</td>
            </tr>
        </tbody>
    </table>

    `
}