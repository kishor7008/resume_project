function Price(){
    return(
        <section className="w3l-pricing py-5">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">Get Started</h5>
                <h3 className="title-style">The Best Pricing Plans</h3>
            </div>
            <div className="row t-in justify-content-center">
                <div className="col-lg-4 col-md-6 price-main-info">
                    <div className="price-inner card box-shadow">

                        <div className="card-body">
                            <h4 className="text-uppercase text-center mb-3">Basic Plan</h4>
                            <h5 className="card-title pricing-card-title">
                                Free
                            </h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li> <span className="fa fa-check"></span> Ui Design</li>
                                <li> <span className="fa fa-check"></span> Web Development</li>
                                <li className="disable"> <span className="fa fa-check"></span> Logo design</li>
                                <li className="disable"> <span className="fa fa-check"></span> SEO optimization</li>
                                <li className="disable"> <span className="fa fa-check"></span> Wordpress integration</li>
                            </ul>
                            <div className="read-more mt-4 pt-lg-2 text-center">
                                <a href="contact.html" className="btn btn-style"> Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 price-main-info mt-md-0 mt-4">
                    <div className="price-inner card box-shadow active">

                        <div className="card-body">
                            <label className="price-label">Recommended</label>
                            <h4 className="text-uppercase text-center mb-3">Pro Plan</h4>
                            <h5 className="card-title pricing-card-title">
                                <span className="align-top">$</span>59

                            </h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li> <span className="fa fa-check"></span> Ui Design</li>
                                <li> <span className="fa fa-check"></span> Web Development</li>
                                <li> <span className="fa fa-check"></span> Logo design</li>
                                <li className="disable"> <span className="fa fa-check"></span> SEO optimization</li>
                                <li className="disable"> <span className="fa fa-check"></span> Wordpress integration</li>
                            </ul>
                            <div className="read-more mt-4 pt-lg-2 text-center">
                                <a href="contact.html" className="btn btn-style"> Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 price-main-info mt-lg-0 mt-4">
                    <div className="price-inner card box-shadow">

                        <div className="card-body">
                            <h4 className="text-uppercase text-center mb-3">Premium Plan</h4>
                            <h5 className="card-title pricing-card-title">
                                <span className="align-top">$</span>99
                            </h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li> <span className="fa fa-check"></span> Ui Design</li>
                                <li> <span className="fa fa-check"></span> Web Development</li>
                                <li> <span className="fa fa-check"></span> Logo design</li>
                                <li> <span className="fa fa-check"></span> SEO optimization</li>
                                <li> <span className="fa fa-check"></span> Wordpress integration</li>
                            </ul>
                            <div className="read-more mt-4 pt-lg-2 text-center">
                                <a href="contact.html" className="btn btn-style"> Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Price;