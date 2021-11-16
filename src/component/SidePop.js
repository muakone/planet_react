import React from 'react'
import jane1 from '../images/character-9.png'
import jane2 from '../images/character-16.png'
import jane3 from '../images/character-4.png'
import jane4 from '../images/character-11.png'
import jane5 from '../images/character-14.png'
import jane6 from '../images/character-5.png'


function SidePop() {
    return (
        <div className="container">
            <div className="sidepop-container ms-4">
                    <div className="sidepop-content py-5 px-4">
                       <h2 className="jane-cooper">Jane Cooper</h2>
                       <p className="janeCoop-text">
                            is really a nice person, she's been
                            living on Planet Alpha for the last 10 years.
                       </p>
                       <div className="janeCoop-info d-flex">
                            <p className="pe-5">Planet<br/><h6 className="info-alpha">Alpha</h6> </p>
                            <p>Friends<br/><span className="info-alpha">23</span> </p>
                       </div>
                       
                       <div className="janeCoop-charaDetails">
                        FRIENDS
                        </div>
                        <div className="each-person-detail d-flex ">
                            <div>
                                <img src={jane1} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darlene Robertson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-2">
                            <div>
                                <img src={jane2} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Katheryn Murphy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-">
                            <div>
                                <img src={jane3} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Jenny Willson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane4} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Arlene McCoy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane5} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darrell Steward </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={jane6} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Bessie Cooper </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default SidePop;



