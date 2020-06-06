import { useState, useEffect } from 'react';
const api = 'http://rest-api.in/api/users';

const useGetData = () => {
    const [myData, setData] = useState([]);

    useEffect (() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return myData;
}

export default useGetData;