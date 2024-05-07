export const Izquierdo1 = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();

    let dataUpdate = []

    for (let cohete of data) {
        dataUpdate.push({
          name: cohete.name,
          description: cohete.description,
          id: cohete.id,
          flickr_images: cohete.flickr_images,
        })
    }

    return dataUpdate
    
}