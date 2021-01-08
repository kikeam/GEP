



export const getGifs = async(categorie) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nmviO08VdruU76sS8KDSVr2NDYL8boxn&q=${ encodeURI(categorie) }&limit=10`
    const res = await fetch (url)
    const {data} = await res.json()

    //console.log(data)
    
    const gifs= data.map(gif=>( 
        {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        } 
    ))

    return gifs
}