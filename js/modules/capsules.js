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
            align-items: center;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            color: white; 
        }
        
        th {
            background-color: #e72d2d7a;
        }
        
        tr {
            background-color: #e72d2d7a;
        }

        img {
            width: 50px;
            height: 50px;
        }

    </style>

    <table>
        <tbody>
            <tr>
                
                <td>
                    <img src="../storage/img/icons/iconos_texto/actualizacion.svg">
                    <b>última actualización:</b> ${capsules.last_update}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/lanzamiento.svg">
                    <b>launches:</b> ${capsules.launches[0]}
                </td>
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
            text-align: left;
            color: white; 
        }
        
        td {
            display: flex;
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
                    <img src="../storage/img/icons/iconos_texto/estado.svg">
                    <b>estado:</b> ${capsules.status}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/tipo.svg">
                    <b>tipo:</b> ${capsules.type}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../storage/img/icons/iconos_texto/identificador.svg">
                    <b>id:</b> ${capsules.id}
                </td>
            </tr>
        </tbody>
    </table>

    `


    let centerCapculesLeftImg = document.querySelector("#description__item")
    centerCapculesLeftImg.innerHTML = /*html*/ `

        <img style="height: 300px; width: 350px; margin-left: 2rem; margin-top: 5rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjU4bnNrb3FnZ3lsZTRocHg3cXc2NXBlbm9uN24yOTZsOGE2MXVxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btZ3T6y3JTmjg4w/giphy.gif">
    `

    let centerCapculesRightImg = document.querySelector("#information__2")
    centerCapculesRightImg.innerHTML = /*html*/ `

        <img style="height: 300px; width: 350px; margin-right: 2rem; margin-top: 5rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNnbWEyZGNhandpZ3dkZ2UzdmE2cm4zNnZrNTV4YXZ6b2w3OWtwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CuKEZdZ3V01gI/giphy.gif">
    `
}

