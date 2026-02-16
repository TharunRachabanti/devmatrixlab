import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const BeautifulHero = () => {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: "var(--white)",
                overflow: "hidden"
            }}
        >
            {/* Subtle Background Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(8, 145, 178, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.02) 0%, transparent 50%)
                `,
                pointerEvents: "none"
            }}></div>

            {/* Accent Shapes */}
            <div style={{
                position: "absolute",
                top: "10%",
                right: "10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(8, 145, 178, 0.08) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                pointerEvents: "none"
            }}></div>

            <div style={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(217, 119, 6, 0.06) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(50px)",
                pointerEvents: "none"
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                    gap: "var(--space-16)",
                    alignItems: "center",
                    padding: "var(--space-8) 0"
                }}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="badge badge-accent"
                            style={{
                                marginBottom: "var(--space-6)",
                                display: "inline-flex",
                                fontWeight: "600"
                            }}
                        >
                            <FaGraduationCap style={{ fontSize: "1.25rem" }} />
                            <span>Trusted by 500+ PhD Scholars</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: "800",
                                lineHeight: "1.1",
                                color: "var(--primary-900)",
                                marginBottom: "var(--space-6)",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Your Journey to{" "}
                            <span className="text-gradient" style={{
                                background: "var(--gradient-accent)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}>
                                PhD Excellence
                            </span>{" "}
                            Starts Here
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            style={{
                                fontSize: "var(--text-xl)",
                                lineHeight: "1.8",
                                color: "var(--primary-600)",
                                marginBottom: "var(--space-8)",
                                maxWidth: "600px"
                            }}
                        >
                            DevMatrixLab delivers world-class research support, journal publication guidance,
                            and AI-driven solutions to help you achieve academic excellence with confidence.
                        </motion.p>

                        {/* Feature List */}
                        <motion.ul
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            style={{
                                listStyle: "none",
                                marginBottom: "var(--space-10)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "var(--space-3)"
                            }}
                        >
                            {[
                                "Expert guidance from experienced PhD consultants",
                                "Proven track record with 98% success rate",
                                "Specialized support for SCI, Scopus & IEEE journals"
                            ].map((feature, index) => (
                                <li key={index} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-3)",
                                    fontSize: "var(--text-lg)",
                                    color: "var(--primary-700)"
                                }}>
                                    <FaCheckCircle style={{
                                        color: "var(--success)",
                                        fontSize: "1.25rem",
                                        flexShrink: 0
                                    }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </motion.ul>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            style={{
                                display: "flex",
                                gap: "var(--space-4)",
                                flexWrap: "wrap"
                            }}
                        >
                            <Link to="services" smooth={true} duration={500} style={{ textDecoration: "none" }}>
                                <button className="btn btn-primary btn-lg" style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "var(--space-2)"
                                }}>
                                    Explore Our Services
                                    <FaArrowRight />
                                </button>
                            </Link>
                            <Link to="contact" smooth={true} duration={500} style={{ textDecoration: "none" }}>
                                <button className="btn btn-outline btn-lg">
                                    Get Expert Consultation
                                </button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            style={{
                                marginTop: "var(--space-10)",
                                paddingTop: "var(--space-8)",
                                borderTop: "1px solid var(--primary-200)",
                                display: "flex",
                                gap: "var(--space-8)",
                                flexWrap: "wrap"
                            }}
                        >
                            {[
                                { number: "500+", label: "PhDs Completed" },
                                { number: "98%", label: "Success Rate" },
                                { number: "100+", label: "Universities" }
                            ].map((stat, index) => (
                                <div key={index} style={{ minWidth: "100px" }}>
                                    <div style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "var(--text-3xl)",
                                        fontWeight: "800",
                                        color: "var(--accent-600)",
                                        marginBottom: "var(--space-1)"
                                    }}>
                                        {stat.number}
                                    </div>
                                    <div style={{
                                        fontSize: "var(--text-sm)",
                                        color: "var(--primary-500)",
                                        fontWeight: "500"
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {/* Main Card - Academic Excellence */}
                        <div style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "550px"
                        }}>
                            {/* Decorative Background Elements */}
                            <div style={{
                                position: "absolute",
                                top: "-20px",
                                right: "-20px",
                                width: "200px",
                                height: "200px",
                                background: "var(--gradient-accent)",
                                opacity: "0.1",
                                borderRadius: "var(--radius-3xl)",
                                transform: "rotate(45deg)"
                            }}></div>

                            <div style={{
                                position: "absolute",
                                bottom: "-30px",
                                left: "-30px",
                                width: "150px",
                                height: "150px",
                                background: "var(--gradient-gold)",
                                opacity: "0.1",
                                borderRadius: "50%"
                            }}></div>

                            {/* Main Card */}
                            <div className="card" style={{
                                position: "relative",
                                zIndex: 2,
                                padding: "var(--space-10)",
                                background: "var(--white)",
                                border: "1px solid var(--primary-200)"
                            }}>
                                {/* Icon */}
                                <div style={{
                                    width: "80px",
                                    height: "80px",
                                    background: "var(--gradient-accent)",
                                    borderRadius: "var(--radius-xl)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "var(--space-6)",
                                    boxShadow: "var(--shadow-lg)"
                                }}>
                                    <FaGraduationCap style={{
                                        fontSize: "2.5rem",
                                        color: "var(--white)"
                                    }} />
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "var(--text-2xl)",
                                    fontWeight: "700",
                                    color: "var(--primary-900)",
                                    marginBottom: "var(--space-4)"
                                }}>
                                    Professional PhD Consultancy
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: "var(--text-base)",
                                    lineHeight: "1.7",
                                    color: "var(--primary-600)",
                                    marginBottom: "var(--space-6)"
                                }}>
                                    From topic selection to final publication, we provide comprehensive support
                                    for your entire research journey.
                                </p>

                                {/* Service Highlights */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "var(--space-4)"
                                }}>
                                    {[
                                        "Thesis Writing",
                                        "Journal Publication",
                                        "Data Analysis",
                                        "Methodology"
                                    ].map((service, index) => (
                                        <div key={index} style={{
                                            padding: "var(--space-4)",
                                            background: "var(--primary-50)",
                                            borderRadius: "var(--radius-lg)",
                                            fontSize: "var(--text-sm)",
                                            fontWeight: "600",
                                            color: "var(--primary-700)",
                                            textAlign: "center"
                                        }}>
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                    bottom: "var(--space-8)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    cursor: "pointer"
                }}
            >
                <Link to="about" smooth={true} duration={500}>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{
                            width: "30px",
                            height: "50px",
                            border: "2px solid var(--primary-400)",
                            borderRadius: "var(--radius-full)",
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "8px"
                        }}
                    >
                        <div style={{
                            width: "4px",
                            height: "8px",
                            background: "var(--accent-600)",
                            borderRadius: "var(--radius-full)"
                        }}></div>
                    </motion.div>
                    <p style={{
                        marginTop: "var(--space-2)",
                        fontSize: "var(--text-xs)",
                        color: "var(--primary-500)",
                        fontWeight: "500"
                    }}>
                        Scroll to explore
                    </p>
                </Link>
            </motion.div>
        </section>
    );
};

export default BeautifulHero;
