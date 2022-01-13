import React, { Component, useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import DebitData from './DebitData'
export default function Debits() {
    const [data, setData] = useState([])

    //3. let's define the function `getData`
    const getData = async () => {
        try{
        //4. fetch and assign the response 
        const response = await axios("https://moj-api.herokuapp.com/debits")
        console.log("RESPONSE:::::", response)
        setData(response)
        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <DebitData data={data.data}/>
        </div>
    )
}


