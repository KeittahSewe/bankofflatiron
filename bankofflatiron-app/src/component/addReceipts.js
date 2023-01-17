// this script will be helping us post new receipts onto the json through the use of post requests
import React from "react";

function AddReceipt(){

    const handeSubmit = (z) => {
        z.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handeSubmit}>
                <input type="text" placeholder="DATE(YYYY-MM-DD)"></input>
                <input type="text" placeholder="DESCRIPTION"></input>
                <input type="text" placeholder="CATEGORY"></input>
                <input type="text" placeholder="AMOUNT"></input>
                <input type = "submit"></input>
            </form>
        </div>
    )
}

export default AddReceipt;