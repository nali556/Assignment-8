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
            {data.map(element =>{
                    return(
                        <tr>
                            <th scope="row">{element.description}</th>
                            <td className="text-center">{element.amount}</td>
                            <td className="text-align-center">{element.date}</td>
                        </tr>
                    )
                })
            }
        </div>
    )
}
