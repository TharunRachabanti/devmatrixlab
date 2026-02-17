import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const Proofreading = () => {
    return (
        <PageTemplate title="Proofreading Service" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/proofreading_hq.jpg">

            <section style={{ marginBottom: "60px", background: "#f9fdfc", padding: "60px 20px", borderRadius: "12px" }}>
                <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "40px" }}>Why Choose <span style={{ color: "#009688" }}>Professional Proofreading?</span></h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                    {[
                        { title: "Perfect Grammar and Language Clarity", desc: "Refining grammar, punctuation, and sentence flow is essential for clear academic communication. A professional proofreader ensures your writing is free from errors that can distract or mislead readers." },
                        { title: "Consistency in Formatting and Style", desc: "Even small inconsistencies in formatting or citation styles can lower overall quality. A skilled proofreader ensures consistency in structure, reference formatting, and style throughout your document." },
                        { title: "Improved Academic Credibility", desc: "When you’re too close to your writing, it’s easy to overlook small errors. A professional proofreader provides an objective eye so you can focus on your ideas while they fine-tune the details." },
                        { title: "Support for ESL and Native Writers", desc: "Whether you’re a non-native speaker or an experienced academic, proofreading ensures your writing meets the highest scholarly standards, regardless of your background." },
                        { title: "Proofreading", desc: "Our service corrects spelling, grammar, punctuation, and formatting issues to ensure your academic work is polished and error-free. Every document is reviewed with precision to meet scholarly standards." },
                        { title: "Editing", desc: "Our editing services go beyond basic corrections—improving sentence flow, structure, and overall clarity. We refine arguments, strengthen coherence, and adjust tone for a polished and persuasive document." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "10px", color: "#00796b" }}>{item.title}</h3>
                            <p style={{ color: "#444", lineHeight: "1.6", fontSize: "0.95rem" }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "#f9f9f9", padding: "60px 20px", borderRadius: "12px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "40px", color: "#333" }}>Why <span style={{ color: "#4CAF50" }}>DevMatrixLab</span> is the Right Partner for Your Proofreading Needs</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
                    {[
                        { title: "Expert-Driven Accuracy", desc: "At DevMatrixLab, every document is reviewed by academic experts. Your work is refined for clarity, consistency, and academic excellence." },
                        { title: "Customized for Scholars & Researchers", desc: "We tailor proofreading for research articles, dissertations, and theses. Your unique voice remains intact—only sharper and more polished." },
                        { title: "On-Time, Every Time", desc: "Deadlines matter. DevMatrixLab ensures timely delivery without compromising quality, keeping you stress-free." },
                        { title: "Clear & Supportive Communication", desc: "We keep you updated, provide helpful feedback, and make the process smooth and supportive from start to finish." },
                        { title: "Trusted by Scholars Worldwide", desc: "Thousands of researchers trust DevMatrixLab because we consistently deliver polished, credible, and impactful results." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)", textAlign: "left" }}
                        >
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#222" }}>{item.title}</h3>
                            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: "50px", fontSize: "1.2rem", fontStyle: "italic", color: "#4CAF50", borderLeft: "4px solid #4CAF50", paddingLeft: "15px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    <p>“Work with DevMatrixLab and take the final step toward flawless, publication-ready writing.”</p>
                </div>
            </section>

            <section style={{ background: "#f4fdf6", padding: "80px 20px", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "1100px", width: "100%", textAlign: "left" }}>
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", color: "#2e7d32", fontWeight: "bold" }}>Proofreading Service</h2>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                        Did you know that nearly half of academic manuscripts face rejection due to language or formatting issues?
                        The final safeguard is professional proofreading — ensuring clarity, accuracy, and a polished finish.
                        At <strong>DevMatrixLab</strong>, we specialize in refining theses, research papers, and dissertations by correcting grammar,
                        structure, and formatting so your submission is flawless.
                    </p>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                        Our PhD-level proofreading is designed for scholars, researchers, professors, and postgraduate students.
                        Whether your document is a dissertation, LaTeX manuscript, or scientific paper, our editors apply technical precision
                        and consistency. With attention to grammar and formatting accuracy, we support academic excellence across disciplines.
                    </p>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                        What makes <strong>DevMatrixLab</strong> unique is our editorial approach: we don’t just fix mistakes, we elevate your writing.
                        From improving clarity and tone to enhancing structure, our proofreading adds value at every level.
                        Partner with DevMatrixLab to submit your work with confidence and professionalism.
                    </p>
                    <blockquote style={{ fontStyle: "italic", fontWeight: "bold", color: "#2e7d32", fontSize: "1.2rem", borderLeft: "4px solid #2e7d32", paddingLeft: "15px", marginTop: "30px" }}>
                        “Elevate Your Thesis with Precision Proofreading by DevMatrixLab”
                    </blockquote>
                </div>
            </section>

        </PageTemplate>
    );
};

export default Proofreading;
