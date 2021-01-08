import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [object, setObject] = useState({
        data:[],
        loading: true
    });
    
    useEffect(() => {
        getGifs(category)
            .then(res=>{
                setInterval(() => {
                    setObject({
                        data: res,
                        loading: false
                    })
                }, 3000);
            })
            
    }, [category]);
    
    
    
    return object

}
