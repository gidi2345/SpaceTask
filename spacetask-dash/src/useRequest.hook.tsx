import  {useEffect, useState} from "react";

export const useRequest = (path: string, body?: any) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [bodyRequest, setBodyRequest] = useState(null);


    useEffect( () => {
        if(!!body && typeof body !== "string") {
            setBodyRequest(JSON.stringify(body));
        }

         fetch(path, {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(body),
         }).then(response => response)
             .then((response: Response) => {
           // console.log(response);
           // setData(response);
        }).catch((err: Error) => {
            console.log(err);
             setError(err);
        })
    },[])

    return [data, error];
}

