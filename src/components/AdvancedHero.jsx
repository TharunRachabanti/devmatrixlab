import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaAward, FaArrowDown } from "react-icons/fa";
import CountUp from "react-countup";

const AdvancedHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "linear-gradient(135deg, #0a4d4e 0%, #1a7f7f 50%, #0a4d4e 100%)"
            }}
        >
            {/* Animated Background Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                animation: "drift 60s linear infinite"
            }}></div>

            {/* Overlay Gradient */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,77,78,0.4) 100%)"
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "3rem",
                    alignItems: "center"
                }}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.75rem 1.5rem",
                                background: "rgba(255, 255, 255, 0.15)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "50px",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                marginBottom: "2rem",
                                color: "#fff"
                            }}
                        >
                            <FaGraduationCap style={{ fontSize: "1.25rem", color: "#8dd000" }} />
                            <span style={{ fontWeight: "600" }}>PhD Consultancy Excellence</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                fontWeight: "800",
                                color: "#fff",
                                lineHeight: "1.2",
                                marginBottom: "1.5rem",
                                fontFamily: "var(--font-heading)"
                            }}
                        >
                            Welcome to{" "}
                            <span style={{
                                background: "linear-gradient(135deg, #8dd000 0%, #6ab800 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                display: "inline-block"
                            }}>
                                DevMatrixLab
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            style={{
                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                color: "rgba(255, 255, 255, 0.9)",
                                marginBottom: "2.5rem",
                                lineHeight: "1.7",
                                maxWidth: "600px"
                            }}
                        >
                            Your Trusted Partner in PhD Research & Academic Excellence
                            <br />
                            <span style={{ color: "#8dd000", fontWeight: "600" }}>
                                Expert Guidance • Journal Publication • AI-Driven Solutions
                            </span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                        >
                            <Link to="services" smooth={true} duration={500}>
                                <button className="btn-primary" style={{
                                    padding: "1.25rem 2.5rem",
                                    fontSize: "1.125rem",
                                    fontWeight: "700",
                                    background: "linear-gradient(135deg, #8dd000 0%, #6ab800 100%)",
                                    border: "none",
                                    borderRadius: "var(--radius-lg)",
                                    color: "#fff",
                                    cursor: "pointer",
                                    boxShadow: "0 10px 30px rgba(141, 208, 0, 0.4)",
                                    transition: "all var(--transition-normal)"
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                        e.currentTarget.style.boxShadow = "0 15px 40px rgba(141, 208, 0, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(141, 208, 0, 0.4)";
                                    }}
                                >
                                    Explore Services
                                </button>
                            </Link>
                            <Link to="contact" smooth={true} duration={500}>
                                <button style={{
                                    padding: "1.25rem 2.5rem",
                                    fontSize: "1.125rem",
                                    fontWeight: "700",
                                    background: "transparent",
                                    border: "2px solid rgba(255, 255, 255, 0.5)",
                                    borderRadius: "var(--radius-lg)",
                                    color: "#fff",
                                    cursor: "pointer",
                                    transition: "all var(--transition-normal)"
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor = "#fff";
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    Contact Us
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                            gap: "1.5rem"
                        }}
                    >
                        {[
                            { icon: FaGraduationCap, number: 500, suffix: "+", label: "PhDs Awarded", delay: 0.6, color: "#8dd000" },
                            { icon: FaUsers, number: 1000, suffix: "+", label: "Students", delay: 0.8, color: "#6ab800" },
                            { icon: FaAward, number: 10, suffix: "+", label: "Years Experience", delay: 1, color: "#8dd000" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: stat.delay, duration: 0.6 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(20px)",
                                    WebkitBackdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "var(--radius-lg)",
                                    padding: "2rem 1.5rem",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "all var(--transition-normal)"
                                }}
                            >
                                <stat.icon style={{
                                    fontSize: "3rem",
                                    color: stat.color,
                                    marginBottom: "1rem",
                                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
                                }} />
                                <div style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "800",
                                    color: "#fff",
                                    marginBottom: "0.5rem",
                                    fontFamily: "var(--font-heading)"
                                }}>
                                    {isVisible && <CountUp end={stat.number} duration={2.5} />}{stat.suffix}
                                </div>
                                <div style={{
                                    fontSize: "0.9375rem",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    fontWeight: "600"
                                }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    cursor: "pointer",
                    zIndex: 3
                }}
            >
                <Link to="about" smooth={true} duration={500}>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FaArrowDown style={{
                            fontSize: "2rem",
                            color: "rgba(255, 255, 255, 0.7)"
                        }} />
                    </motion.div>
                    <p style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.875rem",
                        marginTop: "0.5rem"
                    }}>
                        Scroll Down
                    </p>
                </Link>
            </motion.div>

            <style>{`
                @keyframes drift {
                    from { transform: translate(0, 0); }
                    to { transform: translate(100px, 100px); }
                }
            `}</style>
        </section>
    );
};

export default AdvancedHero;
