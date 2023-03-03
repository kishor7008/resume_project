import quote from "../../assets/images/quote.png"

import img1 from "../../assets/images/c1.jpg"
import img2 from "../../assets/images/c2.jpg"
import img3 from "../../assets/images/c3.jpg"
import img4 from "../../assets/images/c4.jpg"

function Testimonial (){
    return (
        <>
        <section className="w3l-testimonials py-5" id="testimonials">
        <div className="container py-md-5 py-4">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="owl-two owl-carousel owl-theme">
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src={quote} alt="" className="img-fluid mb-2"/>
                                    <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                            accusantium
                                            officia quod quasi necessitatibus perspiciatis Harum error provident
                                            quibusdam tenetur.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Phillip Hunt</h4>
                                        <p>Subtitle goes here</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src={img1} className="img-fluid radius-image" alt="client"/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src={quote} alt="" className="img-fluid mb-2" />
                                    <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                            accusantium
                                            officia quod quasi necessitatibus perspiciatis Harum error provident
                                            quibusdam tenetur.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Sara Grant</h4>
                                        <p>Subtitle goes here</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src={img2} className="img-fluid radius-image" alt="client"/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src={quote} alt="" className="img-fluid mb-2" />
                                    <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                            accusantium
                                            officia quod quasi necessitatibus perspiciatis Harum error provident
                                            quibusdam tenetur.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Luke Jacobs</h4>
                                        <p>Subtitle goes here</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src={img3} className="img-fluid radius-image" alt="client"/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src={quote} alt="" className="img-fluid mb-2" />
                                    <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                            accusantium
                                            officia quod quasi necessitatibus perspiciatis Harum error provident
                                            quibusdam tenetur.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Claire Olson</h4>
                                        <p>Subtitle goes here</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src={img4} className="img-fluid radius-image" alt="client"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Testimonial;