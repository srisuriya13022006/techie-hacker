import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [datas, setDatas] = useState()

    console.log('Data:\n', datas)

    return (
        <DataContext.Provider value={{ datas, setDatas }}>
            {children}
        </DataContext.Provider>
    )

}

export const Data = () => {
    return useContext(DataContext);
}
