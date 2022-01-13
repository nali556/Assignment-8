import React, { Fragment } from "react";

export default function DebitData({ data }) {
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  console.log(data);
  console.log(typeof data);
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
                <span>{element.date}</span>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
