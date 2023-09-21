import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {

        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6c0aadac8msh4a56427c212ca0ap1ca698jsnbe1faf786f30',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        })

        const data = await response.json();


        setResults(data);
        // console.log(data)

        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext)