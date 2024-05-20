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
                    <img src="../storage/img/icons/iconos_texto/agencia.svg">
                    <b>agencia:</b> ${crew.agency}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/wikipedia.svg">
                    <b>wikipedia:</b> ${crew.wikipedia}
                </td>
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
                <td>
                    <img src="../storage/img/icons/iconos_texto/estado.svg">
                    <b>estado:</b> ${crew.status}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/lanzamiento.svg">
                    <b>lanzamientos:</b> ${crew.launches}
                </td>
            </tr>
        </tbody>
    </table>

    `
}