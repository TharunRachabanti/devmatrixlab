import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowDown, FaGraduationCap, FaAward, FaUsers } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            name="home"
            style={{
                minHeight: "100vh",
                width: "100%",
                background: `url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: "white",
                overflow: "hidden"
            }}
        >
            {/* Premium Gradient Overlay */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "var(--gradient-hero)",
                zIndex: 1
            }}></div>

            {/* Animated Background Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(106, 184, 0, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, rgba(26, 127, 127, 0.1) 0%, transparent 50%)`,
                zIndex: 1,
                animation: "pulse 8s ease-in-out infinite"
            }}></div>

            {/* Content Container */}
            <div className="container" style={{ position: "relative", zIndex: 2, padding: "2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                    alignItems: "center"
                }}>
                    {/* Main Content - Glassmorphism Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "var(--radius-xl)",
                            padding: "clamp(2rem, 5vw, 4rem)",
                            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(106, 184, 0, 0.2)",
                                border: "1px solid rgba(106, 184, 0, 0.4)",
                                padding: "0.5rem 1.25rem",
                                borderRadius: "var(--radius-full)",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                marginBottom: "1.5rem",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)"
                            }}
                        >
                            <FaGraduationCap style={{ color: "#8dd000" }} />
                            <span>PhD Consultancy Excellence</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontFamily: "var(--font-heading)",
                                color: "white",
                                marginBottom: "1.5rem",
                                fontWeight: "800",
                                lineHeight: "1.2",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Welcome to{" "}
                            <span style={{
                                background: "var(--gradient-accent)",
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            style={{
                                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                                marginBottom: "2.5rem",
                                lineHeight: "1.6",
                                color: "rgba(255, 255, 255, 0.95)",
                                fontWeight: "400"
                            }}
                        >
                            Your Trusted Partner in PhD Research & Academic Excellence
                            <br />
                            <span style={{ color: "rgba(141, 208, 0, 1)", fontWeight: "600" }}>
                                Expert Guidance • Journal Publication • AI-Driven Solutions
                            </span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="btn-group"
                            style={{ flexWrap: "wrap", justifyContent: "center" }}
                        >
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                className="btn btn-primary btn-lg btn-icon"
                            >
                                Explore Services
                                <FaArrowDown style={{ fontSize: "0.9rem" }} />
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="btn btn-ghost btn-lg"
                            >
                                Get Started
                            </Link>
                        </motion.div>

                        {/* Quick Stats Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            style={{
                                display: "flex",
                                gap: "1rem",
                                flexWrap: "wrap",
                                marginTop: "2.5rem",
                                paddingTop: "2rem",
                                borderTop: "1px solid rgba(255, 255, 255, 0.15)"
                            }}
                        >
                            {[
                                { icon: FaGraduationCap, text: "500+ PhDs" },
                                { icon: FaAward, text: "98% Success" },
                                { icon: FaUsers, text: "1000+ Students" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.75rem 1.5rem",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "var(--radius-full)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        fontSize: "0.9375rem",
                                        fontWeight: "600",
                                        color: "white",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer"
                                    }}
                                >
                                    <stat.icon style={{ color: "#8dd000", fontSize: "1.125rem" }} />
                                    <span>{stat.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Floating Badge Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        style={{
                            position: "absolute",
                            top: "25%",
                            right: "2%",
                            zIndex: 2,
                            display: "none"
                        }}
                        className="floating-badge-right"
                    >
                        {/* Main Stat Card */}
                        <motion.div
                            style={{
                                background: "rgba(255, 255, 255, 0.15)",
                                backdropFilter: "blur(20px)",
                                padding: "1.25rem 1.75rem",
                                borderRadius: "var(--radius-lg)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                                animation: "float 6s ease-in-out infinite 2s",
                                marginBottom: "1.5rem"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "var(--gradient-primary)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem"
                                }}>
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "white" }}>500+</div>
                                    <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.8)" }}>PhD Awarded</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Below Text - Active Clients */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.6 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(15px)",
                                padding: "1rem 1.5rem",
                                borderRadius: "var(--radius-md)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                textAlign: "center",
                                marginBottom: "1rem",
                                animation: "float 6s ease-in-out infinite 2.5s"
                            }}
                        >
                            <div style={{ fontSize: "1.25rem", fontWeight: "700", color: "white", marginBottom: "0.25rem" }}>200+</div>
                            <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: "500" }}>Active Clients</div>
                        </motion.div>

                        {/* Link to Samples */}
                        <motion.a
                            href="#projects"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem",
                                background: "rgba(106, 184, 0, 0.2)",
                                backdropFilter: "blur(15px)",
                                padding: "0.875rem 1.25rem",
                                borderRadius: "var(--radius-md)",
                                border: "1px solid rgba(106, 184, 0, 0.4)",
                                textDecoration: "none",
                                color: "white",
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                animation: "float 6s ease-in-out infinite 3s"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(106, 184, 0, 0.3)";
                                e.currentTarget.style.borderColor = "rgba(106, 184, 0, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(106, 184, 0, 0.2)";
                                e.currentTarget.style.borderColor = "rgba(106, 184, 0, 0.4)";
                            }}
                        >
                            <span>Go to Sample Work</span>
                            <FaArrowDown style={{ fontSize: "0.75rem", transform: "rotate(-90deg)" }} />
                        </motion.a>
                    </motion.div>


                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                    textAlign: "center",
                    cursor: "pointer"
                }}
            >
                <Link to="services" smooth={true} duration={500}>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        style={{
                            fontSize: "2rem",
                            color: "white",
                            opacity: 0.8
                        }}
                    >
                        <FaArrowDown />
                    </motion.div>
                    <div style={{
                        fontSize: "0.875rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginTop: "0.5rem",
                        fontWeight: "600"
                    }}>
                        Scroll to Explore
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;

// Add inline styles for floating animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    @media (min-width: 1200px) {
        .floating-badge-left,
        .floating-badge-right {
            display: block !important;
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
    }
`;
if (typeof document !== 'undefined' && !document.getElementById('hero-animations')) {
    styleSheet.id = 'hero-animations';
    document.head.appendChild(styleSheet);
}
