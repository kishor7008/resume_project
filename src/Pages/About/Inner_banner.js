import React from 'react'
import { Link } from 'react-router-dom';

function Inner_banner() {
  return (
    <>
     <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Me</h4>
                <ul className="breadcrumbs-custom-path">
                    <li><Link to="/Home">Home</Link></li>
                    <li className="active"><i className="fas fa-angle-right mx-2"><Link to="/About">My Intro</Link></i></li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Inner_banner;