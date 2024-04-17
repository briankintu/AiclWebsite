import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import CepraSlider from "../components/slider/CepraSlider"
import bg25 from "../assets/images/background/contactimage.png"






const CepraPage = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Customization Enterprise Resource Planning Application (CEPRA) with ERPNEXT" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <CepraSlider/>
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Designed for both, <br /> simplicity <br />and power </h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>We create business software solutions to solve workflow issues that enterprises often face,including, intergration of advanced technology apps, business process management production process automation.</p><p>
CERPA comes with 1000+ objects to help you run your business</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Financial Accounting</li>
                                                <li><i className="fa fa-check" />Order Management</li>
                                                <li><i className="fa fa-check" />HR and Payroll</li>
                                                <li><i className="fa fa-check" />Manufacturing</li>
                                                <li><i className="fa fa-check" />CRM</li>
                                                <li><i className="fa fa-check" />Projects</li>
                                                <li><i className="fa fa-check" />Helpdesk</li>
                                                <li><i className="fa fa-check" />Asset Management</li>
                                                <li><i className="fa fa-check" />Website</li>

                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        
                                        {/* <div className="widget widget_brochur" style={{ backgroundImage: 'url(assets/images/background/bg-27.jpg)' }}>
                                            <div className="widget-content">
                                                <div className="icon"><img src="/assets/images/icons/icon-60.png" alt="" /></div>
                                                <h5>Subscription Packages</h5>
                                                <h4>Audit &amp; Assuarance</h4>
                                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                                            </div>
                                        </div> */}
                                       <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Interested to know more?</h4>
                                                <div className="phone-number"><Link href="tel:+1 80055544678">+255 768 017 100</Link></div>
                                                <div className="email"><Link href="mailto:supportteam@Envolve.com">businessdevelop@aicl.co.tz</Link></div>
                                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">APPOINTMENT</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    
                    </div>
      

      


      </Layout>
  )
}

export default CepraPage