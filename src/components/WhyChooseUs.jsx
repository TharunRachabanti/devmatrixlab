import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie, FaUsers, FaAward, FaCertificate, FaRocket } from "react-icons/fa";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        let totalDuration = 2000;
        let incrementTime = (totalDuration / end) * 0.5;

        let timer = setInterval(() => {
            start += Math.ceil(end / 100);
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, 20);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}+</span>;
};

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: FaCertificate,
            title: "PhD Expertise You Can Trust",
            desc: "Precise, plagiarism-free content meeting university standards. Optimized for approval.",
            gradient: "var(--gradient-primary)"
        },
        {
            icon: FaRocket,
            title: "Smart Tech Solutions",
            desc: "Scalable, secure software for startups and researchers. From idea validation to deployment.",
            gradient: "var(--gradient-accent)"
        },
        {
            icon: FaAward,
            title: "10+ Years of Experience",
            desc: "A decade of results. Trusted by thousands for academic excellence and tech innovation.",
            gradient: "var(--gradient-primary)"
        },
        {
            icon: FaUsers,
            title: "End-to-End Support",
            desc: "From query to completion, our dedicated team is always available to guide you.",
            gradient: "var(--gradient-accent)"
        }
    ];

    const stats = [
        { icon: FaGraduationCap, count: "500", label: "Ph.D Awarded", color: "#6ab800" },
        { icon: FaUserTie, count: "128", label: "Ph.D Mentors", color: "#0a4d4e" },
        { icon: FaUsers, count: "1000", label: "Students Enrolled", color: "#1a7f7f" },
        { icon: FaCertificate, count: "30", label: "Departments", color: "#8dd000" }
    ];

    return (
        <section name="why-us" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--surface-light) 100%)" }}>
            <div className="section-padding container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>
                        Why Choose <span className="text-gradient">DevMatrixLab?</span>
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem",
                    marginBottom: "5rem"
                }}>
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="benefit-card"
                            style={{
                                background: "#fff",
                                padding: "2rem",
                                borderRadius: "var(--radius-lg)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--border-light)",
                                transition: "all var(--transition-normal)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "var(--radius-lg)",
                                background: item.gradient,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "1.5rem",
                                boxShadow: "var(--shadow-md)"
                            }}>
                                <item.icon style={{ fontSize: "2rem", color: "white" }} />
                            </div>

                            {/* Content */}
                            <h3 style={{
                                fontSize: "1.375rem",
                                marginBottom: "1rem",
                                color: "var(--heading-color)",
                                fontFamily: "var(--font-heading)"
                            }}>
                                {item.title}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div style={{ background: "linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)", padding: "4rem 0" }}>
                <div className="container" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "2rem"
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.15)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                padding: "2rem",
                                borderRadius: "var(--radius-lg)",
                                textAlign: "center",
                                border: "1px solid rgba(255, 255, 255, 0.2)"
                            }}
                        >
                            <stat.icon style={{
                                fontSize: "3rem",
                                color: "white",
                                marginBottom: "1rem",
                                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
                            }} />
                            <div style={{
                                fontSize: "2.75rem",
                                fontWeight: "800",
                                color: "white",
                                marginBottom: "0.5rem",
                                fontFamily: "var(--font-heading)"
                            }}>
                                <motion.div whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                    <Counter target={stat.count} />
                                </motion.div>
                            </div>
                            <p style={{
                                fontSize: "1.125rem",
                                color: "rgba(255, 255, 255, 0.95)",
                                fontWeight: "600"
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .benefit-card:hover {
                    box-shadow: var(--shadow-xl);
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;

