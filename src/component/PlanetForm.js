import React from 'react'
//import { AiOutlinePlus } from 'react-icons/ai'
//import Button from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from './VerticalModal'
import { AiFillPlusCircle } from "react-icons/ai";
//import Plus from './Plus';

function PlanetForm() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="d-flex justify-content-end plus">
        <AiFillPlusCircle style={{fontSize:"50px"}} onClick={() => setModalShow(true)} />
    </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PlanetForm;