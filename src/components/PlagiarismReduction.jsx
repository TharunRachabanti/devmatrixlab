import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRobot, FaPenFancy } from "react-icons/fa";

const PlagiarismReduction = () => {
    return (
        <PageTemplate title="Plagiarism Reduction Analysis" subtitle="Expert Solutions for AI-Free and Plagiarism-Free Research Writing" bgImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80">

            {/* Introduction Section */}
            <section style={{ marginBottom: "60px", background: "linear-gradient(135deg, #f0fdfa, #ecfdf5)", padding: "80px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: "2.5rem", color: "#0f766e", fontWeight: "700", marginBottom: "30px", fontFamily: "var(--font-heading)" }}
                    >
                        Ensure 100% Originality in Your Research
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333", textAlign: "justify", maxWidth: "1000px", margin: "0 auto" }}
                    >
                        <p style={{ marginBottom: "25px" }}>
                            Academic integrity is the cornerstone of credible research. Submitting a thesis or research paper with high levels of
                            <strong> plagiarism</strong> or <strong>AI-generated traces</strong> can lead to rejection and damage your academic reputation.
                            Our specialized Plagiarism Reduction services ensure your work is authentic, original, and adheres to the highest ethical standards.
                        </p>
                        <p>
                            We go beyond simple paraphrasing. Our team of expert editors and subject matter experts meticulously reviews your document to reduce similarity scores
                            effectively while preserving your original ideas and voice. Whether it's traditional text similarity or modern AI/bot detection, we have the tailored solutions you need.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Plagiarism Reduction Section */}
            <section style={{ marginBottom: "60px", padding: "50px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                            alt="AI Plagiarism Detection"
                            style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ background: "#d1fae5", padding: "12px", borderRadius: "12px", color: "#059669" }}>
                                <FaRobot size={24} />
                            </div>
                            <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#064e3b", margin: 0 }}>AI Plagiarism Reduction</h2>
                        </div>

                        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#555", lineHeight: "1.8", textAlign: "justify" }}>
                            With the rise of AI tools, universities are now using advanced detectors like Turnitin and GPTZero to flag AI-generated content.
                            Our service helps you <strong>humanize</strong> your text. We manually rewrite and restructure AI-generated sections to ensure they flow naturally and bypass AI detection algorithms completely.
                        </p>

                        <div style={{ background: "#ecfdf5", padding: "30px", borderRadius: "16px", border: "1px solid #a7f3d0" }}>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#047857", marginBottom: "15px" }}>Why choose this?</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#065f46" }}>
                                    <FaCheckCircle /> Removes "Robot-like" phrasing
                                </li>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#065f46" }}>
                                    <FaCheckCircle /> Improves sentence variance and variety
                                </li>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#065f46" }}>
                                    <FaCheckCircle /> Ensures 100% Human Score on detectors
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#065f46" }}>
                                    <FaCheckCircle /> Enhances depth and critical analysis
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Normal Plagiarism Reduction Section */}
            <section style={{ marginBottom: "60px", padding: "50px 20px", background: "#f8fafc" }}>
                <div style={{ maxWidth: "1200px", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ order: 2 }} // On desktop text comes first
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ background: "#dcfce7", padding: "12px", borderRadius: "12px", color: "#166534" }}>
                                <FaPenFancy size={24} />
                            </div>
                            <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#064e3b", margin: 0 }}>Normal Plagiarism Reduction</h2>
                        </div>

                        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#555", lineHeight: "1.8", textAlign: "justify" }}>
                            Traditional plagiarism occurs when text is copied directly from sources without proper paraphrasing or citation.
                            Our experts meticulously rewrite content to lower similarity indices (Turnitin/iThenticate) below university acceptable limits (usually &lt;10%).
                        </p>

                        <div style={{ background: "#f0fdf4", padding: "30px", borderRadius: "16px", border: "1px solid #bbf7d0" }}>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#14532d", marginBottom: "15px" }}>Our Approach</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#14532d" }}>
                                    <FaCheckCircle /> Sentence structure restructuring
                                </li>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#14532d" }}>
                                    <FaCheckCircle /> Advanced vocabulary enhancement
                                </li>
                                <li style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "#14532d" }}>
                                    <FaCheckCircle /> Proper citation and referencing
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#14532d" }}>
                                    <FaCheckCircle /> Technical consistency maintenance
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ order: 1 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80"
                            alt="Manual Editing and Writing"
                            style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        />
                    </motion.div>
                </div>
            </section>
        </PageTemplate>
    );
};

export default PlagiarismReduction;
