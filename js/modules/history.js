export const getAllHistory = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllHistoryId = async (historyId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/history/${historyId}`)
    let data = await res.json();
    return data;
}

export const informationOfHistory1= async (history) =>{

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
                <td><b>links:</b> ${history.links.article}</td>
            </tr>
            <tr>
                <td><b>event_date_utc:</b> ${history.event_date_utc}</td>
            </tr>
            <tr>
                <td><b>event_date_unix:</b> ${history.event_date_unix}</td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfHistory2= async (history) =>{

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
                <td><b>detalles:</b> ${history.details}</td>
            </tr>
            <tr>
            <td><b>id:</b> ${history.id}</td>
        </tr>
        </tbody>
    </table>

    `
}