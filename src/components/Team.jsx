import React from "react";
import { motion } from "framer-motion";

const Team = () => {
    const teamMembers = [
        { name: "Dr. A. Kumar", role: "PhD Mentor", gradient: "var(--gradient-primary)" },
        { name: "Neha", role: "Research Analyst", gradient: "var(--gradient-accent)" },
        { name: "Rahul Verma", role: "Software Engineer", gradient: "var(--gradient-primary)" },
        { name: "Tharun.R", role: "Academic Consultant", gradient: "var(--gradient-accent)" },
    ];

    return (
        <section name="team" className="section-padding" style={{ background: "var(--surface-light)" }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>
                        Our <span className="text-gradient">Team</span>
                    </h2>
                </motion.div>

                {/* Legacy Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: "#ffffff",
                        padding: "clamp(2rem, 4vw, 3rem)",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-lg)",
                        border: "1px solid var(--border-light)",
                        lineHeight: "1.8",
                        marginBottom: "4rem",
                        maxWidth: "1000px",
                        margin: "0 auto 4rem"
                    }}
                >
                    <h3 style={{
                        fontSize: "1.8rem",
                        color: "var(--heading-color)",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                        fontFamily: "var(--font-heading)"
                    }}>
                        Our Legacy
                    </h3>
                    <p style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                        Our team is the heartbeat of <b style={{ color: "var(--accent-color)" }}>DevMatrixLab</b> — a powerful blend of expertise from <strong>research</strong>, <strong>technology</strong>, and <strong>academic consulting</strong>.
                    </p>
                    <p style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                        We consist of <strong>PhD mentors</strong>, <strong>research analysts</strong>, and <strong>software engineers</strong>, each bringing years of experience and an unwavering commitment to excellence.
                    </p>
                    <p style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                        Our PhD experts guide scholars with clarity, structure, and academic precision, while our developers create <strong>scalable, intelligent solutions</strong> using the latest technologies.
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                        <b style={{ color: "var(--accent-color)" }}>Trust, transparency, and teamwork</b> are the values that define us. With passion and purpose, we deliver results that truly matter.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "2rem"
                }}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="team-card"
                            style={{
                                background: "#fff",
                                padding: "2rem",
                                borderRadius: "var(--radius-lg)",
                                textAlign: "center",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--border-light)",
                                transition: "all var(--transition-normal)",
                                cursor: "pointer"
                            }}
                        >
                            {/* Avatar with Gradient Background */}
                            <div style={{
                                width: "120px",
                                height: "120px",
                                borderRadius: "50%",
                                background: member.gradient,
                                margin: "0 auto 1.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                fontFamily: "var(--font-heading)",
                                boxShadow: "var(--shadow-lg)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                {/* Shimmer Effect */}
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "100%",
                                    height: "100%",
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                    animation: "shimmer 3s infinite"
                                }}></div>
                                <span style={{ position: "relative", zIndex: 1 }}>
                                    {member.name.charAt(0)}
                                </span>
                            </div>

                            {/* Name */}
                            <h3 style={{
                                color: "var(--accent-color)",
                                marginBottom: "0.5rem",
                                fontSize: "1.375rem",
                                fontFamily: "var(--font-heading)"
                            }}>
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p style={{
                                color: "var(--text-secondary)",
                                fontSize: "1rem",
                                fontWeight: "500"
                            }}>
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Team;
