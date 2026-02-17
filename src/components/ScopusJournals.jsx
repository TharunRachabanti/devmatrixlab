import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";
import { FaAward, FaBookOpen, FaShieldAlt, FaHeadset, FaLock, FaSearch, FaFileAlt, FaEdit, FaEnvelopeOpenText, FaComments, FaCheckCircle } from "react-icons/fa";

const ScopusJournals = () => {
    return (
        <PageTemplate title="Scopus indexed journal" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/scopus_journal_hq.jpg">

            <section style={{ marginBottom: "60px", background: "#f8fdf9", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1100px", margin: "auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: "center", marginBottom: "50px" }}
                    >
                        <h2 style={{ fontSize: "2.4rem", color: "#006400", marginBottom: "15px", fontWeight: "bold" }}>Scopus Indexed Journal</h2>
                        <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.7", maxWidth: "900px", margin: "0 auto" }}>
                            <b>DevMatrixLab</b> helps scholars publish in <b>Scopus Indexed Journals</b> —
                            one of the world’s largest abstract and citation databases, indexing
                            <b> 36,000+ titles</b> across journals, books, and conferences.
                            We ensure your research gains global reach with quality, originality,
                            and compliance with editorial standards.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", md: { gridTemplateColumns: "1fr 1fr" }, gap: "50px" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: "1.6rem", color: "#2e8b57", marginBottom: "20px", fontWeight: "bold" }}>Our End-to-End Publication Support</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {[
                                    { title: "Literature Gap Analysis", desc: "Identify research gaps & highlight your unique contribution." },
                                    { title: "Manuscript Structuring", desc: "Organize IMRAD (Intro, Method, Results, Discussion) with clarity." },
                                    { title: "Formatting & References", desc: "Ensure compliance with journal styles & citation norms." },
                                    { title: "Submission Handling", desc: "Draft cover letters, upload metadata & manage portals." },
                                    { title: "Reviewer Response", desc: "Evidence-based revisions & resubmissions until acceptance." },
                                    { title: "Proof & Indexing", desc: "Correct galley proofs, DOI confirmation & Scopus indexing follow-up." }
                                ].map((item, i) => (
                                    <li key={i} style={{ background: "#fff", borderLeft: "5px solid #2e8b57", padding: "12px 18px", marginBottom: "12px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                                        <b>{item.title}</b> – {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: "1.6rem", color: "#2e8b57", marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}>Why Choose DevMatrixLab?</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                                {[
                                    { title: " Proven Experience", desc: "Hundreds of successful publications." },
                                    { title: " Scopus Expertise", desc: "Align your work with CiteScore, SNIP, SJR." },
                                    { title: " Zero Plagiarism", desc: "Turnitin/iThenticate checks." },
                                    { title: " 24×7 Support", desc: "Live updates via WhatsApp & email." },
                                    { title: " Secure & Confidential", desc: "Data encrypted & NDAs signed." }
                                ].map((box, i) => (
                                    <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px", textAlign: "center", boxShadow: "0 3px 8px rgba(0,0,0,0.08)" }}>
                                        <h4 style={{ color: "#006400", marginBottom: "8px", fontWeight: "bold" }}>✔{box.title}</h4>
                                        <p style={{ fontSize: "0.95rem", color: "#555" }}>{box.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", padding: "50px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "bold", color: "#006400", marginBottom: "40px" }}>🌟 Why Choose <span style={{ color: "#0A7DD9" }}>DevMatrixLab</span> for Scopus-Indexed Publication?</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginBottom: "60px" }}>
                        {[
                            { icon: FaAward, title: "Proven Track Record", desc: "With years of experience and hundreds of successful Scopus publications, we anticipate editorial expectations." },
                            { icon: FaBookOpen, title: "In-Depth Scopus Expertise", desc: "Our experts align your work with Scopus benchmarks—h-index, CiteScore, and SNIP." },
                            { icon: FaShieldAlt, title: "100% Plagiarism-Free", desc: "Every draft is checked with Turnitin/iThenticate for complete originality assurance." },
                            { icon: FaHeadset, title: "24/7 Live Support", desc: "Our specialists are available day or night through live chat, offering instant guidance." },
                            { icon: FaLock, title: "Secure & Confidential", desc: "Your research remains protected with encrypted storage and NDA protocols." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{ background: "#f9f9f9", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                            >
                                <card.icon style={{ fontSize: "28px", color: "#0A7DD9", marginBottom: "12px" }} />
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#006400", fontWeight: "600" }}>{card.title}</h3>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#555" }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ background: "#f0f6fb", padding: "50px 30px", borderRadius: "16px" }}>
                        <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "bold", color: "#006400", marginBottom: "40px" }}>📖 Our 6-Step <span style={{ color: "#0A7DD9" }}>Scopus Publication Process</span></h2>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
                            {[
                                { icon: FaSearch, title: "Target Journal Identification", desc: "We match your research scope and impact metrics to the most suitable Scopus-indexed journals." },
                                { icon: FaFileAlt, title: "Guideline Compliance", desc: "From headings to citations, we ensure full adherence to author instructions." },
                                { icon: FaEdit, title: "Manuscript Enhancement", desc: "We refine technical accuracy, grammar, flow, and optimize figures/tables for clarity." },
                                { icon: FaEnvelopeOpenText, title: "Cover Letter & Submission", desc: "Persuasive letters and complete portal handling ensure a seamless first submission." },
                                { icon: FaComments, title: "Reviewer Response", desc: "We draft clear, evidence-based replies to reviewer comments and refine manuscripts until acceptance." },
                                { icon: FaCheckCircle, title: "Tracking & DOI Confirmation", desc: "We handle proof corrections, monitor status, and confirm DOI assignment and indexing." }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    style={{ background: "#fff", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                >
                                    <card.icon style={{ fontSize: "28px", color: "#0A7DD9", marginBottom: "12px" }} />
                                    <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#006400", fontWeight: "600" }}>{card.title}</h3>
                                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#555" }}>{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default ScopusJournals;
