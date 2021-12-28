import React from 'react'
import jane1 from '../images/character-9.png'
import jane2 from '../images/character-16.png'
import jane3 from '../images/character-4.png'
import jane4 from '../images/character-11.png'
import jane5 from '../images/character-14.png'
import jane6 from '../images/character-5.png'
import { CloseButton } from 'react-bootstrap'


function SidePop({name, friend, onClicks}) {
    return (
        <div className="container">
            <div className="sidepop-container ms-4">
                    <div className="sidepop-content py-5 px-4">
                        <div className="d-flex justify-content-end mb-3">
                        <CloseButton onClick={onClicks} />
                        </div>
                       <h2 className="jane-cooper">{name}</h2>
                       <p className="janeCoop-text">
                            is really a nice person, she's been
                            living on Planet Alpha for the last 10 years.
                       </p>
                       <div className="janeCoop-info d-flex">
                            <p className="pe-5">Planet<br/><h6 className="info-alpha">Alpha</h6> </p>
                            <p>Friends<br/><span className="info-alpha">{friend}</span> </p>
                       </div>
                       
                       <div className="janeCoop-charaDetails">
                        FRIENDS
                        </div>
                        <div className="each-person-detail d-flex ">
                            <div>
                                <img src={jane1} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darlene Robertson </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-2">
                            <div>
                                <img src={jane2} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Katheryn Murphy </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-">
                            <div>
                                <img src={jane3} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Jenny Willson </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane4} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Arlene McCoy </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane5} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darrell Steward </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane6} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Bessie Cooper </span> <br/> ammet minim malitit nan desert allunace</p>
                            </div>

                            
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default SidePop;




