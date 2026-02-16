import React from "react";
import PageTemplate from "./PageTemplate";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
    return (
        <PageTemplate title="Contact Us" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/Black and White Minimalist Coffee Presentation.png">

            <section style={{ padding: "50px 20px", background: "#f9fff9" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto", alignItems: "start" }}>

                    {/* Left Side: Info */}
                    <div>
                        <h2 style={{ color: "#1a4d2e", marginBottom: "15px", fontSize: "2rem", fontWeight: "bold" }}>Get in Touch</h2>
                        <p style={{ color: "#444", marginBottom: "20px", lineHeight: "1.6" }}>
                            We’re here to answer your queries and guide you throughout your research journey. Reach out to us via phone, email, or by filling out the form below.
                        </p>

                        <div style={{ background: "#e6f8eb", padding: "15px", borderRadius: "10px", marginBottom: "15px", borderLeft: "5px solid #28a745" }}>
                            <h3 style={{ margin: "0 0 5px", color: "#1a4d2e", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "10px" }}><FaMapMarkerAlt /> Our Office</h3>
                            <p style={{ margin: 0, color: "#444" }}>Beside AAA Mall, upside of Bata ShowRoom, Ameerpet, Hyderabad, Telangana-500016</p>
                        </div>

                        <div style={{ background: "#e6f8eb", padding: "15px", borderRadius: "10px", marginBottom: "15px", borderLeft: "5px solid #28a745" }}>
                            <h3 style={{ margin: "0 0 5px", color: "#1a4d2e", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "10px" }}><FaPhone /> Call Us</h3>
                            <p style={{ margin: 0, color: "#444" }}>+91 9347967147</p>
                        </div>

                        <div style={{ background: "#e6f8eb", padding: "15px", borderRadius: "10px", marginBottom: "15px", borderLeft: "5px solid #28a745" }}>
                            <h3 style={{ margin: "0 0 5px", color: "#1a4d2e", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "10px" }}><FaEnvelope /> Email</h3>
                            <p style={{ margin: 0, color: "#444" }}>devmatrixlab@gmail.com</p>
                        </div>

                        <div style={{ background: "#e6f8eb", padding: "15px", borderRadius: "10px", marginBottom: "15px", borderLeft: "5px solid #28a745" }}>
                            <h3 style={{ margin: "0 0 5px", color: "#1a4d2e", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "10px" }}><FaWhatsapp /> WhatsApp</h3>
                            <p style={{ margin: 0 }}><a href="https://wa.me/919347967147" target="_blank" style={{ color: "#28a745", fontWeight: "bold", textDecoration: "none" }}>Chat with Us</a></p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div>
                        <h2 style={{ color: "#1a4d2e", marginBottom: "15px", fontSize: "2rem", fontWeight: "bold" }}>Send Us a Message</h2>
                        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            <input type="text" placeholder="Your Name" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #c6e6c6", fontSize: "16px" }} />
                            <input type="email" placeholder="Your Email" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #c6e6c6", fontSize: "16px" }} />
                            <input type="tel" placeholder="Phone Number" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #c6e6c6", fontSize: "16px" }} />
                            <textarea placeholder="Write your message here..." rows="5" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #c6e6c6", fontSize: "16px" }}></textarea>
                            <button type="submit" style={{ padding: "12px", background: "#28a745", color: "#fff", fontSize: "18px", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer", transition: "0.3s" }}>Submit Message</button>
                        </form>
                    </div>

                </div>

                {/* Map */}
                <div style={{ marginTop: "40px", borderRadius: "15px", overflow: "hidden", boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.512377785708!2d78.399547415374!3d17.493079004801577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d04f9a6f2d%3A0x6e92b6c6ffb8b993!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1705153812345"
                        width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>
        </PageTemplate>
    );
};

export default ContactPage;
