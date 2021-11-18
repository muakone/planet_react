import React from 'react'
import { characters } from '../cardCharacData'
import { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import SidePop from './SidePop'
import CharForm from './CharForm'
//import Plus from './Plus'



function Character() {
    const [chara, setChara] = useState(false)
    //const sidePopUps = () => {setChara(!chara)}

    const [value, setValue] = useState({})

    const rollit = (e, character) => {
      setChara(!chara)
      setValue({
        name : character.name
      })
    }
    return (
        <div className="d-flex pop-chara">
           <div className="singleCharacPage mb-5">
           <Row xs={1} sm={2} md={3} lg={3} className="g-4">
            {characters.map((character) => (
                <div className="singleCharacter" key={character.id} onClick={(e) => rollit(e, character)}>
                    <Col>
                        <Card className="shadow-sm">
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
            <CharForm />
            <div>
            {
                chara && <SidePop name={value.name} />
            }
            </div>
           </div>
        </div>
    )
}

export default Character;
