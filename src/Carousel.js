import React from 'react'
import one from './reactecomimages/1.jpeg'
import two from './reactecomimages/2.jpeg'
import three from './reactecomimages/3.jpeg'
function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{height:"750px"}}>
                    <div className="carousel-item active">
                        <img src={one} className="d-block w-100" alt="Pic1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={two} className="d-block w-100" alt="Pic2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={three} className="d-block w-100" alt="Pic3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel