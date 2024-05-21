export const getAllCores = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCoresId = async (coresId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${coresId}`)
    let data = await res.json();
    return data;
}

export const informationOfCores1= async (cores) =>{

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

        b {
            font-size: 1.2rem
        }

    </style>

    <table>
        <tbody>
            <tr>
                <td>
                    <img src="storage/img/icons/actualizacion.svg">
                    <b>última actualización:</b> ${cores.last_update}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/estado.svg">
                    <b>estado:</b> ${cores.status}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfCores2= async (cores) =>{

    let centerCapculesRight = document.querySelector("#information__table__2")
    centerCapculesRight.innerHTML = /*html*/ `
    
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
                    <img src="storage/img/icons/identificador.svg">
                    <b>id:</b> ${cores.id}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/lanzamiento.svg">
                    <b>lanzamientos:</b> ${cores.launches}
                </td>
            </tr>
        </tbody>
    </table>

    `

    let centerCapculesRightImg = document.querySelector("#information__2")
    centerCapculesRightImg.innerHTML = /*html*/ `
    
        <img style="height: 300px; width: 350px; margin-right: 1rem; margin-top: 3rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRnYWw2aXN0Y2NtcDY5OGx5bXZ2c2Y4NnpxOW1mbzZhNHpkYXp6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2rnCZ1c8le1U9mtdS/giphy.gif">
    `

    let centerCapculesLeftImg = document.querySelector("#description__item")
    centerCapculesLeftImg.innerHTML = /*html*/ `
    
        <img style="height: 300px; width: 350px; margin-left: 1rem; margin-top: 3rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGg2ZWtmNDB3YTVmcmhuOTV0ZG9wMjMxYmJqZ2xsMWExcXpxZ3doZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yNFcucqrrSQKTar05W/giphy-downsized-large.gif">
    `

    let centerCapculesCenterImg = document.querySelector("#section__image")
    centerCapculesCenterImg.innerHTML = /*html*/ `
    
        <img style="height: 200px; width: 350px; margin-top: 10rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBveXppM3hxejJiaHJyZWc4eHR6YmF0NzI5a3NzYmlxM3Uxd2Q4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3d870Db9YwIyV69cWk/giphy.gif">
    `
}
