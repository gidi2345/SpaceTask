import  {useEffect, useState, useRef} from "react";

 const useRequest = (path: string, body?: any) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const reqType = useRef();
    const fetchInit = useRef();

    useEffect( () => {
        if(!!body && typeof body !== "string") {
            reqType.current = 'POST';
        }
        else {
            reqType.current = 'GET';
        }

        fetchInit.current =  {
            method: reqType.current,
            headers: {'Content-Type': 'application/json'},
        };
        if(reqType.current === 'POST') {
            fetchInit.current = {...fetchInit.current, body: JSON.stringify(body) }
        }

    },[])

    useEffect( () => {
            fetch(path, fetchInit.current).then(response => response.json())
                .then((response: Response) => {
                    setData(response);
                }).catch((err: Error) => {
                console.log(err);
                setError(err);
            })
    },[])

    return [data, error];
}

export default useRequest;

