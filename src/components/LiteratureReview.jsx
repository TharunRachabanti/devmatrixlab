import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const LiteratureReview = () => {
    return (
        <PageTemplate title="Literature Review Service" subtitle="PhD Consultancy in Hyderabad" bgImage="/imag/Literature review ser.png">

            <section style={{ marginBottom: "60px", background: "linear-gradient(135deg, #f4f9f8, #eafaf7)", padding: "60px 20px", borderRadius: "12px" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.4rem", fontWeight: "700", color: "#008080", marginBottom: "50px", letterSpacing: "1px" }}>Literature Review Services</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {[
                        { title: "Why Literature Review is Crucial", desc: "Ever wondered why over 70% of academic research projects begin with a well-structured literature review? A literature review not only summarizes past work but also highlights gaps, compares findings, and sets the stage for your own research direction. It’s the roadmap that connects your study with existing knowledge." },
                        { title: "Tailored Expert Support", desc: "At DevMatrixLab, we simplify the entire process—selecting credible sources, organizing ideas, and building a clear narrative. Our experts ensure your literature review is tailored to your domain, whether you're working on a thesis, dissertation, or journal paper. You get structured, insightful content that reflects both depth and clarity." },
                        { title: "Focus on Academic Excellence", desc: "We also emphasize critical aspects like conceptual and theoretical frameworks, annotated bibliographies, gap identification, and reference collection. Every element is carefully crafted to align with your research goals and academic standards, making your work truly stand out." },
                        { title: "Get Professional Assistance", desc: "“Looking for expert help with your literature review?” Connect with our team to ensure your academic research is thorough, structured, and publication-ready." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.03, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "15px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "12px", color: "#00796b" }}>{item.title}</h3>
                            <p style={{ color: "#444", lineHeight: "1.7", fontSize: "1rem", textAlign: "justify", textJustify: "inter-word" }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "#f4f9f8", padding: "60px 20px", borderRadius: "12px" }}>
                <div style={{ maxWidth: "1100px", margin: "auto" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2e7d32", textAlign: "center", marginBottom: "30px" }}>Key Elements In A <span style={{ color: "#008080" }}>Literature Review</span></h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", textAlign: "center", marginBottom: "50px" }}>
                        {["Conceptual Framework", "Theoretical Framework", "References Collection", "Gap Identification", "Annotated Bibliography", "Theorem Development"].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
                                style={{ background: "#fff", padding: "18px 12px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)", fontWeight: "500", color: "#444" }}>
                                🌿 {item}
                            </motion.div>
                        ))}
                    </div>

                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2e7d32", textAlign: "center", marginBottom: "30px", marginTop: "40px" }}>Why Choosing A Professional For <span style={{ color: "#008080" }}>Literature Review</span> Is A Smart Move</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
                        {[
                            { title: "Access to Reliable Sources", desc: "Skilled writers know how to locate credible, peer-reviewed articles relevant to your topic. This not only saves valuable time but also guarantees your review rests on trustworthy research." },
                            { title: "Clear and Organized Writing", desc: "Professionals structure the review logically—categorizing studies, highlighting trends, and building a strong narrative that supports your research goals." },
                            { title: "Identifying Research Gaps", desc: "Experts are trained to detect overlooked areas and inconsistencies in prior work, helping you establish a solid rationale for your study and emphasize its uniqueness." },
                            { title: "Accurate Referencing and Formal Style", desc: "A professional ensures all sources are properly cited while maintaining an academic tone, reducing plagiarism risks and strengthening the authority of your paper." },
                            { title: "Time-Saving and Stress-Free", desc: "Balancing deadlines and coursework can be overwhelming—outsourcing your literature review allows you to focus on other priorities while ensuring top-quality work." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)" }}
                            >
                                <h3 style={{ fontSize: "1.2rem", color: "#00796b", marginBottom: "8px" }}>{item.title}</h3>
                                <p style={{ fontSize: "1rem", color: "#444", lineHeight: "1.6" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default LiteratureReview;
