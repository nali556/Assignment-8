import React, { Fragment } from "react";

export default function CreditData({ data }) {
  //If code below not done, page does not load, as data is undefined when rendering
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.map((element) => {
        return (
          <tbody key={element.description}>
            <tr>
              <th scope="row">{element.description}</th>
              <td>
                <span>{element.amount}</span>
              </td>
              <td>
              <span>{element.date.substr(0, element.date.indexOf('T'))}</span>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
