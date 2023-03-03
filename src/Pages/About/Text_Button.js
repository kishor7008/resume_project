import React from 'react'
import { Link } from 'react-router-dom'
function Text_Button() {
  return (
   <>
   <section className="w3l-timeline-1 text-center py-5">
        <div className="container py-lg-5 py-4">
            <div className="mx-auto" style={{maxWidth:"800px"}}>
                <h3 className="title-style mb-4">Why hire me for your next project?</h3>
                <p>I love to work in User Experience & User Interface designing. Because I love to solve the design
                    problem
                    and find easy and better solutions to solve it. I always try my best to make good user interface
                    with
                    the best user experience.</p>
                <Link to="/Service" className="btn btn-style mt-5">Learn More</Link>
            </div>
        </div>
    </section>
   </>
  )
}

export default Text_Button;