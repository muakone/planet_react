import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function MyVerticallyCenteredModal(props) {
  const [names, setName] = useState('')
  const handleClickAgainAndAgain = () => {
    setName("Bummer!, We can't create this planet right now. Probably a black hole in the way. Try again later  ")
}
    return (
    <div>
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modals"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-5">
          <h1 className="planetForm">Planet</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formimg">image</Form.Label>
              <Form.Control className="formInput" type="text" />
              <p className="pasteimg">Paste the URL of a JPG or PNG</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formimg">Name</Form.Label>
              <Form.Control className="formInput" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formimg">Description</Form.Label>
              <Form.Control className="formInput" as="textarea" rows={3} />
          </Form.Group>
        </Form>  
        <div>
        <p className="text-danger">{ names } </p>
        </div>
        <div className="d-flex justify-content-end">
          <Button className="mx-4 closeForm" onClick={props.onHide}>Close</Button>
          <Button className="createForm" onClick={handleClickAgainAndAgain}>Create planet</Button>
        </div> 
        </Modal.Body>
      </Modal>
    </div>
    );
  }
  export default MyVerticallyCenteredModal;