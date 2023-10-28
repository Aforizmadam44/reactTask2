import { createContext } from "react";

export const DataContext= createContext({})
let data={
    username:'ali', email:'alion@gm.com'
}
const DataContextProvider=({children})=>{
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider