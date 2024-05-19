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
                <td><b>last_update:</b> ${launches.static_fire_date_utc}</td>
            </tr>
            <tr>
                <td><b>status:</b> ${launches.static_fire_date_unix}</td>
            </tr>
            <tr>
                <td><b>last_update:</b> ${launches.rocket}</td>
            </tr>
            <tr>
                <td><b>status:</b> ${launches.failures[0].reason}</td>
            </tr>
            <tr>
                <td><b>status:</b> ${launches.details}</td>
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
                <td><b>número_vuelo:</b> ${launches.flight_number}</td>
            </tr>
            <tr>
                <td><b>nombre:</b> ${launches.name}</td>
            </tr>
            <tr>
                <td><b>fecha_utc:</b> ${launches.date_utc}</td>
            </tr>
            <tr>
                <td><b>fecha_unix:</b> ${launches.date_unix}</td>
            </tr>
            <tr>
                <td><b>fecha_local:</b> ${launches.date_local}</td>
            </tr>
            <tr>
                <td><b>fecha_precisión:</b> ${launches.date_precision}</td>
            </tr>
        </tbody>
    </table>

    `
}