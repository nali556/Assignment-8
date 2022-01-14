import axios from "axios";
import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
export default function AddDebits() {
    const [name, setName] = useState("Enter the item name");
    const [price, setPrice] = useState("Enter the price here")
    const [id, setId] = useState("Enter the ID")
    const date = new Date()
    let currentDate = date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate()
    const onSubmitForm = async (event) => {
        event.preventDefault()
        let inputName = event.target[0].value
        let inputPrice = event.target[1].value
        console.log(event)
        console.log(inputName)
        console.log(inputPrice)
        console.log(currentDate)
        const inputObj = new Object()
        inputObj.description = inputName
        inputObj.amount = inputPrice
        inputObj.date = currentDate
        console.log(inputObj)
        //const response = await axios.get("https://moj-api.herokuapp.com/debits")
        // .then(response =>{
        //     //this.state.debittrans=response.data
        // })
    
    }


    return(
        <Fragment>
            <Link to="/debits">Back to Debits List</Link>
            <h1 className = "text-center mt-5"> 
                Add Your Debit
            </h1>

            <form className = "d-flex m-5" onSubmit = { onSubmitForm }>
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {name} 
                    onChange = {(event) => setName(event.target.value)} 
                    />
                <input
                    type="text"
                    className="form-control"
                    value = {price}
                    onChange = {(event) => setPrice(event.target.value)}
                />
                 <input
                    type="text"
                    className="form-control"
                    value = {id}
                    onChange = {(event) => setId(event.target.value)}
                />
                <button className="btn btn-dark" >
                    ADD
                </button>
            </form>
        </Fragment>
        
    )

}
