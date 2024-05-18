export const getAllCompany = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCompanyId = async (companyId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/${companyId}`)
    let data = await res.json();
    return data;
}