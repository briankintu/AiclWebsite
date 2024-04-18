import { Link } from "react-router-dom"
import bgimage from "../../assets/images/background/bg-16.jpg"


export default function Footer5() {
    return (
        <>
            <footer className="main-footer style-five" style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            {/*Column*/}
                            <div className="column col-lg-5">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="footer-widget logo-widget">
                                            <div className="widget-content">
                                                <div className="footer-logo">
                                                    <Link href="/"><img className="lazy-image" src="/assets/images/logo-v5-2.png" alt="" /></Link>
                                                </div>
                                                <div className="text">Consulting services on all aspects of information technology and Project Management</div>
                                                <div className="link-btn"><Link href="#" className="theme-btn">READ MORE <i className="fa fa-caret-right" /></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Useful Links</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/about-1">Home</Link></li>
                                                    <li><Link href="/team-1">About</Link></li>
                                                    <li><Link href="/blog-1">Services</Link></li>
                                                    <li><Link href="/services">Products</Link></li>
                                                    <li><Link href="/contact-1">Book a demo</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Products</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/career">Ongea</Link></li>
                                                    <li><Link href="#">Kiganjani</Link></li>
                                                    <li><Link href="/portfolio-1">Dukani </Link></li>
                                                    <li><Link href="/testimonial-1">Tovuti</Link></li>
                                                    <li><Link href="/pricing-1">karakana</Link></li>
                                                    <li><Link href="/pricing-1">CEPRA</Link></li>
                                                    <li><Link href="/pricing-1">AkiliCentral</Link></li>
                                                    <li><Link href="/pricing-1">Shuleni</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Support</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="#">Contact Us</Link></li>
                                                    {/* <li><Link href="#"></Link></li> */}
                                                    {/* <li><Link href="#">Locations</Link></li>
                                                    <li><Link href="#">Policies</Link></li> */}
                                                    {/* <li><Link href="#">Resources</Link></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-3">
                                <h3 className="widget-title">Subscribe Us</h3>
                                <div className="footer-widget subscribe-widget">
                                    <div className="text">Be the first to recive</div>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter your email address..." />
                                            <button type="submit" className="theme-btn"><i className="flaticon-send" /></button>
                                        </div>
                                    </form>
                                    <ul className="social-links clearfix">
                                        <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-linkedin" /></Link></li>
                                        {/* <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-skype" /></Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright"><Link href="#">© {new Date().getFullYear()} </Link> ANGALIA INVESTMENT CONSORTIUM LIMITED, All Rights Reserved.</div>
                            {/* <ul className="menu">
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
