import React from 'react'
import alpha1 from '../images/character-16.png'
import alpha2 from '../images/character-15.png'
import alpha3 from '../images/character-3.png'
import alpha4 from '../images/character-5.png'
import alpha5 from '../images/character-14.png'
import alpha6 from '../images/character-6.png'


function PlanetPop() {
    return (
        <div className="container">
            <div className="sidepop-container ms-4">
                    <div className="sidepop-content-alpha py-5 px-4">
                       <h2 className="alpha-planet">Planet Alpha</h2>
                       <p className="alpha-planet-text">
                            Planet Alpha is the place to be if you love everything about planets. I know it's a bit meta but come see by yourself
                       </p>
                       <div className="alpha-planet-info d-flex">
                            <p className="pe-5">Population<br/><h6 className="info-alpha">234</h6> </p>
                       </div>
                       
                       <div className="alpha-planet-charaDetails">
                        FRIENDS
                        </div>
                        <div className="each-person-detail d-flex ">
                            <div>
                                <img src={alpha1} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darlene Robertson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-2">
                            <div>
                                <img src={alpha2} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Katheryn Murphy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-">
                            <div>
                                <img src={alpha3} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Jenny Willson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={alpha4} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Arlene McCoy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={alpha5} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darrell Steward </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={alpha6} className="each-person-img my-2 me-3" alt="Jane"/>
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

export default PlanetPop
