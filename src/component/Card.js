import React from 'react'
import { useState } from 'react'
import planet1 from '../images/planet-9.svg'
import planet2 from '../images/planet-8.svg'
import planet3 from '../images/planet-7.svg'
import planet4 from '../images/planet-6.svg'
import planet6 from '../images/planet-5.svg'
import planet7 from '../images/planet-1.svg'
import planet8 from '../images/planet-2.svg'
import planet10 from '../images/planet-4.svg'
import planet11 from '../images/planet-3.svg'


import { Row, Col, Card } from 'react-bootstrap'

function Cards() {
    const [cards, cardAlpha] = useState([
        {
            id: 1,
            image: planet1,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 2,
            image: planet2,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 3,
            image: planet3,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 4,
            image: planet4,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 5,
            image: planet4,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 6,
            image: planet6,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 7,
            image: planet7,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 8,
            image: planet8,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 9,
            image: planet8,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 10,
            image: planet10,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 11,
            image: planet11,
            title: "Planet Alpha",
            body: "pop 235"
        },
        {
            id: 12,
            image: planet6,
            title: "Planet Alpha",
            body: "pop 235"
        }
    ])


    return (
        <div>
            <Row xs={1} md={3} lg={4} className="g-4">
            {cards.map((card) => (
                <div className="singleCards" key={card.id}>
                    <Col>
                        <Card className="border border-light shadow-sm character-card">
                            <Card.Img className="justify-content-center m-auto" variant="top" src={card.image} />
                            <Card.Body>
                            <Card.Title>
                                <h5>{card.title}</h5>
                            </Card.Title>
                            <Card.Text>
                                <p>{card.body}</p>
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

export default Cards;
