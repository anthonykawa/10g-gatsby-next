import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Company</h5>
                        <hr />
                            <p>Sunrich Technology is a leading manufacturer of I/O connectivity solutions for 25 years, and features
                                nearly 200 desktop and notebook computer and server products for USB, I/O, networking, storage, digital
                        video, and more. Contact us for information on the latest USB 3.1 or 10Gbps products.</p>
                            <p></p>
                            <Link to="/about">Learn more</Link>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <hr />
                            <ul>
                                <li>
                                    <a href="http://www.sunrichtech.com.hk/Products.aspx" target="_blank">Products</a>
                                </li>
                                <li>
                                    <Link to="/support">Support</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <a href="https://www.indeedjobs.com/sunrich-technology/_hl/en_US" target="_blank">Careers</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/sunrich-technology/" target="_blank">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-logo">
                            <img className="img-fluid" src="https://cdn.buttercms.com/7mH7wJLQjGoFpk26uv2C" />
                            <div className="footer-contact">
                                <ul>
                                    <li>408.588.1288</li>
                                    <li>info@sunrichtechnology.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    </footer>
  </div>
        )
        
        export default Footer
