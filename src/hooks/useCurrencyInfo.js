import { useState, useEffect } from "react"


export const useCurrencyInfo = (currency = 'inr') => {

    const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res[currency]))
        console.log("useCurrencyInfo", data);
    }, [currency])

    return data;
}