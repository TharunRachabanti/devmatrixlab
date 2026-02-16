import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const ResearchTopics = () => {
    return (
        <PageTemplate title="Research Topics" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/research topics dp.jpg">

            <section style={{ padding: "40px 20px", background: "#f9fdfb", lineHeight: "1.6", color: "#333" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h1 style={{ textAlign: "center", color: "#2e7d32", fontSize: "2.5rem", marginBottom: "20px", fontWeight: "bold" }}>Research Paper Writing Guidelines</h1>
                    <p style={{ fontSize: "1rem", textAlign: "justify", marginBottom: "15px" }}>
                        Selecting a suitable <span style={{ color: "#2e7d32", fontWeight: "bold" }}>PhD research topic</span> can often be a challenging task. Since it marks the beginning of an academic journey, the process requires more than just time—it demands clarity, originality, and relevance. Many scholars find it stressful and overwhelming to identify a unique and well-researched topic that aligns with their dissertation goals.
                    </p>
                    <p style={{ fontSize: "1rem", textAlign: "justify", marginBottom: "15px" }}>
                        At <span style={{ color: "#2e7d32", fontWeight: "bold" }}>DevMatrixLab</span>, we provide expert assistance to help you select impactful research topics tailored to your field of study.
                    </p>

                    <h2 style={{ color: "#388e3c", marginTop: "30px", borderLeft: "5px solid #2e7d32", paddingLeft: "10px", fontSize: "1.6rem", fontWeight: "bold" }}>Specialized Areas We Cover</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
                        {[
                            "PhD Topics in Social Work Studies", "PhD Topics in Economics", "PhD Topics in Marketing & Finance",
                            "PhD Topics in Psychology & Education", "PhD Topics in Nursing & Medical Sciences", "PhD Topics in Computer Science & Engineering",
                            "PhD Topics in Sociology & Microbiology", "PhD Topics in Business Management", "PhD Topics in Civil Engineering"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", fontWeight: "bold", textAlign: "center", color: "#2e7d32" }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ marginTop: "40px", textAlign: "center", fontSize: "0.9rem", color: "#555" }}>
                        We have <span style={{ color: "#2e7d32", fontWeight: "bold" }}>600+ experienced experts</span> at DevMatrixLab to guide your PhD journey with originality, depth, and academic excellence.
                    </div>
                </div>
            </section>

            <section style={{ padding: "50px 20px", background: "#f9fdfb", lineHeight: "1.6", color: "#333" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h1 style={{ textAlign: "center", color: "#2e7d32", fontSize: "2.3rem", marginBottom: "10px", fontWeight: "bold" }}>PhD Research Proposal Guidelines</h1>
                    <h2 style={{ color: "#388e3c", marginTop: "30px", fontSize: "1.6rem", borderLeft: "5px solid #2e7d32", paddingLeft: "12px", fontWeight: "bold" }}>Important Steps for PhD Topics</h2>
                    <ul style={{ margin: "20px 0", padding: "0 25px" }}>
                        {[
                            "Title Page", "Topic of Research", "Overview of a Scientific Research Paper", "Problem Formulation / Statement",
                            "Abstract / Objective Statement of the Proposal", "Literature / Related Works (15–20 papers)", "Background & Methodical Approach",
                            "Research Methodology", "Pseudo Code / Algorithm", "Mathematical Equation", "Delimitations of the Study",
                            "Significance of the Study", "Place of Research / Study", "Timeline for Various Stages", "Selective Research Bibliography"
                        ].map((step, i) => (
                            <li key={i} style={{ margin: "10px 0", fontSize: "1rem" }}>{step}</li>
                        ))}
                    </ul>

                    <h2 style={{ color: "#388e3c", marginTop: "30px", fontSize: "1.6rem", borderLeft: "5px solid #2e7d32", paddingLeft: "12px", fontWeight: "bold" }}>Why Choose Us?</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "30px" }}>
                        {[
                            "1000+ Research Topics", "100% Confidential", "Skilled Resource Team", "Plagiarism-Free Work",
                            "Novel Ideas", "In-Depth Research", "On-Time Delivery"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)", textAlign: "center", fontSize: "1rem", fontWeight: "bold", color: "#2e7d32" }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "60px 20px", background: "linear-gradient(135deg, #eef2f3, #d9e4f5)", textAlign: "center" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2e7d32", marginBottom: "15px" }}>🌟 Our Research Expertise</h2>
                    <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 40px", color: "#444", lineHeight: "1.6" }}>
                        At <span style={{ color: "#2e7d32", fontWeight: "600" }}>DevMatrixLab</span>, our team of experts specializes in diverse research areas across
                        <b> computer science, engineering, and emerging technologies</b>. We provide end-to-end guidance
                        to ensure your research is <b>novel, impactful, and globally recognized</b>.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginBottom: "50px" }}>
                        {[
                            { title: "Artificial Intelligence & Machine Learning", desc: "Neural Networks, Pattern Recognition, Deep Learning" },
                            { title: "Data Science & Big Data", desc: "Data Mining, Analytics, MapReduce" },
                            { title: "Networking & Communication", desc: "Wireless Networks, Mobile Networking, Cloud Computing" },
                            { title: "Cybersecurity & Forensics", desc: "Digital Forensics, Cyber Security, Secure Computing" },
                            { title: "Multimedia & Graphics", desc: "Video Streaming, Image Processing, Biomedical Imaging" },
                            { title: "Emerging Technologies", desc: "IoT, Augmented Reality, Brain-Computer Interfaces" },
                            { title: "Software Engineering", desc: "Software Re-Engineering, Ubiquitous & Service Computing" }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, boxShadow: "0px 10px 18px rgba(0,0,0,0.15)", background: "#f0f6ff" }}
                                style={{ background: "#ffffff", padding: "25px", borderRadius: "15px", boxShadow: "0px 6px 12px rgba(0,0,0,0.1)", fontSize: "1.1rem", fontWeight: "600", color: "#2e7d32" }}
                            >
                                {card.title}<br /><span style={{ display: "block", marginTop: "10px", fontSize: "0.95rem", fontWeight: "400", color: "#555" }}>{card.desc}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default ResearchTopics;
