import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";
import { FaBookOpen, FaPenFancy, FaListAlt, FaEnvelopeOpenText, FaComments, FaCheckCircle } from "react-icons/fa";

const SCIJournals = () => {
    return (
        <PageTemplate title="SCI Indexed Journal" subtitle="PhD Consultancy in Hyderabad" bgImage="/imag/sci-indexed.jpg">

            <section style={{ marginBottom: "60px", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1000px", margin: "auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ textAlign: "center", fontSize: "2.2rem", color: "#3a9e2d", marginBottom: "20px", fontWeight: "bold" }}>SCI Indexed Journal Publication Support</h2>
                        <div style={{ width: "80px", height: "3px", background: "#3a9e2d", margin: "10px auto 30px", borderRadius: "5px" }}></div>
                        <p style={{ fontSize: "1.05rem", textAlign: "justify", lineHeight: "1.7", color: "#333", marginBottom: "20px" }}>
                            At <b>DevMatrixLab</b>, we understand the importance of publishing in prestigious <b>SCI Indexed Journals</b>.
                            These journals are globally recognized for maintaining the highest standards of research quality, citation
                            visibility, and credibility. Getting your work indexed in SCI not only validates its originality but also
                            strengthens your academic reputation and future opportunities.
                        </p>
                        <p style={{ fontSize: "1.05rem", textAlign: "justify", lineHeight: "1.7", color: "#333", marginBottom: "40px" }}>
                            Our dedicated publication experts guide you with SCI’s selection process, formatting requirements,
                            citation management, and review optimization to maximize the chances of acceptance and high impact.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gap: "40px" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: "1.6rem", color: "#3a9e2d", marginBottom: "15px", fontWeight: "bold" }}>Why Publish in an SCI Indexed Journal?</h3>
                            <div style={{ width: "60px", height: "3px", background: "#3a9e2d", marginBottom: "15px", borderRadius: "5px" }}></div>
                            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#333" }}>
                                Publish in SCI journals ensures your research gains worldwide visibility, credibility, and impact.
                                It accelerates your academic growth, attracts funding opportunities, enhances career prospects,
                                and positions you as a thought leader in your field.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: "1.6rem", color: "#3a9e2d", marginBottom: "15px", fontWeight: "bold" }}>Our SCI Publication Expertise</h3>
                            <div style={{ width: "60px", height: "3px", background: "#3a9e2d", marginBottom: "15px", borderRadius: "5px" }}></div>
                            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#333", marginBottom: "15px" }}>
                                At <b>DevMatrixLab</b>, we transform your research into a compelling, publication-ready manuscript.
                                From detailed literature gap analysis to structuring <b>Introduction, Methodology, Results, and Discussion</b>,
                                our editors ensure clarity, flow, and adherence to your target journal’s guidelines.
                            </p>
                            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#333" }}>
                                We also refine tables, figures, and references, along with drafting persuasive cover letters that highlight
                                your work’s novelty and importance, giving you a strong edge in SCI journal acceptance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "#f9f9f9", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", color: "#3a9e2d", marginBottom: "50px", fontWeight: "bold" }}>Our 6-Step SCI Publication Process</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                        {[
                            { icon: FaBookOpen, title: "Journal Selection & Scope Alignment", desc: "We evaluate impact factors, readership, and editorial scope to suggest the most suitable journals." },
                            { icon: FaPenFancy, title: "Manuscript Structuring & Drafting", desc: "Your research is shaped into a compelling narrative highlighting its novelty and importance." },
                            { icon: FaListAlt, title: "Formatting & Reference Management", desc: "Tables, figures, and references are formatted to journal-specific guidelines." },
                            { icon: FaEnvelopeOpenText, title: "Cover Letter & Submission Handling", desc: "A customized cover letter strengthens your submission while we handle portal submissions." },
                            { icon: FaComments, title: "Reviewer Response Coordination", desc: "We prepare professional, evidence-backed responses to reviewer feedback." },
                            { icon: FaCheckCircle, title: "Proof Correction & Indexing Follow-Up", desc: "From proof corrections to DOI assignment and indexing, we support your paper." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, boxShadow: "0 12px 18px rgba(0,0,0,0.12)" }}
                                style={{ background: "#fff", padding: "30px 25px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
                            >
                                <step.icon style={{ fontSize: "2rem", color: "#3a9e2d", marginBottom: "15px" }} />
                                <h3 style={{ fontSize: "1.4rem", color: "#3a9e2d", marginBottom: "12px", fontWeight: "600" }}>{step.title}</h3>
                                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default SCIJournals;
