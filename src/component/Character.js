import React from 'react'
import { useState } from 'react'
import character1 from '../images/character-7.png'
import character2 from '../images/character-7.png'
import character3 from '../images/character-2.png'
import character4 from '../images/character-8.png'
import character5 from '../images/character-5.png'
import character6 from '../images/character-12.png'
import character7 from '../images/character-6.png'
import character8 from '../images/character-4.png'
import character9 from '../images/character-10.png'
import { Row, Col, Card } from 'react-bootstrap'



function Character() {
    const [characters, setCharacter] = useState([
        {
            image: character1,
            name: 'Brooklyn Simmons',
            friends: '23 friends'
        },
        {
            image: character2,
            name: 'Cameron Williamson',
            friends: '23 friends'
        },
        {
            image: character3,
            name: 'Leslie Alexander',
            friends: '23 friends'
        },
        {
            image: character4,
            name: 'Kristin Watson',
            friends: '23 friends'
        },
        {
            image: character5,
            name: 'Jenny Wilson',
            friends: '23 friends'
        },
        {
            image: character6,
            name: 'Marvin Mckinney',
            friends: '23 friends'
        },
        {
            image: character7,
            name: 'Jerome Bell',
            friends: '23 friends'
        },
        {
            image: character8,
            name: 'Guy Hawkins',
            friends: '23 friends'
        },
        {
            image: character9,
            name: 'Robert Fox',
            friends: '23 friends'
        }
    ])
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
