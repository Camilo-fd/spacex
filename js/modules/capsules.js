export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCapsulesId = async (capsulesId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${capsulesId}`)
    let data = await res.json();
    return data;
}

export const informationOfCapsules1= async (capsules) =>{

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
                <td><b>última actualización:</b> ${capsules.last_update}</td>
            </tr>
            <tr>
                <td><b>launches:</b> ${capsules.launches[0]}</td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfCapsules2= async (capsules) =>{

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
                <td><b>estado:</b> ${capsules.status}</td>
            </tr>
            <tr>
                <td><b>tipo:</b> ${capsules.type}</td>
            </tr>
            <tr>
                <td><b>id:</b> ${capsules.id}</td>
            </tr>
        </tbody>
    </table>

    `
}