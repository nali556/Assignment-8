import React, { Component, useState, useEffect } from "react";
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
      setData(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-center">Debits</h1>
      <table className="table table-dark table-striped text-center m-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
          <DebitData data={data.data}></DebitData>
      </table>
    </div>
  );
}
