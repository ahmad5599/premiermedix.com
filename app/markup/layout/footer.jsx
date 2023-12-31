"use client";

import React, { Component } from "react";
// import { Link } from "react-router-dom";

// Images
import Logo from "@/app/images/logo.png";
import footerBg from "@/app/images/background/footer.jpg";
import ptImg1 from "@/app/images/shap/wave-blue.png";
import ptImg2 from "@/app/images/shap/circle-dots.png";
import ptImg3 from "@/app/images/shap/plus-blue.png";
import ptImg4 from "@/app/images/shap/wave-blue.png";

// Social Images
import facebook from "@/app/images/social/facebook.png";
import twitter from "@/app/images/social/twitter.png";
import instagram from "@/app/images/social/instagram.png";
import linkedin from "@/app/images/social/linkedin.png";
// import googleMap from "../../images/social/google-map.png";

//react icon imports
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

class aboutSection extends Component {
  render() {
    return (
      <>
        <footer
          className="footer"
          style={{ backgroundImage: "url(" + footerBg.src + ")" }}
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="widget widget_info">
                    <div className="footer-logo">
                      <Link href="/">
                        <img src={Logo.src} alt="" />
                      </Link>
                    </div>
                    <div
                      style={{
                        // marginLeft: "auto",
                        // marginRight: "auto",
                        textAlign: "justify",
                        width: "100%",
                      }}
                      className="ft-contact"
                    >
                      <p>
                        PremierMedix offers comprehensive healthcare solutions
                        in credentialing, billing, coding, and revenue cycle
                        management.
                      </p>
                      {/* <div className="contact-bx">
                        <div className="icon">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="contact-number">
                          <span>Contact Us</span>
                          <h4 className="number">+01 123 456 7890</h4>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <div className="widget footer_widget">
                    <h3 className="footer-title">Our Service</h3>
                    <ul>
                      <li>
                        <Link href="/service-detail">
                          <span>Credentialing & Enrollment</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-detail">
                          <span>Medical Billing Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-detail">
                          <span>Medical Coding Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-detail">
                          <span>Front Office Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-detail">
                          <span>Patient Billing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-detail">
                          <span>Practice Audit</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-6">
                  <div className="widget footer_widget ">
                    <h3 className="footer-title">Contact us</h3>
                    {/* <h3 className="footer-title">Quick Links</h3> */}
                    {/* <ul>
                      <li>
                        <Link to="/about-us">
                          <span>About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services">
                          <span>Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/booking">
                          <span>Booking</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">
                          <span>Faq's</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">
                          <span>Blogs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/team">
                          <span>Out Team</span>
                        </Link>
                      </li>
                    </ul> */}
                    <ul>
                      <li style={{ marginTop: "-0.5rem" }}>
                        <Link
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.comhttps://goo.gl/maps/QC42R88H3z4GPVWm7/"
                        >
                          {/* <img src={googleMap} alt="" /> */}
                          <MdLocationPin style={{ fontSize: "1.25rem" }} />
                          <p
                            style={{
                              paddingLeft: "1rem",
                              paddingTop: "1rem",
                            }}
                          >
                            204 F Street Davis CA <br /> 95616
                          </p>
                        </Link>
                      </li>
                      <li style={{ marginTop: "-1rem" }}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                        >
                          <BsTelephoneFill />
                          <p
                            style={{
                              paddingLeft: "1rem",
                              paddingTop: "1rem",
                            }}
                          >
                            (877) 780-6999
                          </p>
                        </span>
                      </li>
                      <li style={{ marginTop: "-1rem" }}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                        >
                          <FaFax />
                          <p
                            style={{
                              paddingLeft: "1rem",
                              paddingTop: "1rem",
                            }}
                          >
                            (877) 780-6999
                          </p>
                        </span>
                      </li>
                      <li style={{ marginTop: "-1rem" }}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                        >
                          <MdEmail />
                          <p
                            style={{
                              paddingLeft: "1rem",
                              paddingTop: "1rem",
                            }}
                          >
                            info@premiermedix
                          </p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="widget widget_form">
                    <h3 className="footer-title">Subcribe</h3>
                    <form className="subscribe-form subscription-form mb-30">
                      <div className="ajax-message"></div>
                      <div className="input-group">
                        <input
                          name="email"
                          required="required"
                          className="form-control"
                          placeholder="Email Address"
                          type="email"
                        />
                      </div>
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn btn-secondary shadow w-100"
                      >
                        Subscribe Now
                      </button>
                    </form>
                    <div className="footer-social-link">
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/"
                          >
                            <img src={facebook.src} alt="" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/"
                          >
                            <img src={twitter.src} alt="" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/"
                          >
                            <img src={instagram.src} alt="" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/"
                          >
                            <img src={linkedin.src} alt="" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 text-center">
                  {/* <p className="copyright-text">204 F Street Davis CA 95616</p> */}
                  <p className="copyright-text">
                    Copyright © 2023 Design & Developed by{" "}
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-secondary"
                    >
                      PremierMedix
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate-wave" src={ptImg1.src} alt="" />
          <img className="pt-img2 animate1" src={ptImg2.src} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg3.src} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4.src} alt="" />
        </footer>
      </>
    );
  }
}

export default aboutSection;
