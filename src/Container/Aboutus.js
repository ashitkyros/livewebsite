import React, { useParallax } from "react";
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import "../style.css/style.css";
import purity from "../imges/purity.png";
import quality from "../imges/quality.png";
import promise from "../imges/promise.png";
import intant from "../imges/intant.png";
// import skill1 from '../imges/skill1.png'
// import skill2 from '../imges/skill2.png'
// import skill3 from '../imges/skill3.png'
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from "../imges/footerring.png";


function Aboutus(props) {

  return (
    <>
      <div className="header-sec">
        <div className="container-fluid header-color">
          <div className="d-flex justify-content-between">
            <div>
              <a href="#">
                <img src={Logo} className="header-img" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={Menu} className="menu-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
     
        <div className="container-fluid about-sec new-sec ">
          <div className="inner-tital">
            <h4>
              Better For Earth <br />
              <span>Better For You</span>
            </h4>
          </div>
        </div>
      
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0">
              <div className="cralf-daimod"></div>
            </div>
            <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0 gap">
              <div className="col col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0">
                <div className="inner-craf">
                  <h4>Welcome To</h4>
                  <p>Bhanderi Lab Grown Diamonds,</p>
                </div>
              </div>
              <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0">
                <div className="craft-right">
                  <p className="craft-right-first">
                    where beauty meets sustainability and ethics. Our story began
                    with a passion for diamonds and a deep commitment to creating
                    a better world.
                  </p>
                  <p className="craft-right-second mb-5">
                    We are a renowned company that specializes in creating Type
                    IIA lab grown diamonds using Chemical Vapor Deposition (CVD)
                    technology.
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <section class="">
        <div class="container-fluid">
          <div class="row d-flex">
            <div class="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  bg-green">
              <div class="left-inner-misson">
                <h4 class="mb-5">
                  OUR
                  <br />
                  <span>MISSION</span>
                </h4>
                <p>The Value Of Bhanderi Is Derived From Its</p>
              </div>
              <div class="d-flex">
                <div class="d-flex proriQuality">
                  <div class="text-white purity-sec">
                    <img src={purity} />
                    <h4>PURITY</h4>
                    <p>Ethical Diamonds That Are Real And Authentic</p>
                  </div>
                  <div class="text-white purity-sec innerprori">
                    <img src={quality} />
                    <h4>QUALITY</h4>
                    <p>Type IIA Diamond</p>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex proriQuality1">
                  <div class="text-white promise-sec">
                    <img src={promise} />
                    <h4>PROMISE</h4>
                    <p>
                      You Will Be Buying A Diamond Certified By GIA, IGI, GCAL
                      OR HRD
                    </p>
                  </div>
                  <div class="text-white promise-sec">
                    <img src={intant} />
                    <h4>INTENT</h4>
                    <p>Creating A Product By Simulating Nature</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  mission-right">
              <div class="left-inner-misson1">
                <h4 class="mb-5">
                  OUR
                  <br />
                  <span>VISION</span>
                </h4>
                <p>Crafting The Future Of Lab-grown Diamonds.</p>
              </div>
              <div class="left-inner-pare">
                <div class="innerpare">
                  <p>
                    We Are A Renowned Company That Specializes In Creating Type
                    IIA Lab Grown Diamonds Using Chemical Vapor Deposition (CVD)
                    Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="impact">
        <div class="impact-box new-sec">
          {/* <img src="img/impact.png" alt="" class="impact-img">  */}
          <div class="impact-text-box">
            <p class="heading-primary">
              {" "}
              <span>impact</span>{" "}
            </p>
            <p class="impact-text">
              Bhanderi is making an impact in the diamond industry by opening up
              new horizons, reducing the environmental impact and promoting
              ethical production. Our diamonds offer consumers a more
              cost-effective alternative to regular diamonds which can burn a
              hole in your pocket. Additionally, we support research and
              development in the field of diamond production to improve the
              quality and efficiency of the process. Overall, we are building a
              more{" "}
              <span>
                {" "}
                sustainable, ethical, and accessible diamond industry.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* <section class="highly-skill">
        <div class="highly-skill-box">
          <div>
            <div alt="" class="skill-img skill1" />
          </div>
          <div class="skill-box">
            <p class="skill-head">
              The Bhanderi team is comprised of highly skilled engineers.
            </p>
            <p class="skill-paregraph mt-5">
              The Bhanderi team is comprised of highly skilled engineers and
              diamond experts who are committed to producing high-quality
              diamonds in a socially responsible manner. At Bhanderi we value
              innovation, collaboration, and creativity, creating a work
              environment that fosters growth and learning.
            </p>
            <p class="skill-paregraph mt-3">
              We recognize the importance of work-life balance, offering
              flexible work arrangements and employee wellness programs.
              Additionally, the company is committed to supporting the local
              community and promoting sustainability through various
              initiatives. With a focus on environmental consciousness, social
              responsibility, and employee well-being, we are creating the
              epitome of a work culture that prioritizes both people and the
              planet.
            </p>
          </div>
          <div>
            <div alt="" class="skill-img skill2" />
          </div>
          <div>
            <div alt="" class="skill-img skill3" />
          </div>
        </div>
      </section> */}

      <section>
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill1"></div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0 skill-box">
              <p class="skill-head">
                The Bhanderi team is comprised of highly skilled engineers.
              </p>
              <p class="skill-paregraph mt-5">
                The Bhanderi team is comprised of highly skilled engineers and
                diamond experts who are committed to producing high-quality
                diamonds in a socially responsible manner. At Bhanderi we value
                innovation, collaboration, and creativity, creating a work
                environment that fosters growth and learning.
              </p>
              <p class="skill-paregraph mt-3">
                We recognize the importance of work-life balance, offering
                flexible work arrangements and employee wellness programs.
                Additionally, the company is committed to supporting the local
                community and promoting sustainability through various
                initiatives. With a focus on environmental consciousness, social
                responsibility, and employee well-being, we are creating the
                epitome of a work culture that prioritizes both people and the
                planet.
              </p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill2"></div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill3"></div>
            </div>
          </div>
        </div>
      </section>

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
      {/* <section className="bg-black">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="footer-img"></div>
            </div>
            <div className="col">
              <div className="tital-msg">
                <h4>WE SEND REALLY</h4>
                <p>GOOD EMAILS.</p>
              </div>
              <div className="d-flex">
                <div className="email-input">
                  <input />
                </div>
                <button>send</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Aboutus;
