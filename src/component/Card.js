import React from 'react'
import { useState } from 'react'
import { cards } from '../cardCharacData'
import { Row, Col, Card } from 'react-bootstrap'
import PlanetPop from './PlanetPop'
import PlanetForm from './PlanetForm'



function Cards() {
    const [chara, setChara] = useState(false)
    const [value, setValue] = useState({})

    const rollit = (card) => {
      setChara(!chara)
      setValue({
        title : card.title,
        body : card.body
      })
    }

    return (
        <div className="mb-5 cardPage">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {cards.map((card) => (
                <div className="singleCards" key={card.id} onClick={() => rollit(card)}>
                    <Col>
                        <Card className="border border-light shadow-sm character-card">
                            <Card.Img className="justify-content-center m-auto" variant="top" src={card.image} />
                            <Card.Body>
                            <Card.Title>
                                <h5 class="p-Title">{card.title}</h5>
                            </Card.Title>
                            <Card.Text>
                                <p class="p-Body">pop {card.body}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </div>
            ))}
   
            </Row>
            <PlanetForm />
            <div>
            {
                chara && <PlanetPop title={value.title} body={value.body} onHide={() => setChara(false)}/>
            }
            </div>
        </div>
    )
}

export default Cards;
