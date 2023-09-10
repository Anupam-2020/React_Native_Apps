import { useEffect, useState } from "react";

const useApi = (middlePartOfApi) => {
    const [apiData, setApiData] = useState();
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '';

    const getApiResponse = async () => {
        try {
            const response = await fetch(`${BASE_URL}${middlePartOfApi}?api_key=${API_KEY}&language=en-US`)
            const data = await response.json();
            setApiData(data);
        } catch(err) {
            console.log(err);
        }
        
    }
    useEffect(() => {
        getApiResponse()
    },[])

    return apiData;
}

export default useApi;