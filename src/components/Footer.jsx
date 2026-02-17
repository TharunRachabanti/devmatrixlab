import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={{
            background: "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
            color: "#fff",
            paddingTop: "clamp(2.5rem, 5vw, 4rem)",
            paddingBottom: "1.5rem",
            borderTop: "3px solid var(--accent-color)"
        }}>
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: About */}
                    <div>
                        <h3 style={{
                            fontSize: "1.75rem",
                            marginBottom: "1.25rem",
                            background: "var(--gradient-accent)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontFamily: "var(--font-heading)",
                            fontWeight: "700"
                        }}>
                            DevMatrixLab
                        </h3>
                        <p style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: "1.8",
                            fontSize: "1rem",
                            textAlign: "justify"
                        }}>
                            We are a premier research consultancy dedicated to empowering scholars with comprehensive academic support. From topic selection to final publication, our legacy is built on excellence, integrity, and your research success.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 style={{
                            fontSize: "1.375rem",
                            marginBottom: "1.25rem",
                            color: "#fff",
                            fontFamily: "var(--font-heading)",
                            fontWeight: "600"
                        }}>
                            Quick Links
                        </h3>
                        <ul style={{ lineHeight: "2.2" }}>
                            <li>
                                <a href="/" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="/#about" className="footer-link">About Us</a>
                            </li>
                            <li>
                                <a href="/#services" className="footer-link">Services</a>
                            </li>
                            <li>
                                <a href="/contact" className="footer-link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 style={{
                            fontSize: "1.375rem",
                            marginBottom: "1.25rem",
                            color: "#fff",
                            fontFamily: "var(--font-heading)",
                            fontWeight: "600"
                        }}>
                            Contact Us
                        </h3>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem", color: "rgba(255, 255, 255, 0.8)" }}>
                            <FaMapMarkerAlt style={{ color: "var(--highlight-color)", marginTop: "5px", fontSize: "1.125rem", flexShrink: 0 }} />
                            <div style={{ fontSize: "0.9375rem" }}>
                                <p style={{ marginBottom: "10px" }}><strong>HEAD OFFICE:</strong><br />Beside AAA Mall, upside of Bata ShowRoom, Ameerpet, Hyderabad, Telangana-500016</p>
                                <p style={{ marginBottom: "10px" }}><strong>OFFICE 2:</strong><br />beside marina mall, near toll plaz, navalur, chennai, Tamil Nadu</p>
                                <p><strong>OFFICE 3:</strong><br />Beside of Guntur Bus Stop, Guntur, Andhra Pradesh</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", color: "rgba(255, 255, 255, 0.8)" }}>
                            <FaPhoneAlt style={{ color: "var(--highlight-color)", fontSize: "1.125rem" }} />
                            <a href="tel:+919347967147" className="footer-link">+91 9347967147</a>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255, 255, 255, 0.8)" }}>
                            <FaEnvelope style={{ color: "var(--highlight-color)", fontSize: "1.125rem" }} />
                            <a href="mailto:devmatrixlab@gmail.com" className="footer-link">devmatrixlab@gmail.com</a>
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: "1.5rem" }} />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
                    <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9375rem" }}>
                        &copy; {new Date().getFullYear()} DevMatrixLab. All Rights Reserved.
                    </p>
                </div>
            </div>
            <style>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: clamp(2rem, 4vw, 3rem);
                    margin-bottom: 3rem;
                }
                
                @media (min-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1.5fr 0.6fr 1.2fr;
                        gap: 2rem;
                    }
                }

                .footer-link {
                    color: rgba(255, 255, 255, 0.8);
                    transition: all var(--transition-fast);
                    display: inline-block;
                    position: relative;
                    text-decoration: none;
                }
                .footer-link:hover {
                    color: var(--highlight-color);
                }
                .social-icon {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 1.25rem;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: var(--radius-md);
                    background: rgba(255, 255, 255, 0.05);
                    transition: all var(--transition-normal);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .social-icon:hover {
                    color: white;
                    background: var(--gradient-accent);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 16px rgba(106, 184, 0, 0.3);
                    border-color: transparent;
                }
            `}</style>
        </footer>
    );
};

export default Footer;

