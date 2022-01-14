import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom"

export default function AddCredit() {
    const [name, setName] = useState("Enter the item name");
    const [amount, setAmount] = useState("Enter the price")
    const [date, setDate] = useState("Enter the date")
    //1. let create a function to submit and use async/await    
    const onSubmitForm = async (event) => {
        event.preventDefault() //prevent page refresh to happen so we can handle the data
    //2. prevent default 
        try{    //4. send the request 
            //5. declare body 
            const body = {name}
            console.log(event.target.value)
            //6. fetch 
            const response = await fetch("https://moj-api.herokuapp.com/debits", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              })
              console.log(response)
            }
        catch(err){ //3. error catch
            console.error(err.message)
        }
    }


    return(
        <Fragment>
            <Link to="/credits">Back to Credits List</Link>
            <h1 className = "text-center mt-5"> 
                Add Credit
            </h1>
            <form className = "d-flex m-5" onSubmit = { onSubmitForm }>
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {name} 
                    onChange = {(event) => setName(event.target.value)} 
                    />
                
                <button className="btn btn-dark" >
                    ADD
                </button>
            </form>
        </Fragment>
        
    )

}
