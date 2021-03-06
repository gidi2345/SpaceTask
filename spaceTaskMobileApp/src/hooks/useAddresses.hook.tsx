import {useEffect, useState} from "react";


const useRequest = (path: string, body?: any) => {
    const [data, setData] = useState(undefined);
    const [bodyRequest, setBodyRequest] = useState(null);

    function validateBody() {
        if(!!body && typeof body !== "string") {
            setBodyRequest(JSON.stringify(body));
        }
    }

    useEffect(async () => {
        validateBody();

        fetch(path, bodyRequest).then((response: Response) => {
            setData(response.json());
        }).catch((err: Error) => {
            setData(err);
        })

    },[data])

    return data;
}
