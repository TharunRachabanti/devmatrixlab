import React, { useState } from 'react';
import PageTemplate from './PageTemplate';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "AI & Machine Learning",
            image: "/imag/PROJECT1.jpg",
            description: "We design and develop advanced AI-driven solutions including chatbots, virtual assistants, recommendation engines, and predictive models."
        },
        {
            title: "B.Tech Projects",
            image: "/imag/PROJECT2.jpg",
            description: "End-to-end support for final year engineering projects across Computer Science, Electronics, Electrical, Mechanical, and Civil domains."
        },
        {
            title: "Degree Projects",
            image: "/imag/PROJECT3.jpg",
            description: "Comprehensive support for academic degree projects in Computer Science, Life Sciences, Management, Commerce, and Social Sciences."
        },
        {
            title: "Research Tools & Publications",
            image: "/imag/PROJECT4.jpg",
            description: "Expert guidance for publishing research papers in reputed journals (Scopus, SCI, IEEE) and developing research tools."
        },
        {
            title: "Data Science & Analytics",
            image: "/imag/PROJECT5.jpg",
            description: "Data-driven projects using Python, R, SQL, and ML to extract actionable insights from complex datasets."
        },
        {
            title: "IoT & Embedded Systems",
            image: "/imag/PROJECT6.jpg",
            description: "Smart IoT and embedded system projects using sensors, microcontrollers, Raspberry Pi, and Arduino with real-time monitoring."
        },
        {
            title: "Cloud & Cybersecurity",
            image: "/imag/PROJECT7.jpg",
            description: "Projects in cloud computing and cybersecurity covering architecture, virtualization, network security, and threat analysis."
        },
        {
            title: "Blockchain & Web3",
            image: "/imag/PROJECT8.jpg",
            description: "Advanced Blockchain and Web3 projects including smart contracts, dApps, NFTs, and secure ledger systems."
        }
    ];

    const faqs = [
        { q: "What kind of projects do you handle?", a: "We handle a wide range from AI & ML, IoT, Cloud, to academic B.Tech and Degree projects." },
        { q: "Can you help with documentation and reports?", a: "Yes! We provide complete support for documentation, reports, research papers, and presentations." },
        { q: "Are these projects suitable for final year students?", a: "Absolutely. Our projects are tailored to meet academic requirements and provide practical skills." },
        { q: "How long does it take to complete a project?", a: "Timelines vary. Simple projects take 2-3 weeks, while advanced ones may take 1-3 months." },
        { q: "Do you provide project source code and datasets?", a: "Yes, we provide complete source code, datasets, and configuration instructions." }
    ];

    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

    return (
        <PageTemplate title="Projects" subtitle="Projects Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/projects.jpg">

            <section className="section-padding" style={{ background: "var(--surface-light)" }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: "center", marginBottom: "3rem" }}
                    >
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "bold", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>
                            Our <span className="text-gradient">Projects</span>
                        </h2>
                        <p style={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            color: "var(--text-secondary)",
                            fontSize: "1.125rem",
                            lineHeight: "1.8",
                            background: "#fff",
                            padding: "clamp(1.25rem, 3vw, 1.75rem)",
                            borderRadius: "var(--radius-lg)",
                            boxShadow: "var(--shadow-md)",
                            border: "1px solid var(--border-light)"
                        }}>
                            At DevMatrixLab, we provide <b style={{ color: "var(--accent-color)" }}>end-to-end solutions</b> for academic, research, and professional projects.
                            Our expertise spans AI, Data Science, IoT, Cloud, and more. We guide you from idea conceptualization to final presentation.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                style={{
                                    background: "#fff",
                                    borderRadius: "var(--radius-lg)",
                                    overflow: "hidden",
                                    boxShadow: "var(--shadow-md)",
                                    cursor: "pointer",
                                    border: "1px solid var(--border-light)",
                                    transition: "all var(--transition-normal)"
                                }}
                                className="project-card"
                            >
                                <div style={{ overflow: "hidden" }}>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                    />
                                </div>
                                <div style={{ padding: "1.5rem" }}>
                                    <h3 style={{ fontSize: "1.375rem", marginBottom: "0.75rem", color: "var(--accent-color)", fontWeight: "700", fontFamily: "var(--font-heading)" }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: "#fff" }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: "center", marginBottom: "3rem" }}
                    >
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h2>
                        <p style={{ maxWidth: "700px", margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.125rem" }}>
                            Have questions? Check out our most common queries below.
                        </p>
                    </motion.div>

                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                style={{
                                    background: "#fff",
                                    borderRadius: "var(--radius-lg)",
                                    marginBottom: "1rem",
                                    overflow: "hidden",
                                    boxShadow: "var(--shadow-md)",
                                    border: "1px solid var(--border-light)"
                                }}
                            >
                                <div
                                    onClick={() => toggleFaq(i)}
                                    style={{
                                        padding: "1.25rem 1.5rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        fontSize: "1.0625rem",
                                        color: "var(--heading-color)",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        transition: "all var(--transition-fast)",
                                        background: openFaq === i ? "var(--surface-light)" : "transparent"
                                    }}
                                    className="faq-question"
                                >
                                    <span>{i + 1}. {faq.q}</span>
                                    <span style={{
                                        color: "var(--accent-color)",
                                        fontSize: "1.25rem",
                                        transition: "transform var(--transition-fast)",
                                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)"
                                    }}>
                                        {openFaq === i ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div style={{
                                                padding: "1.25rem 1.5rem",
                                                background: "var(--surface-light)",
                                                color: "var(--text-secondary)",
                                                lineHeight: "1.7",
                                                borderTop: "1px solid var(--border-light)"
                                            }}>
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .project-card:hover {
                    box-shadow: var(--shadow-xl);
                }
                .faq-question:hover {
                    background: var(--surface-light) !important;
                }
            `}</style>
        </PageTemplate>
    );
};

export default Projects;

