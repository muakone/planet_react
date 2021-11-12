import React from 'react'
import { Nav } from 'react-bootstrap';

function Navs() {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);


    return (
        <div>
            <Nav variant="pill" defaultActiveKey="/home" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link href="/Card">PLANETS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Character">CHARACTERS</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navs;
