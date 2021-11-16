import React from 'react'
import { Nav } from 'react-bootstrap';
//import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navs() {

   // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);


    return (
       <div className="mb-3">
           <Nav variant="pills" defaultActiveKey="/Card">
                <Nav.Item>
                    <Nav.Link className="links" href="/Card">
                    <Link to="/" className="text-decoration-none text-dark opacity-75">planets</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                    <Link to="/character" className="text-decoration-none text-dark opacity-75">chacracters</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div> 

        /*<div className="nav mb-3">
        <Nav variant="pill" defaultActiveKey="/Card" className="d-inline-flex justify-content-evenly text-grey">
            <Nav.Item className="">
                <Nav.Link href="/Card">
                 <Link to="/" className="text-decoration-none text-dark opacity-75">planets</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
                <Nav.Link eventKey="link-1">
                    <Link to="/character" className="text-decoration-none text-dark opacity-75">chacracters</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </div> */
    )
}

export default Navs;
