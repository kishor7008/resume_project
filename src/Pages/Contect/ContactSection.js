function ContactSection (){
    return (
        <>
         <section className="w3l-contact py-5" id="contact">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small">Get In Touch</h5>
                <h3 className="title-style">Contact Me</h3>
            </div>
            <div className="row contact-block">
                <div className="col-md-6 contact-left pe-lg-5">
                    <h3 className="mb-sm-4 mb-3">Contact Info</h3>
                    <p className="cont-para mb-sm-5 mb-4">I enjoy discussing new projects and design challenges. Please
                        share as
                        much info, as possible so
                        we can get the most out of our first catch-up.</p>
                    <div className="cont-details">
                        <p><i className="fas fa-map-marker-alt"></i>10001, 5th Avenue, 12202 street, USA.</p>
                        <p><i className="fas fa-phone-alt"></i><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                        <p><i className="fas fa-envelope-open-text"></i><a href="mailto:example@mail.com"
                                className="mail">example@mail.com</a></p>
                    </div>
                    <h4 className="mb-3 mt-5">Follow Me</h4>
                    <ul className="social-icons-contact">
                        <li>
                            <a href="#twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedinin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#github">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                        <div className="input-grids">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                                className="contact-input" required="" />
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                                className="contact-input" required="" />
                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                                className="contact-input" required="" />
                            <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                                className="contact-input" required="" />
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                                required=""></textarea>
                        </div>
                        <button className="btn btn-style">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
   
    <div className="map-iframe">
     <iframe 
     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112067.52084970805!2d77.17195953515628!3d28.62646432938261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674203372929!5m2!1sen!2sin" 
     width="100%" height="450" style={{border:"0px;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        </>
    )
}

export default ContactSection;