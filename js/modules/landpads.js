export const getAllLandpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLandpadsId = async (landpadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${landpadsId}`)
    let data = await res.json();
    return data;
}