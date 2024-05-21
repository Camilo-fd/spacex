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

    let centerCapculesLeft = document.querySelector("#information__table__2")
    centerCapculesLeft.innerHTML = /*html*/ `
    
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 3rem;
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
                    <img src="storage/img/icons/agencia.svg">
                    <b>agencia:</b> ${crew.agency}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>wikipedia:</b> ${crew.wikipedia}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfCrew2= async (crew) =>{

    let centerCapculesRight = document.querySelector("#information__table__1")
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
                    <img src="storage/img/icons/estado.svg">
                    <b>estado:</b> ${crew.status}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/lanzamiento.svg">
                    <b>lanzamientos:</b> ${crew.launches}
                </td>
            </tr>
        </tbody>
    </table>

    `
}

export const informationOfCrew3= async (crew) =>{

    let centerCapculesCenterImg = document.querySelector("#section__image")
    centerCapculesCenterImg.innerHTML = /*html*/ `
        <img style="width: 100%; height: 350px" src="${crew.image}">
    `
        
    let centerCapculesLeftImg = document.querySelector("#description__item")
    centerCapculesLeftImg.innerHTML = /*html*/ `    
        <img style="height: 70%; width: 300px; margin-left: 1rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU4Y3cxcHlvZGE5ZHpmMHA0c2ZlaWVta2I2aDl5ZDFlYWtnaXBqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JoIcxJVEBTe1NBj9hR/giphy.gif">
    `
    
    let centerCapculesRightImg = document.querySelector("#information__2")
    centerCapculesRightImg.innerHTML = /*html*/ `
        <img style="height: 70%; width: 300px; margin-right: 1rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhhZG5vY3g4b3FkNHJlbW95dG1hbjgwdjlrbWJ3b2V4d2RpM3FnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lZSj7A3Dq8gk4qhEfB/giphy.gif">
    `
}


