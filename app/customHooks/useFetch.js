import { useState } from "react";

export default function useFetch(callback) {
    const [isFetching, setIsFetching] = useState(false);
    
    const fetchData = async (fetchFunction) => {
        if(!isFetching) {
            try {
                setIsFetching(true);
                const data = await fetchFunction();
                callback(data);
            } catch (error) {
                console.error('Error while fetching data', error);
            } finally {
                setIsFetching(false);
            }
        } else {
            console.log('There is currently a fetch taking place');
        }
    }

    return fetchData;
}