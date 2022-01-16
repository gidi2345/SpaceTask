import  {useEffect, useState} from "react";

export const useRequest = (path: string, body?: any) => {
    const [data, setData] = useState(undefined);
    const [bodyRequest, setBodyRequest] = useState(null);


    useEffect( () => {
        if(!!body && typeof body !== "string") {
            setBodyRequest(JSON.stringify(body));
        }

         fetch(path, {mode: 'cors', body: bodyRequest}).then((response: Response) => {
            setData(response.json());
            console.log('dfsdf');
        }).catch((err: Error) => {
            setData(err);
        })
    },[data,bodyRequest, path,body])

    return data;
}

