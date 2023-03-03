import React from 'react'
import img from "../../assets/images/about.jpg"

const AboutSection1 = () => {
  return (
    <>
    <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-md-5 py-4">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="position-relative">
                        <img src={img} alt="" className="radius-image img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 className="title-small mb-1">My Intro</h5>
                    <h3 className="title-style">About Me</h3>
                    <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet.</p>
                    <div className="my-info mt-md-5 mt-4">
                        <ul className="single-info">
                            <li className="name-style">Name</li>
                            <li>:</li>
                            <li>
                                <p>Abhishek Pandey</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Age</li>
                            <li>:</li>
                            <li>
                                <p>26 Years</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">From</li>
                            <li>:</li>
                            <li>
                                <p>Gopalganj , Bihar India</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Email</li>
                            <li>:</li>
                            <li>
                                <p><a href="abhishekpande357@mail.com">abhishekpande357@mail.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <a href="#download" className="btn btn-style mt-5">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutSection1;