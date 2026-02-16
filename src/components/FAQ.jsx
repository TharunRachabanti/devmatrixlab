import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            category: "PhD Support",
            items: [
                { q: "Can DevMatrixLab help write my PhD thesis?", a: "Yes, we offer comprehensive guidance, writing support, and publication assistance for PhD research with expert mentorship throughout your journey." },
                { q: "How much does PhD research support cost?", a: "Pricing depends on topic complexity, timeline, and specific services required. Contact us for a personalized quote tailored to your needs." },
                { q: "Do you provide editing and proofreading?", a: "Absolutely! We ensure your thesis is polished, technically sound, error-free, and ready for submission with our expert editing services." }
            ]
        },
        {
            category: "PhD Consultancy",
            items: [
                { q: "Do you help with journal publications?", a: "Yes, we provide complete assistance in publishing research papers in reputed Scopus, SCI, IEEE and UGC-approved journals." },
                { q: "Can you support scholars from different domains?", a: "Absolutely! Our PhD mentors and research analysts guide scholars across engineering, life sciences, management, and various other domains." },
                { q: "Do you provide end-to-end support?", a: "Yes, from research proposal to defense preparation, we provide comprehensive, structured, plagiarism-free support for your entire PhD journey." }
            ]
        },
        {
            category: "Additional Services",
            items: [
                { q: "What services do you offer besides thesis writing?", a: "We provide topic selection, literature review, methodology development, data analysis, implementation, and journal publication support." },
                { q: "Do you offer custom solutions for my research?", a: "Yes, all our services are tailored to your specific research goals, whether for academic advancement or professional development." }
            ]
        }
    ];

    const toggle = (i) => {
        if (activeIndex === i) {
            return setActiveIndex(null);
        }
        setActiveIndex(i);
    };

    let globalIndex = 0;

    return (
        <section className="section-padding" style={{ background: "linear-gradient(180deg, var(--surface-light) 0%, #ffffff 100%)" }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        marginBottom: "1rem",
                        fontFamily: "var(--font-heading)",
                        color: "var(--heading-color)"
                    }}>
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        color: "var(--text-secondary)",
                        fontSize: "1.1rem",
                        lineHeight: "1.7"
                    }}>
                        Clear your doubts about PhD support, consultancy, and our comprehensive services
                    </p>
                </motion.div>

                {/* FAQ Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
                    gap: "2rem",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    {questions.map((col, colIndex) => (
                        <motion.div
                            key={colIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <h3 style={{
                                marginBottom: "1.5rem",
                                color: "var(--accent-color)",
                                fontFamily: "var(--font-heading)",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                borderBottom: "3px solid var(--highlight-color)",
                                paddingBottom: "0.75rem",
                                display: "inline-block",
                                width: "100%"
                            }}>
                                {col.category}
                            </h3>

                            {/* Question Items */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {col.items.map((item, index) => {
                                    const currentIndex = globalIndex++;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -2 }}
                                            onClick={() => toggle(currentIndex)}
                                            style={{
                                                background: "white",
                                                borderRadius: "var(--radius-lg)",
                                                boxShadow: "var(--shadow-md)",
                                                cursor: "pointer",
                                                overflow: "hidden",
                                                border: "1px solid var(--border-light)",
                                                transition: "all var(--transition-normal)"
                                            }}
                                        >
                                            {/* Question */}
                                            <div style={{
                                                padding: "1.5rem",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                gap: "1rem",
                                                color: activeIndex === currentIndex ? "var(--accent-color)" : "var(--heading-color)",
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                lineHeight: "1.5"
                                            }}>
                                                <span>{item.q}</span>
                                                <span style={{
                                                    fontSize: "1rem",
                                                    color: activeIndex === currentIndex ? "var(--highlight-color)" : "var(--accent-color)",
                                                    flexShrink: 0,
                                                    transition: "all var(--transition-fast)"
                                                }}>
                                                    {activeIndex === currentIndex ? <FaMinus /> : <FaPlus />}
                                                </span>
                                            </div>

                                            {/* Answer */}
                                            <AnimatePresence>
                                                {activeIndex === currentIndex && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        style={{ overflow: "hidden" }}
                                                    >
                                                        <div style={{
                                                            padding: "0 1.5rem 1.5rem",
                                                            color: "var(--text-secondary)",
                                                            lineHeight: "1.7",
                                                            fontSize: "0.95rem"
                                                        }}>
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
