import React from 'react'
import { characters } from '../cardCharacData'
//import { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'



function Character() {
    
    return (
        <div className="singleCharacPage">
            <Row xs={1} md={3} lg={3} className="g-4">
            {characters.map((character) => (
                <div className="singleCharacter" key={character.id}>
                    <Col>
                        <Card className="shadow-sm" border="dark">
                            <Card.Img className="justify-content-center m-auto" variant="top" src={character.image} />
                            <Card.Body>
                            <Card.Title>
                                <h5>{character.name}</h5>
                            </Card.Title>
                            <Card.Text>
                                <p>{character.friends}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            ))}

            </Row>
        </div>
    )
}

export default Character;
