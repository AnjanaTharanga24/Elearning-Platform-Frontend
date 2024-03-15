import React from 'react'
import { Link } from 'react-router-dom'

export default function ListeningLesson2() {
  return (
    <>
    {/* Navbar Area Start */}
    <div>
  <div className="navbar-area" id="navbar">
      <div className="navbar-top">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-7 col-md-6">
                <ul className="navbar-contact d-lg-flex align-items-lg-center list-unstyle">
                  <li>
                    <a className="navbar-brand xs-none" href="index.html">
                      <img
                        className="logo-light"
                        src="assets/img/logo/logo.svg"
                        alt="logo"
                      />
                    </a>
                  </li>
                  <li>
                    <i className="ri-map-pin-2-fill" />
                    <span>Road 405 Huston. USA</span>
                  </li>
                  <li>
                    <i className="ri-time-line" />
                    Mon - Fri: 9am 7 Pm
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="navbar-right d-flex align-items-center justify-content-center justify-content-lg-end">
                  <span className="fs-16 fc-main">Follow Us:</span>
                  <div className="option-item">
                    <ul className="social-profile list-unstyle position-relative">
                      <li>
                        <a href="https://www.fb.com" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="ri-twitter-x-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="main-max-width">
          <nav className="navbar insocour-nav navbar-expand-lg">
            <a className="navbar-brand lg-none" href="index.html">
              <img
                className="logo-light"
                src="assets/img/logo/logo.svg"
                alt="logo"
              />
            </a>
            <div className="other-options d-flex flex-wrap justify-content-end align-items-center d-lg-none">
              <div className="option-item d-flex">
                <a href="contact.html" className="serarch-btn">
                  <i className="ri-user-3-line" />
                </a>
                <a href="cart.html" className="shop-btn">
                  <i className="ri-shopping-cart-2-line" />
                  <span className="cart-number">1</span>
                </a>
                <a
                  className="navbar-toggler"
                  data-bs-toggle="offcanvas"
                  href="#navbarOffcanvas"
                  role="button"
                  aria-controls="navbarOffcanvas"
                >
                  <span className="burger-menu">
                    <span className="top-bar" />
                    <span className="middle-bar" />
                    <span className="bottom-bar" />
                  </span>
                </a>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-between">
              <ul className="navbar-nav ms-1">
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu list-unstyle">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        Home Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link">
                        Home Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Courses
                  </a>
                  <ul className="dropdown-menu list-unstyle">
                    <li className="nav-item">
                      <a href="courses.html" className="nav-link">
                        Courses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="courses-list.html" className="nav-link">
                        Course List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="courses-grid.html" className="nav-link">
                        Courses Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="course-details.html" className="nav-link">
                        Course Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu list-unstyle">
                    <li className="nav-item">
                      <a href="shop.html" className="nav-link">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-filtter.html" className="nav-link">
                        Shop Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="single-product.html" className="nav-link">
                        Product Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="cart.html" className="nav-link">
                        Cart
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="checkout.html" className="nav-link">
                        Checkout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="success.html" className="nav-link">
                        Success
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Skills
                  </a>
                  <ul className="dropdown-menu list-unstyle">
                    <Link
                      to="/listening"
                      style={{ textDecoration: "none", text: "inherit" }}
                    >
                      <li className="nav-item">
                        <a className="nav-link">Listening</a>
                      </li>
                    </Link>

                    <Link
                      to="/reading"
                      style={{ textDecoration: "none", text: "inherit" }}
                    >
                      <li className="nav-item">
                        <a className="nav-link">Reading</a>
                      </li>
                    </Link>

                    <Link
                      to="/writing"
                      style={{ textDecoration: "none", text: "inherit" }}
                    >
                      <li className="nav-item">
                        <a className="nav-link">Writing</a>
                      </li>
                    </Link>

                    <Link
                      to="/speaking"
                      style={{ textDecoration: "none", text: "inherit" }}
                    >
                      <li className="nav-item">
                        <a className="nav-link">Speaking</a>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu list-unstyle">
                    <li className="nav-item">
                      <a href="sign-in.html" className="nav-link">
                        Sign in
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="sign-up.html" className="nav-link">
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-toggle nav-link"
                      >
                        Instructor
                      </a>
                      <ul className="dropdown-menu list-unstyle">
                        <li className="nav-item">
                          <a href="instructor.html" className="nav-link">
                            Instructor
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="instructor2.html" className="nav-link">
                            Instructor Tow
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="instructor-sidebar.html"
                            className="nav-link"
                          >
                            Instructor Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="instructor-details.html"
                            className="nav-link"
                          >
                            Instructor Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="faq.html" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-toggle nav-link"
                      >
                        Error
                      </a>
                      <ul className="dropdown-menu list-unstyle">
                        <li className="nav-item">
                          <a href="error-404.html" className="nav-link">
                            Error One
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="error-sidebar-404.html"
                            className="nav-link"
                          >
                            Error Two
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="option-item">
                <a href="contact.html" className="serarch-btn">
                  <i className="ri-user-3-line" />
                </a>
                <a href="cart.html" className="shop-btn">
                  <i className="ri-shopping-cart-2-line" />
                  <span className="cart-number">1</span>
                </a>
                <a href="contact.html" className="btn style-one box-shadow-1">
                  Free Consulting
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div
      className="responsive-navbar offcanvas offcanvas-end border-0 bg-success "
      data-bs-backdrop="static"
      tabIndex={-1}
      id="navbarOffcanvas"
    >
      <div className="offcanvas-header">
        <a href="" className="">
          <img
            className="logo-light"
            src="assets/img/all-img/writing3.jpg"
            alt="Image"
          />
        </a>
        <button
          type="button"
          className="close-btn bg-transparent position-relative lh-1 p-0 border-0"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="ri-close-line" />
        </button>
      </div>
      <div className="offcanvas-body">
        <ul className="responsive-menu">
          <li className="responsive-menu-list">
            <a href="javascript:void(0);" className="active">
              Home
            </a>
            <ul className="responsive-menu-items">
              <li>
                <a className="active">
                  Home One
                </a>
              </li>
              <li>
                <a href="index-2.html">Home Two</a>
              </li>
              <li>
                <a href="index-3.html">Home Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li className="responsive-menu-list">
            <a href="javascript:void(0);">Courses</a>
            <ul className="responsive-menu-items">
              <li>
                <a href="courses.html">Courses</a>
              </li>
              <li>
                <a href="courses-list.html">Course List</a>
              </li>
              <li>
                <a href="courses-grid.html">Courses Grid</a>
              </li>
              <li>
                <a href="course-details.html">Course Details</a>
              </li>
            </ul>
          </li>
          <li className="responsive-menu-list">
            <a href="javascript:void(0);">Shop</a>
            <ul className="responsive-menu-items">
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="shop-filtter.html">Shop Sidebar</a>
              </li>
              <li>
                <a href="single-product.html">Product Details</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="success.html">Success</a>
              </li>
            </ul>
          </li>
          <li className="responsive-menu-list">
            <a href="javascript:void(0);">Blog</a>
            <ul className="responsive-menu-items">
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-list.html">Blog List</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li className="responsive-menu-list">
            <a href="javascript:void(0);">Pages</a>
            <ul className="responsive-menu-items">
              <li>
                <a href="sign-in.html">Sign in</a>
              </li>
              <li>
                <a href="sign-up.html">Sign Up</a>
              </li>
              <li className="responsive-menu-list">
                <a href="javascript:void(0);">Instructor</a>
                <ul className="responsive-menu-items">
                  <li>
                    <a href="instructor.html">Instructor</a>
                  </li>
                  <li>
                    <a href="instructor2.html">Instructor Tow</a>
                  </li>
                  <li>
                    <a href="instructor-sidebar.html">Instructor Sidebar</a>
                  </li>
                  <li>
                    <a href="instructor-details.html">Instructor Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li className="responsive-menu-list">
                <a href="javascript:void(0);">Error</a>
                <ul className="responsive-menu-items">
                  <li>
                    <a href="error-404.html">Error One</a>
                  </li>
                  <li>
                    <a href="error-sidebar-404.html">Error Tow</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <div className="other-option d-md-flex align-items-center">
          <div className="option-item">
            <a href="contact.html" className="btn style-one w-100">
              Free Consulting
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* Navbar Area End */}
   


    {/*  Page Title Area Start*/}
    <section className="page-title-area position-relative">
      <div className="container">
        <div className="main-max-width">
          <div className="page-title-content">
           
            <div className="shape-1 moveHorizontal">
              <img src="assets/img/icon/shape-2.svg" alt="image" />
            </div>
            <div className="shape-2">
              <img src="assets/img/icon/section-icon-1.svg" alt="image" />
            </div>
            <div className="shape-3 bounce">
              <img src="assets/img/icon/section-icon-2.svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  Page Title Area End*/}
    {/* Blog Details Section Start */}
    <div className="blog-details-section ptb-100">
      <div className="container">
        <div className="main-max-width">
          <div className="row">
            <div className="col-lg-8">
              <div className="b-details-content">
                <div className="image">
                  <img
                    src="assets/img/all-img/listening-lesson-1.jpg"
                    alt="image"
                  />
                </div>
                <div className="meta-info d-flex align-items-center">
                  <div className="author-info d-flex align-items-center">
                    <img
                      src="assets/img/all-img/blog-user-1.png"
                      alt="image"
                    />
                    <p className="mb-0">David Maxwell</p>
                  </div>
                  <div className="item-info d-flex align-items-center">
                    <span>
                      <i className="ri-chat-1-line" />
                    </span>
                    <p className="mb-0">54 Message</p>
                  </div>
                  <div className="item-info d-flex align-items-center">
                    <span>
                      <i className="ri-calendar-2-line" />
                    </span>
                    <p className="mb-0">31 December 2023</p>
                  </div>
                </div>
                <div className="content ">
                  <div style={{ textAlign: "left" }}>
                    <p className="fs-20 ">
                      Listen to requests from a manager to practise and
                      improve your listening skills. Do the preparation task
                      first. Then listen to the audio and do the exercises.
                    </p>
                  </div>

                  <blockquote className="wp-block-quote">
                    <div>
                      <audio controls class="w-100">
                        <source
                          src="https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_A1_A_request_from_your_boss.mp3"
                          type="audio/mpeg"
                        />
                        <source
                          src="https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_A1_A_request_from_your_boss.mp3"
                          type="audio/ogg"
                        />
                        <source
                          src="https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_A1_A_request_from_your_boss.mp3"
                          type="audio/wav"
                        />
                        Audio not supported
                      </audio>
                    </div>
                  </blockquote>

                  <div className="banner mb-20">
                    <blockquote className="wp-block-quote">
                      <div className="container">
                       
                        <div></div>
                      </div>
                    </blockquote>

                    <blockquote className="wp-block-quote">
                      <div className="container">
                        <div></div>
                      </div>
                    </blockquote>

                    <blockquote className="wp-block-quote">
                      <div className="container">
                        <div></div>
                      </div>
                    </blockquote>
                  </div>

                  <h2 className="fs-20 mb-40">
                    Consulting Smart Business Solution For You.
                  </h2>
                  <p className="mb-30">
                    In the realm of consulting, effective time management is
                    the linchpin for success. As consultants, we navigate
                    diverse projects and client demands, requiring a delicate
                    balance to ensure both productivity and personal
                    well-being. Embracing strategic time maintenance is not
                    just a professional necessity; it's a commitment to
                    delivering optimal value to our clients.
                  </p>
                  <h2 className="fs-20 mb-40">Keep Your Free Time!</h2>
                  <p className="mb-30">
                    In the realm of consulting, effective time management is
                    the linchpin for success. As consultants, we navigate
                    diverse projects and client demands, requiring a delicate
                    balance to ensure both productivity and personal
                    well-being. Embracing strategic time maintenance is not
                    just a professional necessity; it's a commitment to
                    delivering optimal value to our clients.
                  </p>
                </div>
                <div className="article-footer d-flex justify-content-between align-items-center">
                
                  
                </div>
                <div className="edu-post-navigation d-flex justify-content-between align-items-center">
                  <div className="prev-link-wrapper d-flex justify-content-between align-items-center">
                    <div className="info-prev-link-wrapper">
                      <a
                        href="blog-details.html"
                        className="d-flex align-items-center"
                      >
                        <span className="image-prev">
                          <img
                            src="assets/img/all-img/listening-lesson-1.jpg"
                            alt="image"
                          />
                        </span>
                        <span className="prev-link-info-wrapper">
                          <span className="post-nav-title fs-15">
                            <i className="ri-arrow-left-s-line" /> Prev Lesson
                          </span>
                          <span className="prev-title fs-16">
                            How Technology Can Help You Stay Healthy
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="next-link-wrapper d-flex justify-content-between align-items-center">
                    <div className="info-next-link-wrapper">
                      <a
                        
                        className="d-flex align-items-center"
                      >
                        <span className="prev-link-info-wrapper">
                          <span className="post-nav-title fs-15">
                            Next Lesson <i className="ri-arrow-right-s-line" />
                          </span>
                          <span className="prev-title fs-16">
                            How Technology Can Help You Stay Healthy
                          </span>
                        </span>
                        <span className="image-prev">
                          <img
                            src="assets/img/all-img/listening-lesson-1.jpg"
                            alt="image"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h3 className="comments-title">Comment (03)</h3>
                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-slide">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="assets/img/all-img/user-cmt.png"
                                className="avatar"
                                alt="image"
                              />
                              <h4 className="fn">Esther Howard</h4>
                              <div className="reply">
                                <a
                                  href="blog-details.html"
                                  className="comment-reply-link"
                                >
                                  <i className="ri-reply-fill" /> Reply
                                </a>
                              </div>
                            </div>
                            <div className="comment-metadata">
                              <span>December 25.2023</span>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              In the consultancy landscape, every minute
                              invested in refining our expertise,
                              understanding client needs, and innovating
                              solutions contributes.
                            </p>
                            <div className="reply">
                              <a
                                href="blog-details.html"
                                className="comment-reply-link"
                              >
                                <i className="ri-reply-fill" /> Reply
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <ol className="children">
                        <li className="comment">
                          <div className="comment-slide">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src="assets/img/all-img/user-cmt.png"
                                    className="avatar"
                                    alt="image"
                                  />
                                  <h4 className="fn">Jenny Wilson</h4>
                                  <div className="reply">
                                    <a
                                      href="blog-details.html"
                                      className="comment-reply-link"
                                    >
                                      <i className="ri-reply-fill" /> Reply
                                    </a>
                                  </div>
                                </div>
                                <div className="comment-metadata">
                                  <span>December 25.2023</span>
                                </div>
                              </footer>
                              <div className="comment-content">
                                <p>
                                  There are many variations of passages of
                                  Lorem Ipsum available, but the majority have
                                  suffered alteration in some form
                                </p>
                                <div className="reply">
                                  <a
                                    href="blog-details.html"
                                    className="comment-reply-link"
                                  >
                                    <i className="ri-reply-fill" /> Reply
                                  </a>
                                </div>
                              </div>
                            </article>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li className="comment">
                      <div className="comment-slide">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="assets/img/all-img/user-cmt.png"
                                className="avatar"
                                alt="image"
                              />
                              <h4 className="fn">Esther Howard</h4>
                              <div className="reply">
                                <a
                                  href="blog-details.html"
                                  className="comment-reply-link"
                                >
                                  <i className="ri-reply-fill" /> Reply
                                </a>
                              </div>
                            </div>
                            <div className="comment-metadata">
                              <span>December 25.2023</span>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              In the consultancy landscape, every minute
                              invested in refining our expertise,
                              understanding client needs, and innovating
                              solutions contributes.
                            </p>
                            <div className="reply">
                              <a
                                href="blog-details.html"
                                className="comment-reply-link"
                              >
                                <i className="ri-reply-fill" /> Reply
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                  </ol>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <form className="comment-form">
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          placeholder="Your Name*"
                          name="author"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email*"
                          name="email"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input
                          type="url"
                          id="url"
                          placeholder="Website"
                          name="url"
                        />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols={45}
                          placeholder="Your Comment..."
                          rows={5}
                          maxLength={65525}
                          required="required"
                          defaultValue={""}
                        />
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          defaultValue="yes"
                          name="wp-comment-cookies-consent"
                          id="wp-comment-cookies-consent"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit btn style-one"
                          defaultValue="Submit Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="course-sidebar-widgets">
                <div className="widget widget-catgory widget-search">
                  <form className="search-form">
                    <label></label>
                    <button
                      className="widget-search-btn"
                      type="submit"
                    ></button>
                  </form>
                  <div className="accordion" id="widget-collps">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button widget-title"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          Other lessons
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="widget-collapse collapse show"
                        data-bs-parent="#widget-collps"
                      >
                        <div className="widget-collps-body">
                          <ul>
                            <li>
                              <a href="categories.html">
                                <p>Business Consulting</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Tax Consulting</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Art &amp; Design</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Tax Consulting</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Technology</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Development</p>
                              </a>
                            </li>
                            <li>
                              <a href="categories.html">
                                <p>Impact of Education</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-recent-blog">
                  <h3 className="widget-title">Online English Courses</h3>
                  <article className="item">
                    <a href="blog-list.html" className="thumb">
                      <img
                        src="assets/img/all-img/listening-lesson-1.jpg"
                        alt="iamge"
                      />
                    </a>
                    <div className="info">
                      <h4 className="title">
                        <a href="blog-list.html">
                          learning journey from the comfort of home.
                        </a>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <a href="blog-list.html" className="thumb">
                      <img
                        src="assets/img/all-img/listening-lesson-1.jpg"
                        alt="iamge"
                      />
                    </a>
                    <div className="info">
                      <h4 className="title">
                        <a href="blog-list.html">
                          learning journey from the comfort of home.
                        </a>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <a href="blog-list.html" className="thumb">
                      <img
                        src="assets/img/all-img/listening-lesson-1.jpg"
                        alt="iamge"
                      />
                    </a>
                    <div className="info">
                      <h4 className="title">
                        <a href="blog-list.html">
                          learning journey from the comfort of home.
                        </a>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <a href="blog-list.html" className="thumb">
                      <img
                        src="assets/img/all-img/listening-lesson-1.jpg"
                        alt="iamge"
                      />
                    </a>
                    <div className="info">
                      <h4 className="title">
                        <a href="blog-list.html">
                          learning journey from the comfort of home.
                        </a>
                      </h4>
                    </div>
                  </article>
                </div>
                <div className="widget widget-tag-cloud">
                  <h3 className="widget-title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="tag.html">Business</a>
                    <a href="tag.html">Course</a>
                    <a href="tag.html">Consulting</a>
                    <a href="tag.html">Online</a>
                    <a href="tag.html">Remote</a>
                    <a href="tag.html">Solution</a>
                  </div>
                </div>
                <div className="widget-add">
                  <div className="content">
                    <a className="text-decoration-none" href="index.html">
                      <img src="assets/img/logo/logo.svg" alt="image" />
                    </a>
                    <p className="fs-20">
                      Need Help? We Are Here To Help You
                    </p>
                    <a href="contact.html" className="btn style-one">
                      {" "}
                      Contact Us
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* blog Details Section End */}
    {/* Subscribe Section Start */}
    <div className="subscribe-area position-relative z-1">
      <div className="container">
        <div className="main-max-width">
          <div className="subscribe-info">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="fs-20 mb-20">
                    Sign up to get The Latest Updates
                  </h3>
                  <p>
                    Our approach to it is unique around how to work and how to
                    get hands-on with you like
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="subscribe-from d-flex align-items-center">
                  <input
                    className="from-control"
                    type="email"
                    placeholder="type your email address"
                    required=""
                  />
                  <button className="btn style-one" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Subscribe Section End */}
    {/* Footer Section Start */}
    <div className="footer-area ft-bg">
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="footer-widget info-web">
                  <div className="image">
                    <a className="text-decoration-none" href="index.html">
                      <img src="assets/img/logo/white-logo.svg" alt="image" />
                    </a>
                  </div>
                  <p className="pra-light mb-30">
                    Consulting is a dynamic and multifaceted field that
                    involves providing expert advice and guidance to
                    individuals,
                  </p>
                  <a href="sign-up.html" className="btn style-one">
                    Sign Up{" "}
                    <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4 className="text-white">Quick Links</h4>
                  <ul>
                    <li>
                      <a href="blog-details.html">Make Appointment</a>
                    </li>
                    <li>
                      <a href="shop.html">Customers Services</a>
                    </li>
                    <li>
                      <a href="about.html">About Company</a>
                    </li>
                    <li>
                      <a href="courses-grid.html">Our Case Studies</a>
                    </li>
                    <li>
                      <a href="instructor-sidebar.html">Free Consulting</a>
                    </li>
                    <li>
                      <a href="instructor-details.html">Meet Your Experts</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget ml-70">
                  <h4 className="text-white">Categories</h4>
                  <ul>
                    <li>
                      <a href="courses.html">Web Development</a>
                    </li>
                    <li>
                      <a href="course-details.html">UI&amp;UX Designer</a>
                    </li>
                    <li>
                      <a href="courses-grid.html">Management</a>
                    </li>
                    <li>
                      <a href="courses-list.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog News</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Finance &amp; Accounting</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4 className="text-white">Get In Touch</h4>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-map-pin-5-fill" />
                    </div>
                    <div className="content">
                      <p className="mb-0">
                        27 Division Sat, Barakuti, No 12G02, Us
                      </p>
                    </div>
                  </div>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-phone-fill" />
                    </div>
                    <div className="content">
                      <a href="tel:+123456789865">+123 456 789 865</a>
                      <a href="tel:+741852963856">+741 852 963 856</a>
                    </div>
                  </div>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-mail-unread-fill" />
                    </div>
                    <div className="content">
                      <a href="mailto:insocour@gmail.com">
                        insocour@gmail.com
                      </a>
                      <a href="mailto:insocour@gmail.com">
                        insocour@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4 col-xm-6 col-md-6">
                <div className="cpr-left">
                  <p className="mb-0">
                    Copyright @ 2023 Education. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-xm-6 col-md-6">
                <div className="cpr-right">
                  <ul>
                    <li>
                      <span>Follow Us:</span>
                    </li>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <i className="ri-facebook-fill" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank">
                        <i className="ri-instagram-line" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank">
                        <i className="ri-twitter-x-line" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/" target="_blank">
                        <i className="ri-linkedin-fill" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Section End */}
    {/* Back to Top */}
    <button
      type="button"
      id="backtotop"
      className="position-fixed text-center border-0 p-0"
    >
      <i className="ri-arrow-up-s-line" />
    </button>
  </>
  )
}
