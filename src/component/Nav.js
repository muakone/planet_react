import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap';
import { useState } from 'react';
import Cards from './Card';
import Character from './Character';

function Navs() {
    const [key, setKey] = useState('home');
    return (
       <div className="mb-3">
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Cards />
      </Tab>
      <Tab eventKey="profile" title="Character">
        <Character />
      </Tab>
    </Tabs>

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
