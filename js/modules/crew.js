export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCrewId = async (crewId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
    let data = await res.json();
    return data;
}

export const informationOfCrew1= async (crew) =>{

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
                <td><b>last_update:</b> ${crew.agency}</td>
            </tr>
            <tr>
                <td><b>status:</b> ${crew.status}</td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfCrew2= async (crew) =>{

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
                <td><b>id:</b> ${crew.wikipedia}</td>
            </tr>
            <tr>
            <td><b>launches:</b> ${crew.launches}</td>
        </tr>
        </tbody>
    </table>

    `
}