import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <section name="contact" className="section-padding" style={{
            position: "relative",
            background: "linear-gradient(180deg, #ffffff 0%, var(--surface-light) 100%)"
        }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        marginBottom: "1rem",
                        fontFamily: "var(--font-heading)",
                        color: "var(--heading-color)"
                    }}>
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        color: "var(--text-secondary)",
                        fontSize: "1.1rem",
                        lineHeight: "1.7"
                    }}>
                        Ready to start your PhD journey or discuss your research project? We're here to help you succeed.
                    </p>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
                    gap: "3rem",
                    alignItems: "start"
                }}>
                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            background: "#fff",
                            padding: "2.5rem",
                            borderRadius: "var(--radius-lg)",
                            boxShadow: "var(--shadow-lg)",
                            border: "1px solid var(--border-light)"
                        }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "var(--heading-color)",
                                        fontWeight: "600",
                                        fontSize: "0.9375rem"
                                    }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "0.875rem 1rem",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-md)",
                                            fontSize: "1rem",
                                            transition: "all var(--transition-fast)",
                                            fontFamily: "var(--font-main)"
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "var(--accent-color)";
                                            e.target.style.outline = "none";
                                            e.target.style.boxShadow = "0 0 0 3px rgba(10, 77, 78, 0.1)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "var(--border-color)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "var(--heading-color)",
                                        fontWeight: "600",
                                        fontSize: "0.9375rem"
                                    }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "0.875rem 1rem",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-md)",
                                            fontSize: "1rem",
                                            transition: "all var(--transition-fast)",
                                            fontFamily: "var(--font-main)"
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "var(--accent-color)";
                                            e.target.style.outline = "none";
                                            e.target.style.boxShadow = "0 0 0 3px rgba(10, 77, 78, 0.1)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "var(--border-color)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: "block",
                                    marginBottom: "0.5rem",
                                    color: "var(--heading-color)",
                                    fontWeight: "600",
                                    fontSize: "0.9375rem"
                                }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="How can we help you?"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "0.875rem 1rem",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-md)",
                                        fontSize: "1rem",
                                        transition: "all var(--transition-fast)",
                                        fontFamily: "var(--font-main)"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "var(--accent-color)";
                                        e.target.style.outline = "none";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(10, 77, 78, 0.1)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "var(--border-color)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{
                                    display: "block",
                                    marginBottom: "0.5rem",
                                    color: "var(--heading-color)",
                                    fontWeight: "600",
                                    fontSize: "0.9375rem"
                                }}>
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your research goals..."
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "0.875rem 1rem",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-md)",
                                        fontSize: "1rem",
                                        fontFamily: "var(--font-main)",
                                        resize: "vertical",
                                        transition: "all var(--transition-fast)"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "var(--accent-color)";
                                        e.target.style.outline = "none";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(10, 77, 78, 0.1)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "var(--border-color)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                ></textarea>
                            </div>

                            <button
                                className="btn btn-success btn-block"
                                type="submit"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </div>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                    >
                        <h3 style={{
                            fontSize: "1.75rem",
                            marginBottom: "0.5rem",
                            fontFamily: "var(--font-heading)",
                            color: "var(--heading-color)"
                        }}>
                            Contact Information
                        </h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1rem" }}>
                            Have questions? Reach out to our team and we'll get back to you as soon as possible.
                        </p>

                        {/* Contact Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                {
                                    icon: FaMapMarkerAlt,
                                    title: "Visit Us",
                                    info: "Beside AAA Mall, upside of Bata ShowRoom, Ameerpet, Hyderabad, Telangana-500016"
                                },
                                {
                                    icon: FaPhone,
                                    title: "Call Us",
                                    info: "+91 9347967147",
                                    link: "tel:+919347967147"
                                },
                                {
                                    icon: FaEnvelope,
                                    title: "Email Us",
                                    info: "devmatrixlab@gmail.com",
                                    link: "mailto:devmatrixlab@gmail.com"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -4 }}
                                    style={{
                                        background: "#fff",
                                        padding: "1.5rem",
                                        borderRadius: "var(--radius-lg)",
                                        boxShadow: "var(--shadow-md)",
                                        border: "1px solid var(--border-light)",
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "flex-start",
                                        transition: "all var(--transition-normal)"
                                    }}
                                >
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "var(--radius-md)",
                                        background: "var(--gradient-primary)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0
                                    }}>
                                        <item.icon style={{ color: "#fff", fontSize: "1.25rem" }} />
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: "1.125rem",
                                            marginBottom: "0.25rem",
                                            color: "var(--heading-color)",
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: "600"
                                        }}>
                                            {item.title}
                                        </h4>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                style={{
                                                    color: "var(--accent-color)",
                                                    textDecoration: "none",
                                                    fontSize: "0.9375rem",
                                                    transition: "color var(--transition-fast)"
                                                }}
                                                onMouseEnter={(e) => e.target.style.color = "var(--highlight-color)"}
                                                onMouseLeave={(e) => e.target.style.color = "var(--accent-color)"}
                                            >
                                                {item.info}
                                            </a>
                                        ) : (
                                            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", marginBottom: "0" }}>
                                                {item.info}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
