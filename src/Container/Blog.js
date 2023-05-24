import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import firstblog from '../imges/firstBlog.jpg'
import secondblog from '../imges/firstBlog.jpg'
import thirdblog from '../imges/firstBlog.jpg'
import fourblog from '../imges/firstBlog.jpg'
import fiveblog from '../imges/firstBlog.jpg'
import '../style.css/Blog.css'

function Blog(props) {
    return (
        <>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to={0} className="active" />
                    <li data-target="#carousel" data-slide-to={1} />
                    <li data-target="#carousel" data-slide-to={2} />
                    <li data-target="#carousel" data-slide-to={3} />
                    <li data-target="#carousel" data-slide-to={4} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" style={{ backgroundImage: 'url("https://blgdlab.com/assets/images/blog-detail/Complete-Guide-To-Lab-Grown-Diamonds.jpg")', backgroundSize: 'cover', width: "100%", height: "height: 63vh;" }}>
                        <div className="caption">
                            <h1>Create and share your whatever</h1>
                            <h2>Make it easy for you to do whatever this thing does.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://blgdlab.com/assets/images/blog-detail/The-4-Of-Diamonds-landing.jpg")', backgroundSize: 'cover', width: "100%", height: "height: 63vh;" }}>
                        <div className="caption">
                            <h1>Something and share your whatever</h1>
                            <h2>Else it easy for you to do whatever this thing does.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://blgdlab.com/assets/images/blog-detail/A-Dream-to-Reality-Lab-Created-Diamonds.jpg")', backgroundSize: 'cover', width: "100%", height: "height: 63vh;" }}>
                        <div className="caption">
                            <h1>Create and share your whatever</h1>
                            <h2>Make it easy for you to do whatever this thing does.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://blgdlab.com/assets/images/blog-detail/How-Are-Lab-Grown-Diamonds-Made_Banner_Desktop.jpg")', backgroundSize: 'cover', width: "100%", height: "height: 63vh;" }}>
                        <div className="caption">
                            <h1>Create and share your whatever</h1>
                            <h2>Make it easy for you to do whatever this thing does.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://blgdlab.com/assets/images/blog-detail/The-Best-Manufacturer-And-Supplier-Of-Lab-Grown-Diamond_Banner_Desktop.jpg")', backgroundSize: 'cover', width: "100%", height: "height: 63vh;" }}>
                        <div className="caption">
                            <h1>Create and share your whatever</h1>
                            <h2>Make it easy for you to do whatever this thing does.</h2>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className='container'>
                <div className='text-center'>
                    <h1 className='main-title'>News & Blog</h1>
                </div>
                <div className='row'>
                    <div className='col-4 first-blog-area'>
                        <div className='col-6 first-blog-img-sec'></div>
                        <div className='col-6 first-blog-img-sec1'>
                            <p className='inner-blog-title'>THE CUT OR CLARITY FACTOR: WHICH
                                MATTERS MOST FOR LAB GROWN
                                DIAMONDS?</p>
                            <span className='inner-blog-date fs-6'>April 07, 2023</span>
                            <p className='inner-blog-descreption'>
                                Among The 4 C's In A Lab Grown Diamond - Cut, Color, Clarity,
                                And Carat, The Cut Of The Stone Plays A Significant Role In
                                Determining Its Beaut
                            </p>
                            <button className='inner-blog-btn'>READ MORE</button>
                        </div>
                    </div>
                    <div className='col-4  second-blog-area'>
                        <div className='col-6 second-blog-img-sec'></div>
                        <div className='col-6 second-blog-img-sec1'>
                            <p className='inner-blog-title-second'>REVOLUTION OF THE LAB GROWN DIAMOND IN MODERN TIMES!</p>
                            <span className='inner-blog-date fs-6'>April 07, 2023</span>
                            <p className='inner-blog-descreption'>
                                Shining Like A Diamond In This Era Is One Of The Biggest Revolutions.
                                Lab Grown Diamond Is A Type Of Diamond Produced By The
                                Manufacturing Method. A Genuine Diamond With The Help Of A
                                Geological Process Gets Extracted Through Mining.
                            </p>
                            <button className='inner-blog-btn'>READ MORE</button>
                        </div>
                    </div>
                    <div className='col-4 first-blog-area'>
                        <div className='quotes-bg d-flex align-items-center'>
                            <p className='main-quotes'><span className='quotes1'>“</span>Enriching every home with the brilliance of diamonds will fulfill our sole mission.<span className='quotes2'>”</span>
                                - Ghanshyam Bhanderi</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Blog;