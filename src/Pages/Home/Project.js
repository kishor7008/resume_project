import img1 from "../../assets/images/g1.jpg"
import img2 from "../../assets/images/g2.jpg"
import img3 from "../../assets/images/g3.jpg"
import img4 from "../../assets/images/g4.jpg"
import img5 from "../../assets/images/g5.jpg"
import img6 from "../../assets/images/s4.jpg"
function Project (){
    return(

        <>
         <section className="w3l-gallery pb-5" id="gallery">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">Portfolio</h5>
                <h3 className="title-style">Some of my most recent projects</h3>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <a href={img1} data-lightbox="example-set" data-title="Project 1"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img1} alt="Card image cap"/>
                        <span classNameName="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 1</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 item mt-md-0 mt-4">
                    <a href={img2} data-lightbox="example-set" data-title="Project 2"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img2} alt="Card image cap"/>
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 2</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-lg-0 mt-4">
                    <a href={img3} data-lightbox="example-set" data-title="Project 3"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img3} alt="Card image cap"/>
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 3</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href={img4} data-lightbox="example-set" data-title="Project 4"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img4} alt="Card image cap"/>
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 4</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href={img5} data-lightbox="example-set" data-title="Project 5"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img5} alt="Card image cap"/>
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 5</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href={img6} data-lightbox="example-set" data-title="Project 6"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src={img6} alt="Card image cap"/>
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 6</span>
                            <span className="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Project;