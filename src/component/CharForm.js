import React from 'react'
import MyVerticallyCenteredModalChar from './VerticalModalsChar'
import { AiFillPlusCircle } from "react-icons/ai";

function CharForm() {

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
        <div className="d-flex justify-content-end plus">
            <AiFillPlusCircle style={{fontSize:"50px"}} onClick={() => setModalShow(true)} />
        </div>
    
          <MyVerticallyCenteredModalChar
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
    )
}

export default CharForm
