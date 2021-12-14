import React, { useEffect, useState } from "react";
import { apiEndpoints} from "../services/api/endpoints";

export default function Api() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
       getData()
    }, [])

    function getData() {
        apiEndpoints.getCards()
            .then(res => {
                let response = res;
                console.log('response', response);
                setCards(response);
            }).catch(error  => {
                apiEndpoints.handleError(error)

                }
            )
    }



    return (
        <>
            <p>This is APIs</p>
            <div className="stars">
                {cards}
            </div>



        </>

    )

}