import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreditData from "./CreditData";
export default function Credits() {
  const [data, setData] = useState([]);

  //3. let's define the function `getData`
  const getData = async () => {
    try {
      //4. fetch and assign the response
      const response = await axios("https://moj-api.herokuapp.com/credits");
      setData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("creditData")) {
      setData(JSON.parse(localStorage.getItem("creditData")));
    } else if (!localStorage.getItem("creditData")) {
      getData();
    }
  }, []);

  const [name, setName] = useState("Enter the item name");
  const [amount, setAmount] = useState("Enter the price");
  const [id, setId] = useState("Enter the ID")
  const date = new Date();
  let currentDate =
    date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "T";
  //1. let create a function to submit and use async/await
  const onSubmitForm = async (event) => {
    event.preventDefault();
    let inputName = event.target[0].value;
    let inputPrice = event.target[1].value;
    let inputId = event.target[2].value;
    const inputObj = new Object();
    inputObj.id = inputId;
    inputObj.description = inputName;
    inputObj.amount = inputPrice;
    inputObj.date = currentDate;
    const updatedCreditArray = [...data, inputObj];
    setData(updatedCreditArray);
    localStorage.setItem("creditData", JSON.stringify(updatedCreditArray));
  };

  return (
    <div className="container">
      <h1 className="text-center">Credits</h1>
      <table className="table table-dark table-striped text-center m-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <CreditData data={data}></CreditData>
      </table>
      <h1 className="text-center mt-5">Add Credit</h1>
            <form className = "d-flex m-5" onSubmit = { onSubmitForm }>
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {name} 
                    onChange = {(event) => setName(event.target.value)} 
                    />
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter the price"
                    value = {amount}
                    onChange = {(event) => setAmount(event.target.value)}
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
    </div>
  );
}
