import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import MobileSlider from "../components/slider/MobileSlider"
// import MobileTabs from "../components/elements/MobileTab"
import bg25 from "../assets/images/background/contactimage.png"
import ServiceSlider1 from '../components/slider/ServiceSlider1'





const MobileAppDevelopment = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Mobile App Development" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <MobileSlider />
                                    <div className="row mb-5">
                                    <h2>Custom Software and Mobile App Developement</h2>
                                    <div className="text">Our bespoke mobile app software will be developed with you at every stage, ensuring that your specific goals are reached. </div>
                                    {/*Theme Carousel*/}
                                     <ServiceSlider1 />
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text">Angalia Investment Consortium Limited - AICL we deliver mission critical software projects for our local and global clients across a range of technologies including Javascript, Java, Python, C#, C++. We architect and deliver flexible and innovative solutions that enable our clients to deliver on their KPIs. Our strength lies in delivering large and complex software projects and enjoying a good challenge. </div>
                                    <div className="text">AICL prides itself in offering bespoke, completely scalable and customisable software and application development, including supplementing in-house resources in the delivery of discrete project components, integration of the latest technology with existing enterprise infrastructure and creating complex interactive and multimedia environments.</div>
                                    <div className="text">We offer a full range of software development services, including; software application development based on your business needs and process that will help position you.</div>
                                    <div className="text">Reengineering and migration services that transform your legacy applicaitons into modern, cost-efficient technology solutions.</div>
                                    {/* <MobileTabs /> */}
                                        <div className="col-md-5">
                                            {/* <h2>Providing <br /> world class service <br /> experiences!..</h2> */}
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>AICL ensures your tailored system will be specific to your requirements, on time and within budget.By working with you at every step of the way we ensure you not only get your money's worth, but are proud of the fact that we get so much repeat clients. .</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />On Time Delivery</li>
                                                <li><i className="fa fa-check" />A Dedicated Team</li>
                                                <li><i className="fa fa-check" />Flexible pricing </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        {/* <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="/finance-restructuring">Finance &amp; Restructuring <span /></Link></li>
                                                    <li><Link href="/audit-assurance">Audit &amp; Assurance <span /></Link></li>
                                                    <li><Link href="/trades-stock-markets">Trades &amp; Stock Market <span /></Link></li>
                                                    <li><Link href="/strategy-planning">Strategy &amp; Planning <span /></Link></li>
                                                    <li><Link href="/software-research">Software &amp; Research <span /></Link></li>
                                                    <li><Link href="/support-maintenance">Support &amp; Maintenance <span /></Link></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/* <div className="widget widget_brochur" style={{ backgroundImage: 'url(assets/images/background/bg-27.jpg)' }}>
                                            <div className="widget-content">
                                                <div className="icon"><img src="/assets/images/icons/icon-60.png" alt="" /></div>
                                                <h5>Case Studies</h5>
                                                <h4>Audit &amp; Assuarance</h4>
                                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                                            </div>
                                        </div> */}
                                        <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Do yo  need any help me?</h4>
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
                    {/* <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    </div>
      

      


      </Layout>
  )
}

export default MobileAppDevelopment