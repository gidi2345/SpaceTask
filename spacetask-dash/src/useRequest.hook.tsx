import  {useEffect, useState} from "react";

export const useRequest = (path: string, body?: any) => {
    const [data, setData] = useState(undefined);
    const [bodyRequest, setBodyRequest] = useState(null);

    function validateBody() {
        if(!!body && typeof body !== "string") {
            setBodyRequest(JSON.stringify(body));
        }
    }

    useEffect( () => {
        validateBody();

         fetch(path, bodyRequest).then((response: Response) => {
            setData(response.json());
        }).catch((err: Error) => {
            setData(err);
        })
    },[data,bodyRequest, path])

    return data;
}

