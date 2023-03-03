import img from "../../assets/images/logo1.png"
import img1 from "../../assets/images/logo2.png"
import img2 from "../../assets/images/logo3.png"
import img3 from "../../assets/images/logo4.png"
import img4 from "../../assets/images/logo5.png"

function Logo(){
    return(
        <>
          <section className="w3l-clients pt-5 pb-4" id="clients">
        <div className="container">
            <div className="company-logos text-center">
                <div className="row mx-auto justify-content-center">
                    <div className="col-md-2 col-sm-4 col-6 ">
                        <img src={img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6">
                        <img src={img1} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-sm-0 mt-3">
                        <img src={img2} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-md-0 mt-3">
                        <img src={img3} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-md-0 mt-3">
                        <img src={img4} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Logo;