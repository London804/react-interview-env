import React, { useState, useEffect} from "react";
import './rating.css';

export default function Rating(props) {
    // let stars = [];
    const [stars, setStars] = useState([]);
    let star = '☆';
    
    console.log(props.stars)

    function initStars() {
        const stars = [];
        for (let i = 0; i < props.stars; i++) {
            stars.push(star);
        }
        setStars(stars);
    }

    // Called when the component
    // first mounts, and called only once
    useEffect(() => {
        initStars();
    }, []);

    function rate(index) {
        console.log('index', index);
        let filledStar = '★'
        let stars = [];
        // setStars([])

        console.log('setStars', stars);


        for (let i = 0; i < props.stars; i++) {
            stars.push(star);
        }
        stars.forEach((star, i) => {
            while (index >= 0) {
                stars[index] = filledStar;
                index--;
            }

        })
        console.log('stars filled', stars)
        // return stars
        setStars(stars)

    }

    // console.log('stars', stars);

    return (
        <>
            <div className="stars">
                {stars.map((star, i) => (
                    <h2 
                        key={i}
                        onClick={() => rate(i)}>
                        {star}
                    </h2>
                ))}
            </div>

        </>

    )

}



// function setStars(stars) {
//     console.log('stars', stars)
    
//     return stars;
// }