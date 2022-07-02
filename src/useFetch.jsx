
import { useState,useEffect } from "react";

const useFetch = ((url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCount = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCount.signal })
            .then(res => {
                if(!res.ok){    
                    throw Error("could not fetch data for that resource ");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }else{
                    setLoading(false);
                    setError(err.message);
                }
                
            })    
        }, 1000);
    }, [url]);

    return { data, loading, error };
})


export default useFetch;