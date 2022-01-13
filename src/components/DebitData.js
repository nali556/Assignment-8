import React from 'react'

export default function DebitData({data}) {
    if(data === undefined){
        return(
            <div>
                Loading...
            </div>
        )
    }
    console.log(data)
    console.log(typeof(data))
    return (
        <div>
            <h1> Debits </h1>
            {data.map(element =>{
                    return(
                        <tbody key= {element.id}>
                            <tr>
                                <th scope="row">{element.description}</th>
                                <td>{element.amount}</td>
                                <td>{element.date}</td>
                            </tr>
                        </tbody>

                    )
                })
            }
        </div>
    )
}
