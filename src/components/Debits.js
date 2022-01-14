//Similar to Credits.js, if not almost exact.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DebitData from "./DebitData";
export default function Debits() {
  const [data, setData] = useState([]);

  
  const getData = async () => {
    try {
      const response = await axios("https://moj-api.herokuapp.com/debits");
      setData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

//Get local storage on render, if it doesnt exist call getData to get the api
  useEffect(() => {
    if (localStorage.getItem("debitData")) {
      setData(JSON.parse(localStorage.getItem("debitData")));
    } else if (!localStorage.getItem("debitData")) {
      getData();
    }
  }, []);

//Input
  const [name, setName] = useState("Enter the item name");
  const [price, setPrice] = useState("Enter the price here");
  const [id, setId] = useState("Enter the ID");
  const date = new Date();
  let currentDate =
    date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "T";
//T for String substr workaround
  const onSubmitForm = async (event) => {
    event.preventDefault();
    let inputName = event.target[0].value;
    let inputPrice = event.target[1].value;
    let inputId = event.target[2].value;
    //Create object
    const inputObj = new Object();
    inputObj.id = inputId
    inputObj.description = inputName;
    inputObj.amount = inputPrice;
    inputObj.date = currentDate;
    //Update the local storage with new data
    const updatedDebitArray = [...data, inputObj]; //New array with everything in the old array, data, with new obj
    setData(updatedDebitArray);
    localStorage.setItem("debitData",JSON.stringify(updatedDebitArray))
  };

  return (
    <div className="container">
      <h1 className="text-center">Debits</h1>
      <table className="table table-dark table-striped text-center m-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <DebitData data={data}></DebitData>
      </table>

      <h1 className="text-center mt-5">Add Your Debit</h1>

      <form className="d-flex m-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Enter the price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <button className="btn btn-dark">ADD</button>
      </form>
    </div>
  );
}
