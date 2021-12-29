import React from 'react'
import { PlanetPopDetails } from './PlanetPopDetails'
import { CloseButton } from 'react-bootstrap'

function PlanetPop({onHide, title, body}) {
    return (
        <div className="container">
            <div className="sidepop-container ms-4">
                    <div className="sidepop-content-alpha py-5 px-4">
                    <div className="d-flex justify-content-end mb-3">
                        <CloseButton onClick={onHide} />
                        </div>
                       <h2 className="alpha-planet">{title}</h2>
                       <p className="alpha-planet-text">
                          {title} is the place to be if you love everything about planets. I know it's a bit meta but come see by yourself
                       </p>
                       <div className="alpha-planet-info d-flex">
                            <p className="pe-5">Population<br/><h6 className="info-alpha">{body}</h6></p>
                       </div>
                       
                       <div className="alpha-planet-charaDetails">
                        FRIENDS
                        </div>
                        {PlanetPopDetails.map((popDetails) => (
                            <div className="each-person-detail d-flex ">
                                <div>
                                    <img src={popDetails.image} className="each-person-img my-2 me-3" alt="Jane"/>
                                </div>
                                <div className="each-person-info d-flex justify-content-center align-items-center">
                                    <p><span className="each-person-name">{popDetails.name} </span> <br/> {popDetails.friends} </p>
                                </div>  
                            </div>
                        ))}
                        
                    </div>   
                </div>
        </div>
    )
}

export default PlanetPop
