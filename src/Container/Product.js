import React from 'react';
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import '../style.css/style.css';
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from '../imges/footerring.png'
import cmyk5 from '../imges/BLACK - CMYK 5.png'
import cmyk4 from '../imges/BLACK - CMYK 4.png'
import arrow2 from '../imges/arrow2.png'

function Product(props) {
    return (
        <>
            <div className="header-sec">
                <div className="container-fluid header-color">
                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="#">
                                <img src={Logo} className='header-img'/>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={Menu} className='menu-img'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>





            <section class="product-hero container-fluid p-0">
                <div class="product-hero-box product-hero-img new-sec">
                    <p class="product-heading">raw <span>to</span> refined</p>
                    <p class="product-sub-heading">brilliantly bold to <br />
                        subtly sublime</p>
                </div>
            </section>




            <section class="diamond container-fluid p-0">
                <div class="diamond-img-box diamond-img new-sec">
                    {/* <img src={cmyk5} alt="" class="diamond-back" />
                    <img src={cmyk4} alt="" class="diamond-back2" />
                    <img src={cmyk4} alt="" class="diamond-back2" /> */}
                    <div class="ll">
                        <div class="diamond-text-box">
                            <div class="diamond-heading">
                                <img src={arrow2} alt="" class="diamond-arrow" />
                                <p>From <span>Lab</span> to <span>Luxury:</span> <br />
                                    Explore The Fascinating <br />
                                    World of CVD Diamonds</p>
                            </div>
                            <p class="diamond-paregraph mt-4">Welcome to a revolutionary alternative to mined diamonds - lab
                                grown diamonds produced through the Chemical Vapor Deposition process. These diamonds are an
                                ethical and sustainable substitute for natural diamonds, with identical properties.</p>
                            <p class="diamond-paregraph mt-4">We specialize in creating CVD diamonds that meet the highest
                                industry standards. We use state-of-the-art technology to create diamonds that are free of
                                impurities, have excellent color and clarity, and are available in a range of sizes, colors, and
                                shapes.</p>
                        </div>
                    </div>
                </div>
            </section>


            <div className='container-fluid'>
                <div className='row flex-reverse'>
                    <div className='col col-sm-12 col-lg-6 col-md-6 col-12 p-0'>
                        <div className='inner-rough'>
                            <h4>ROUGH LAB GROWN DIAMONDS</h4>
                            <h5>Rough, Yet Refined: Diamonds That Sparkle With Intensity</h5>
                            <p className='p-rough1'>Rough lab grown diamonds fuse nature and science to create an ethical and eco-friendly masterpiece. Crafted with advanced technology, each diamond is unique and guilt-free.</p>
                            <p className='p-rough2'>By choosing rough diamonds, you not only showcase your individuality with a one-of-a-kind gemstone but also contribute to a sustainable and responsible future for the planet.</p>
                        </div>
                    </div>
                    <div className='col col-sm-12 col-lg-6 col-md-6 col-12 p-0'>
                        <div className='rough-right'></div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                <div className='col p-0 col-sm-12 col-lg-6 col-md-6 col-12'>
                        <div className='rough-right1'></div>
                    </div>
                    <div className='col col-sm-12 col-lg-6 col-md-6 col-12'>
                        <div className='inner-rough1'>
                            <h4>POLISHED LAB GROWN DIAMONDS</h4>
                            <h5>Crafted By Science, Polished By Art: Diamonds With Exceptional Brilliance</h5>
                            <p className='p-rough1'>Polished diamonds are the epitome of modern luxury with a perfect blend of technology and beauty, crafted to perfection by our master craftsmen.</p>
                            <p className='p-rough2'>When you choose polished diamonds, you're not just indulging in the ultimate luxury; you're also making a conscious choice for an ethical future for the planet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-bg'>
                <div className='container-fluid main-footer'>
                    <div className='row align-items-center'>
                        <div className='col col-lg-6 col-md-12 col-sm-12 p-5'>
                            <img src={footerring} className='w-100 footer-ring' />
                        </div>
                        <div className='col col-lg-6 col-md-12 col-sm-12 p-0 footer-right'>
                            <h5 className='mb-5'><span>WE SEND REALLY</span>
                                GOOD EMAILS.</h5>

                            <div className='d-flex main-input-box'>
                                <div className='input'>
                                    <input className='from-control text-white' placeholder='Enter Your Email Id To Subscribe' />
                                </div>
                                <div className='footer-btn1 ms-3 btn btn'><IoIosSend className='f-icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer mt-4">
                    <div className="container container-md container-lg container-sm">
                        <div className="row inner-footer">
                            <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
                                <h6 className="footer-head">QUICK LINKS </h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Process</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
                                <h6 className="footer-head">LOCATION</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Surat</a>
                                    </li>
                                    <li>
                                        <a href="#">Mumbai</a>
                                    </li>
                                    <li>
                                        <a href="#">New York</a>
                                    </li>
                                    <li>
                                        <a href="#">Europe</a>
                                    </li>
                                    <li>
                                        <a href="#">Hong Kong</a>
                                    </li>
                                    <li>
                                        <a href="#">Dubai</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
                                <h6 className="footer-head">LEGAL</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Privacy Statement</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#">Cookie Policy</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
                                <h6 className="pb-2 footer-head">CONNECT WITH US :</h6>
                                <div className="footer-icon pb-5">
                                    <img src={face} />
                                    <img src={insta} />
                                    <img src={youtube} />
                                    <img src={link} />
                                    <img src={twitter} />
                                </div>
                                <div className="d-flex">
                                   
                                </div>
                            </div>
                        </div>
                        <p className="copy-right m-0 text-center">
                            Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved
                        </p>
                    </div>
                </div>
      </div>

            {/* <div className='footer-bg'>
                <div className='container-fluid main-footer'>
                    <div className='row align-items-center'>
                        <div className='col-6 col-lg-7 p-5'>
                            <img src={footerring} className='w-100' />
                        </div>
                        <div className='col-6 col-lg-5 p-0 footer-right'>
                            <h5 className='mb-5'><span>WE SEND REALLY</span>
                                GOOD EMAILS.</h5>

                            <div className='d-flex'>
                                <div className='input'>
                                    <input className='from-control text-white' placeholder='Enter Your Email Id To Subscribe' />
                                </div>
                                <div className='footer-btn1 ms-3 btn btn'><IoIosSend className='f-icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="footer mt-4">
                    <div className="container">
                        <div className="row inner-footer">
                            <div className="col-3">
                                <h6 className="footer-head">QUICK LINKS </h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Process</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="footer-head">LOCATION</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Surat</a>
                                    </li>
                                    <li>
                                        <a href="#">Mumbai</a>
                                    </li>
                                    <li>
                                        <a href="#">New York</a>
                                    </li>
                                    <li>
                                        <a href="#">Europe</a>
                                    </li>
                                    <li>
                                        <a href="#">Hong Kong</a>
                                    </li>
                                    <li>
                                        <a href="#">Dubai</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="footer-head">LEGAL</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Privacy Statement</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#">Cookie Policy</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="pb-2 footer-head">CONNECT WITH US :</h6>
                                <div className="footer-icon pb-5">
                                    <img src={face} />
                                    <img src={insta} />
                                    <img src={youtube} />
                                    <img src={link} />
                                    <img src={twitter} />
                                </div>
                                <div className="d-flex">
                                  
                                </div>
                            </div>
                        </div>
                        <p className="copy-right m-0 text-center">
                            Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Product;