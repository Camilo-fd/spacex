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

    let centerCapculesLeft = document.querySelector("#description__item")
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

    </style>

    <table>
        <tbody>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/links.svg">
                    <b>links:</b> ${history.links.article}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/evento.svg">
                    <b>evento_fecha_utc:</b> ${history.event_date_utc}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/evento.svg">
                    <b>evento_fecha_unix:</b> ${history.event_date_unix}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfHistory2= async (history) =>{

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

        b {
            font-size: 1.2rem
        }

    </style>

    <table>
        <tbody>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/detalles.svg">
                    <b>detalles:</b> ${history.details}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/identificador.svg">
                    <b>id:</b> ${history.id}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfImagen= async (history) =>{

    let centerCapculesUp = document.querySelector("#section__image")
    centerCapculesUp.innerHTML = /*html*/ `
    <img style="height: 60%; width: 300px; margin-left: 1rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW9sNXE2YnNmcnR4bnpiaWRxc3kyenRoZnQyZDZqejZldWFudDloMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bMSQ8k2SFcHAmCiYIf/giphy.gif">
    `

    let centerCapculesRight = document.querySelector("#information__table__1")
    centerCapculesRight.innerHTML = /*html*/ `
    <img style="height: 100%; width: 100%;" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjk3MWUxMnBsdDYxdHpnNXJycm9paGRtaWJ2OG5sMDlqa3Q3ZmJsZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OqL1mLDMBuhEDtpvwl/giphy.gif">
    `

    let centerCapculesLeft = document.querySelector("#information__table__2")
    centerCapculesLeft.innerHTML = /*html*/ `
    <img style="height: 100%; width: 100%; margin-left: 1rem; margin-bottom: -5rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU4Y3cxcHlvZGE5ZHpmMHA0c2ZlaWVta2I2aDl5ZDFlYWtnaXBqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JoIcxJVEBTe1NBj9hR/giphy.gif">
    `
}