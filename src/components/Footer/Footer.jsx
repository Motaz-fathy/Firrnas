import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../../assets/firrnas-logo.svg";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// check the root of files
 
function FooterSection() {
  let copyright = String.fromCodePoint(0x00A9);
  const company = [
    { name: "Home", navigate: "/" },
    { name: "About", navigate: "/about" },
    { name: "Terms of Service", navigate: "/terms-service" },
    { name: "Privacy Policy", navigate: "/privacy-policy" },
    { name: "Refund Policy", navigate: "/refund-policy" },
    { name: "Pricing", navigate: "/price-pages" },
  ];
  const resources = [
    { name: "Blog", navigate: "/blog" },
    { name: "Contact", navigate: "/contact" },
    { name: "Discover", navigate: "/discover" },
    { name: "Community", navigate: "/community" },
  ];

  return (
    <>
      <footer>
        <div className="col-11 ">
          <div className="footer  row">
            <div className="footer-logo col-12 col-md-4">
              <div className="logo">
                <img src={footerLogo} alt="check your connection" style={{ width: "145px", marginBottom: "20px",padding:"20px" }} />
              </div>
              <p style={{ color: "var(--second--color)", fontSize: "14px", lineHeight: "20px",padding:"20px" }}>
                “Imagine a world where your dreams blend seamlessly with reality. Our technology doesn’t just make it possible; It brings it to life, right here, right now.”
              </p>
            </div>
            <div className="col-4"></div>

            <div className="footer-links  col-12 col-md-3 d-flex" >
              <div className="company-links links text-left col-5 mx-4" style={{ position: "relative", right: "-80px" }}>
                <p style={{ fontSize: "14px", color: "var(--main--color)" }}>Company</p>
                <div className="company-show" style={{ fontSize: "14px", color: "var(--second--color)" }}>
                  {company.map((link, index) => (
                    link.navigate ? (
                      <Link to={link.navigate} style={{ margin: "10px 0", display: "block", textDecoration: "none", color: "var(--second--color)" }} key={index}>
                        {link.name}
                      </Link>
                    ) : (
                      <span style={{ margin: "10px 0", display: "block", color: "var(--second--color)" }} key={index}>
                        {link.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
              <div className="resources-links links text-left col-5" style={{ position: "relative", right: "-80px" }}>
                <p style={{ fontSize: "14px", color: "var(--main--color)" }}>Resources</p>
                <div className="resources-show" style={{ fontSize: "14px", color: "var(--second--color)" }}>
                  {resources.map((link, index) => (
                    link.navigate ? (
                      <Link to={link.navigate} style={{ margin: "10px 0", display: "block", textDecoration: "none", color: "var(--second--color)" }} key={index}>
                        {link.name}
                      </Link>
                    ) : (
                      <span style={{ margin: "10px 0", display: "block", color: "var(--second--color)" }} key={index}>
                        {link.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="copyRight" style={{ float: "left" }}>
            <h5 className="copyRight" style={{ color: "var(--second--color)", margin: "40px 0 20px", fontSize: "12px" }}>
              {copyright} Copyright FIRRNAS LTD 2024. All Rights Reserved
            </h5>
          </div>
          <div className="footer-icons" style={{ color: "#fff", fontSize: "20px", display: "flex", gap: "10px", float: "right", margin: "30px 0 20px" }}>
            <div className="fa-icon"><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></div>
            <div className="fa-icon"><a href="/"><FontAwesomeIcon icon={faXTwitter} /></a></div>
            <div className="fa-icon"><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
