import img from "../assets/images/icon2.png"
import img1 from "../assets/images/icon3.png"
import img2 from "../assets/images/icon1.png"
import img3 from "../assets/images/icon6.png"

function Banner(){
    return (
        <>
           <section className="w3l-banner py-5" id="home">
        <div className="container py-md-5 py-4">
            <div className="row align-items-center pt-4">
                <div className="col-md-6 banner-left pe-xl-5">
                    <h4>Hi, I'm Abhishek Pandey</h4>
                    <h3 className="mb-3 mt-1">Developer</h3>
                    <p className="banner-sub me-md-5">I love to work in UI/UX designing.
                        I always try my best to make good UI with the best UX.
                    </p>
                    <div className="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <a href="about.html" className="btn btn-style me-2">Hire Me</a>
                    </div>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
      
        <div className="icon-effects-w3-1 text-right">
            <img src={img} alt="" className="img-fluid"/>
        </div>
        <div className="icon-effects-w3-2 text-right">
            <img src={img1} alt="" className="img-fluid"/>
        </div>
        <div className="icon-effects-w3-3 text-right">
            <img src={img2} alt="" className="img-fluid"/>
        </div>
        <div className="icon-effects-w3-4 text-right">
            <img src={img3} alt="" className="img-fluid"/>
        </div>
      
    </section>
        </>
    )
}
export default Banner;