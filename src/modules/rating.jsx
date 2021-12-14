import React, { useState, useEffect} from "react";
import './rating.css';
import Modal from '../modules/modal';

export default function Rating(props) {
    const [stars, setStars] = useState([]);
    const [modal, setModal] = useState(false);
    let star = '☆';
    
    console.log(props.stars)

    function initStars() {
        const stars = [];
        for (let i = 0; i < props.stars; i++) {
            stars.push(star);
        }
        setStars(stars);
    }

    function displayModal() {
        setModal(!modal)
        console.log('showModal', modal);
    }

    // Called when the component
    // first mounts, and called only once
    useEffect(() => {
        initStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function rate(index) {
        console.log('index', index);
        let filledStar = '★'
        let stars = [];

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
            <section className="className">
            {modal ? <Modal state={modal} sendStateToParent={displayModal} /> : null}

            </section>

        </>

    )

}
