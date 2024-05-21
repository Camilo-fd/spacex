// export const getAllCompany = async (page,limit)=>{
//     let config = {
//         headers:{
//             "content-type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//             "options": {
//                 page,
//                 limit
//             }
//         })
//     }
//     let res = await fetch("https://api.spacexdata.com/v4/company/query", config)
//     let data = await res.json();
//     console.log(data);
//     return data;
// }

// export const getAllCompanyId = async (companyId)=>{
//     let res = await fetch(`https://api.spacexdata.com/v4/company/${companyId}`)
//     let data = await res.json();
//     return data;
// }

export const getCompanyFetch = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();
    return data;
}

export const informationOfCompany1 = async (Company) =>{

    let centerbottom = document.querySelector("#description__item")
    centerbottom.innerHTML = /*html*/ `
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
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>direccion: </b>${Company.headquarters.address}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>ciudad: </b>${Company.headquarters.city}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/ubicacion.svg">
                    <b>estado: </b>${Company.headquarters.state}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>sitio_web: </b>${Company.links.website}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>flickr: </b>${Company.links.flickr}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>twitter: </b>${Company.links.twitter}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>alon_twitter: </b>${Company.links.elon_twitter}
                </td>
            </tr>
        </tbody>
    </table>

    <img style="height: 60%; width: 250px; margin-left: 1rem; margin-top: 2rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnI3djN3OXB4YWR5aXo1NjE3MjZmdGZlYzM5ajliamZvandiZDJldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9tx0gy37p7oXu/giphy-downsized-large.gif">


    `
}

export const informationOfCompany2 = async (Company) =>{

    let centerbottom = document.querySelector("#information__2")
    centerbottom.innerHTML = /*html*/ `
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
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>resumen: </b>${Company.summary}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>id: </b>${Company.id}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>cto_propulsion: </b>${Company.cto_propulsion}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>coo: </b>${Company.coo}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>cto: </b>${Company.cto}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>ceo: </b>${Company.ceo}
                </td>
            </tr>
        </tbody>
    </table>

    <img style="height: 40%; width: 300px; margin-left: 1rem; margin-top: 2rem" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JnaDF4aXltMWtranZhdncwYXlyc3NkZjRzb3VhMm85NGpuM2VjNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yiRHXp4y3aiJNlMm9F/giphy.gif">


    `
}

export const informationOfCompany3 = async (Company) =>{

    let companyInformation1 = document.querySelector("#information__table__1")
    companyInformation1.innerHTML = /*html*/ `
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
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>nombre: </b>${Company.name}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>fundador: </b>${Company.founder}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>valoracion: </b>${Company.valuation}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>id: </b>${Company.id}
                </td>
            </tr>
        </tbody>
    </table>
    `

    let companyInformation2 = document.querySelector("#information__table__2")
    companyInformation2.innerHTML = /*html*/ `
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
        font-size: 18px;
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
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>fundada: </b>${Company.founded}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/identificador.svg">
                    <b>empleados: </b>${Company.employees}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>vehiculos: </b>${Company.vehicles}
                </td>
            </tr>
            <tr>
                <td>
                    <img src="storage/img/icons/wikipedia.svg">
                    <b>sitios_lanzamiento: </b>${Company.launch_sites}
                </td>
            </tr>
        </tbody>
    </table>
    `
}