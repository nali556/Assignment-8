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
      console.log("RESPONSE:::::", response);
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
      <div className="text-center display-1">Debits</div>
      <table className="table table-dark table-striped m-5">
        <thead>
          <tr>
            <th className="text-align-center" scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <DebitData data={data.data} />
        </tbody>
      </table>
    </div>
  );
}
