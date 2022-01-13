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
      setData(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
        <Link to="/">Back to Home</Link>
      <h1 className="text-center">Credits</h1>
      <table className="table table-dark table-striped text-center m-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <CreditData data={data.data}></CreditData>
      </table>
      <div className="d-flex justify-content-around">
      <Link to="/addCredit"><button type="button" className="btn btn-dark add">
          Add Credit
        </button></Link>
      </div>
      
    </div>
  );
}