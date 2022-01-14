import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DebitData from "./DebitData";
export default function Debits() {
  const [data, setData] = useState([]);

  //3. let's define the function `getData`
  const getData = async () => {
    try {
      //4. fetch and assign the response
      const response = await axios("https://moj-api.herokuapp.com/debits");
      setData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    if (localStorage.getItem("debitData")) {
      setData(JSON.parse(localStorage.getItem("debitData")));
    } else if (!localStorage.getItem("debitData")) {
      getData();
    }
  }, []);

  console.log(data)

  const [name, setName] = useState("Enter the item name");
  const [price, setPrice] = useState("Enter the price here");
  const [id, setId] = useState("Enter the ID");
  const date = new Date();
  let currentDate =
    date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "T";

  const onSubmitForm = async (event) => {
    event.preventDefault();
    let inputName = event.target[0].value;
    let inputPrice = event.target[1].value;
    const inputObj = new Object();
    inputObj.description = inputName;
    inputObj.amount = inputPrice;
    inputObj.date = currentDate;
    const updatedDebitArray = [...data, inputObj];
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
      {/* <div className="d-flex justify-content-around">
        <Link to="/addDebit">
          <button type="button" className="btn btn-dark add">
            Add Debit
          </button>
        </Link>
      </div> */}

      <h1 className="text-center mt-5">Add Your Debit</h1>

      <form className="d-flex m-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
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
