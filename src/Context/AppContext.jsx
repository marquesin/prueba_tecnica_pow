import { useState, createContext } from "react";

export const AppContext= createContext();

export const AppProvider= (props) =>{
    const [cant_total, setCantTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);
    const [cant_art_1, setCantArt1] = useState(0);
    const [cant_art_2, setCantArt2] = useState(0);
    return(
        <AppContext.Provider value={{cant_art_1, setCantArt1,cant_art_2, setCantArt2,cant_total,setCantTotal,precio_total,setPrecioTotal}}>{props.children}</AppContext.Provider>
    )
}