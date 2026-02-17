import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const JournalPublication = () => {
    return (
        <PageTemplate title="Journal Paper Publication" subtitle="SCI & Scopus Indexed | Peer-Reviewed | End-to-End Publication Support" bgImage="/imag/journal_publication_hq.jpg">

            <section style={{ marginBottom: "60px", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#6ab800", fontWeight: "bold" }}>Journal Paper Publication Services by DevMatrixLab</h2>
                        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 40px", lineHeight: "1.6", color: "#555" }}>
                            Turning your research into a published paper is more than having strong results—it's about presenting your work with clarity, precision, and in line with journal requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ textAlign: "justify", fontSize: "1.1rem", color: "#444", lineHeight: "1.7" }}
                    >
                        <h3 style={{ fontSize: "2rem", color: "#6ab800", marginBottom: "20px", textAlign: "center" }}>Why Publish with DevMatrixLab?</h3>
                        <p style={{ marginBottom: "15px" }}>
                            At DevMatrixLab, we assist you throughout the entire publication journey, ensuring your manuscript meets global quality standards and attracts reviewers' attention.
                        </p>
                        <p style={{ marginBottom: "15px" }}>
                            Our services are designed for PhD scholars, researchers, and academicians looking for a seamless and stress-free publishing process. From topic selection and drafting to editing and final submission—we’ve got you covered.
                        </p>
                        <p style={{ marginBottom: "15px" }}>
                            We also provide thesis-to-article conversion, transforming your dissertation into a concise, impactful research paper. Our experienced consultants specialize in formatting, proofreading, and compliance for Scopus, SCI, IEEE, and other reputed journals.
                        </p>
                        <p>
                            Don’t struggle alone—professional guidance saves time and maximizes your chances of acceptance. DevMatrixLab offers affordable, high-quality publication support tailored to your research goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "linear-gradient(135deg, #f0fdfa, #ecfeff)", padding: "70px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "700", color: "#0f766e", marginBottom: "50px" }}>Our Full-Range Publication Support</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "35px" }}>
                        {[
                            { title: "Writing", desc: "Our team develops clear, well-structured manuscripts that reflect your research objectives and follow the exact requirements of your target journal." },
                            { title: "Review & Checking", desc: "We carefully review every section to spot gaps in reasoning, factual errors, and weak arguments. Our experts provide constructive feedback." },
                            { title: "Language Polishing", desc: "We refine your manuscript for grammar, fluency, and academic tone. Complex sentences are simplified for better readability while retaining technical accuracy." },
                            { title: "Formatting", desc: "From citation styles to figure alignment, our formatting experts ensure your paper strictly adheres to journal submission guidelines." },
                            { title: "Final Prep", desc: "Before submission, we conduct plagiarism checks, grammar scans, and completeness reviews. This ensures your paper is submission-ready." },
                            { title: "Submission Management", desc: "We help you identify the right journal, prepare professional cover letters, and monitor the manuscript tracking system." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -12, scale: 1.03, boxShadow: "0 10px 22px rgba(0,0,0,0.15)" }}
                                style={{ background: "#fff", padding: "30px 25px", borderRadius: "16px", boxShadow: "0 6px 16px rgba(0,0,0,0.1)", cursor: "pointer" }}
                            >
                                <h3 style={{ fontSize: "1.4rem", color: "#0d9488", marginBottom: "15px", fontWeight: "600" }}>{item.title}</h3>
                                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Simplifying Every Stage of Publication</h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "40px" }}>
                        Academic publishing often feels overwhelming — strict deadlines, multiple revisions, formatting guidelines, and plagiarism checks can make the journey stressful. At <strong>DevMatrixLab</strong>, our expert editors from diverse disciplines ensure your research gets the guidance it deserves. We stand beside you at every step until your work reaches the right journal.
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "30px", marginBottom: "60px" }}>
                        {[
                            { count: "13,500+", label: "Total Publications" },
                            { count: "6,000+", label: "SCI-Indexed Papers" },
                            { count: "13,000+", label: "Satisfied Scholars" }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <h3 style={{ fontSize: "2.5rem", color: "#7ab800", fontWeight: "bold", marginBottom: "10px" }}>{stat.count}</h3>
                                <p style={{ fontSize: "1.2rem", color: "#333", fontWeight: "600" }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: "#f4f4f4", padding: "50px", borderRadius: "16px" }}>
                        <h2 style={{ fontSize: "2rem", color: "#6bb800", marginBottom: "30px", fontWeight: "bold" }}>Why Choose DevMatrixLab?</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px", textAlign: "left" }}>
                            {[
                                "Manuscript structuring and formatting",
                                "Plagiarism screening and correction",
                                "Strategic journal selection",
                                "Submission support and author registration",
                                "Reviewer response drafting & revision guidance",
                                "Peer review mentoring for PhD scholars",
                                "Continuous submission tracking until approval"
                            ].map((item, i) => (
                                <div key={i} style={{ background: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)", fontWeight: "500", color: "#444" }}>
                                    ✅ {item}
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: "30px", fontSize: "1.1rem", color: "#333" }}>
                            At DevMatrixLab, we don’t just support your research — we transform it into a <strong>published reality</strong>. Partner with us today and take your first confident step toward journal success!
                        </p>
                    </div>

                </div>
            </section>

        </PageTemplate>
    );
};

export default JournalPublication;
