import React, {useState} from "react";
import Modal from '../modules/modal';
 
export default function Home() {
    const [modal, setModal] = useState(false);

    function displayModal() {
        setModal(!modal)
        console.log('showModal', modal);
    }
    
    return (
        <>
            <p>This is home</p>
            <button onClick={() => displayModal()}>{!modal ? 'Show Modal' : 'Hide Modal'}</button>
            
            {modal ? <Modal state={modal} sendStateToParent={displayModal}/> : null}
                
        </>

    )

}