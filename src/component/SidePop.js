import React from 'react'
import { CloseButton } from 'react-bootstrap'
import { sidePopDetails } from './PlanetPopDetails';


function SidePop({name, friend, onClicks, planet}) {
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
                            <p className="pe-5">Planet<br/><h6 className="info-alpha">{planet}</h6> </p>
                            <p>Friends<br/><span className="info-alpha">{friend}</span> </p>
                       </div>
                       
                       <div className="janeCoop-charaDetails">
                        FRIENDS
                        </div>
                        {sidePopDetails.map((sideDetails) => (
                            <div className="each-person-detail d-flex ">
                                <div>
                                    <img src={sideDetails.images} className="each-person-img my-2 me-3" alt="Jane"/>
                                </div>
                                <div className="each-person-info d-flex justify-content-center align-items-center">
                                    <p><span className="each-person-name"> {sideDetails.name} </span> <br/> {sideDetails.text} </p>
                                </div>
                            </div>
                        ))}
                    </div> 
               </div>
        </div>
    )
}

export default SidePop;




