import  {useEffect, useState} from "react";

const useKey = () => {
    const [key, setKey] = useState(1);


    useEffect( () => {
        setKey(key + 1);
    },[])

    return key;
}

export default useKey;

