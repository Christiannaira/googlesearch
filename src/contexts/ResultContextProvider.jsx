import { useState, useContext, createContext } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [serachTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {

        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6c0aadac8msh4a56427c212ca0ap1ca698jsnbe1faf786f30',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        })

        const data = await response.json();

        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults, results, serachTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext);