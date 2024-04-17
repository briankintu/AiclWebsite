import React from 'react'
import Layout from '../components/Layout'
import icon53 from "../assets/images/icons/icon-53.png"
import icon54 from "../assets/images/icons/icon-54.png"
import icon40 from "../assets/images/icons/icon-40.png"
import icon51 from "../assets/images/icons/icon-51.png"
import icon50 from "../assets/images/icons/icon-50.png"
import icon52 from "../assets/images/icons/icon-52.png"
import icon10 from "../assets/images/icons/icon-10.png"
import bg20 from "../assets/images/shape/pattern-13.png"
import { Link } from "react-router-dom"
import { useState } from 'react'
import BannerContact from '../components/sections/BannerContact'
import Iframe from 'react-iframe'
import mapimg from '../assets/images/resource/map-two.png'
import Breadcrumb from '../components/Breadcrumb'





const ContactPage = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Get in Touch" />
        <div>
        <section className="contact-details-section-three">
                        <div className="auto-container">
                            <div className="row sec-top">
                                <div className="col-lg-5">
                                    <div className="sec-title">
                                        <h2>We’d love to help you</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="text mb-30">Don’t hesitate to contact us, We’d love to help you. Our customer <br /> support team will work 24/7.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="outer-box">
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon50} alt="" /></div>
                                                <h4>Tanzania, Dar-es-Salaam</h4>
                                                <ul>
                                                    <li>Sangara Street,<br /> House 19 Mikocheni B </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon51} alt="" /></div>
                                                <h4>Call us on</h4>
                                                <ul>
                                                    <li><Link href="tel:+255627669360">+255 627 669 360 </Link></li>
                                                    <li><Link href="tel:+255768017100">+255 768 017 100</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon52} alt="" /></div>
                                                <h4>Mail at</h4>
                                                <ul>
                                                    <li><Link href="mailto:supportteam@Envolve.com">info@aicl.co.tz</Link></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="wrapper-box ml-lg-5">
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <Iframe  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.055252111594!2d39.24439001076687!3d-6.763117893205358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4df6dd2291a5%3A0xc09fec84a3f34a7a!2sAngalia%20Investment%20Consortium%20Limited!5e0!3m2!1sen!2stz!4v1709895018760!5m2!1sen!2stz"  width="770" height="437" styles={{ border: 0}} allow="fullscreen=" />

                                        {/* <img src={mapimg} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   {/* Contact Form Section Two */}
                   <section className="contact-form-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Send your message to us</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <form method="post" action="sendemail.php" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="firstname" placeholder="First Name" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="phone" placeholder="Phone" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="website" placeholder="Website" required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <select className="custom-select" name="subject">
                                            <option value="*">Discusss about</option>
                                            <option value=".category-1">Business Aproach</option>
                                            <option value=".category-2">Trades &amp; Stock Market</option>
                                            <option value=".category-3">Strategy &amp; Planning</option>
                                            <option value=".category-4">Software &amp; Research</option>
                                            <option value=".category-5">Support &amp; Maintenance</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea name="message" placeholder="Message goes here" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="text-center">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    </div>
      

      


      </Layout>
  )
}

export default ContactPage