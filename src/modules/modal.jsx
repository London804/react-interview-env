import React from "react";
import './modal.css';

export default function Modal({props, sendStateToParent}) {

    console.log('props', props)
    
    return (
        <>
            <section
                className="modal"
                onClick={() => sendStateToParent()}>
                    <div className="modal__content">
                        <div
                            className="modal__close" 
                            onClick={() => sendStateToParent()}>
                        X
                    </div>
                    <p>modal works!</p>
                </div>
            </section>
        </>

    )

}
