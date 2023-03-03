import React from 'react'
import img from "../../assets/images/blog5.jpg"

const AboutSection2 = () => {
  return (
    <>
    <section className="w3l-about2 py-5">
       <div className="container py-lg-5 py-md-4 py-2">
           <div className="row align-items-center">
               <div className="col-lg-6 pe-lg-5">
                   <h5 className="title-small mb-1">Web Design</h5>
                   <h3 className="title-style">I Would Love to make your Ideas real</h3>
                   <div className="cwp23-text-cols mt-lg-5 mt-4">
                       <div className="column">
                           <span>1200+</span>
                           <h4>Happy Clients</h4>
                           <p>We help our clients increase profits by increasing their visibility online.</p>
                       </div>
                       <div className="column">
                           <span>13k+</span>
                           <h4>Completed projects </h4>
                           <p>We help our clients increase profits by increasing their visibility online. </p>
                       </div>

                   </div>
               </div>
               <div className="col-lg-6 cwp23-text align-self mt-lg-0 mt-5">
                   <img src={img} alt="" className="radius-image img-fluid"/>
               </div>
           </div>
       </div>
   </section>
   </>
  )
}

export default AboutSection2;