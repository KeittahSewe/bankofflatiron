// this js file willl be handling the fetching of data and making it appear on app.js
import React, {useState, useEffect} from "react";

// useState and useEffect imported as they are needed in order to help fetch from the json server

function GetReceipts (){
    const [transactions,getTransactions] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(data => {
            getTransactions(data)
        })
    })


    const [searchData, setSearchData] = useState("") 
    const Searching = (z) => {
        z.preventDefault()
        console.log(searchData)
    }
    
    
    const toBeDisplayed = transactions.filter((receipt)=>{
        if (searchData === ""){
            return true
        }else{
            return receipt.description.includes(searchData)
        }
    })



    //console.log(transactions)
    
    return(
        <div>
            <h2>YOUR RECEIPTS</h2>
            <form id="SearchContainer" onSubmit={Searching}>
                <input type= "text" id="SearchValues" placeholder="SEARCH BY RECEIPT DESCRIPTION" value={searchData} onChange = {(e) => setSearchData(e.target.value)}></input>
                <input type="submit"/>
            </form>
            <br/>
            <table>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>AMOUNT</th>
                </tr>
                {toBeDisplayed.map((receipt) => {
                    return(
                        <tr key={receipt.id}>
                            <td>{receipt.id}</td>
                            <td>{receipt.date}</td>
                            <td>{receipt.description}</td>
                            <td>{receipt.category}</td>
                            <td>{receipt.amount}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default GetReceipts