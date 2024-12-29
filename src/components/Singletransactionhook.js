import axios from 'axios'
import  { useEffect, useState } from 'react'

function Transhook(url) {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    useEffect(()=>{
        if(url)
            setLoading(true)
        setError(false)
        axios
        .get(url)
        .then((response) => {
            setData(response.data)
            setLoading(false)
            setError(false)
        })
        .catch((error) => {
            console.error(error)
            setLoading(false)
            setError(true)
        })
    },[url])
    return {data , loading, error}
}

export default Transhook;