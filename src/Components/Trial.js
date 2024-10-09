import { useEffect, useState } from "react";

const Trial = () => {

    const [data , setData] = useState([]);
    useEffect(() => {
        getAll()
    }, []);
    const getAll = async () => {
        await fetch('http://localhost:3001/bookings')
        .then((res) => {return res.json()})
        .then((res) => {console.log("res",res)})
    }
    return(<h1>hello</h1>);
}

export default Trial;