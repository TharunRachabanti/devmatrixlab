import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const Methodology = () => {
    return (
        <PageTemplate
            title="Research Methodology"
            subtitle="PhD Consultancy in Hyderabad"
            bgImage="/imag/methodology_header_hq.jpg"
            metaDesc="Expert Research Methodology services for PhD students. Qualitative, Quantitative, and Mixed Methods support in Hyderabad."
            keywords="Research Methodology, PhD Research, Data Analysis, Qualitative Research, Quantitative Research, Hyderabad, Thesis Methodology"
        >

            <section style={{ marginBottom: "60px", padding: "50px 20px" }}>
                <div style={{ maxWidth: "1150px", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a7b42", marginBottom: "20px" }}>What Is Research Methodology & Why It Matters In Academic Research</h2>
                        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px", lineHeight: "1.6" }}>
                            Research methodology is the structured plan that explains <b>what you’re studying, how you’ll study it, and why</b> you’ve selected a specific approach. Whether qualitative, quantitative, or mixed methods, a well-defined methodology ensures academic integrity and reliability.
                        </p>
                        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px", lineHeight: "1.6" }}>
                            A strong methodology defines the research problem, objectives, data collection process, and reasoning behind chosen methods. This improves <b>clarity, transparency, and trustworthiness</b>, helping readers evaluate the value of your findings.
                        </p>
                        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px", lineHeight: "1.6" }}>
                            In academia, methodology acts as a <b>blueprint</b>—it connects your ideas, directs your investigation strategies, and reinforces your conclusions. Overlooking this crucial step often results in weak arguments and flawed outcomes.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/imag/methodology_research_hq.jpg" alt="Research Methodology" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.08)" }} />
                    </motion.div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "#f9fdfc", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1150px", margin: "auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#1a7b42", marginBottom: "40px" }}>Why You Should Hire Professionals For Your Research Methodology</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start" }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/imag/methodology_professional_hq.jpg" alt="Hire Research Methodology Experts" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.08)" }} />
                        </motion.div>

                        <div style={{ display: "grid", gap: "25px" }}>
                            {[
                                { title: "Expert Understanding of Research Designs", desc: "PhD-level specialists bring years of academic and subject expertise. They carefully assess your work for accuracy, depth, and alignment with the latest research practices." },
                                { title: "Tailored Review Structure", desc: "Experts are skilled in qualitative, quantitative, and mixed-method approaches. They guide you in selecting the right design, ensuring your study remains logically and academically strong." },
                                { title: "Custom Methodology Aligned with Objectives", desc: "Professionals adapt your methodology to your specific research questions and goals. This ensures clarity, focus, and proper alignment between your problem statement, hypothesis, and chosen methods." },
                                { title: "Error-Free, Journal-Ready Formatting", desc: "Your methodology chapter is formatted to meet strict university and journal standards. From structure to references, everything is precise and compliant." },
                                { title: "Guidance on Tools, Techniques & Implementation", desc: "From SPSS and NVivo to MATLAB and Python, professionals provide technical support and explain why specific tools fit best with your research design." },
                                { title: "Saves Time & Boosts Approval Chances", desc: "Expert guidance reduces workload and increases the likelihood of faster supervisor or journal approval. A professionally crafted methodology reflects academic competence and readiness." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <h3 style={{ fontSize: "1.25rem", color: "#222", marginBottom: "8px", fontWeight: "600" }}>{item.title}</h3>
                                    <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", padding: "60px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#1a7b42", marginBottom: "40px" }}>What We Offer Through Our Custom PhD Research Methodology Service</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.25rem", marginBottom: "15px", color: "#222", fontWeight: "600" }}>PhD Methodology Service</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {["Careful identification of methodology", "Expert advice on approaches", "Step-by-step planning", "Well-structured writing", "Comprehensive assistance"].map((li, i) => (
                                    <li key={i} style={{ marginBottom: "10px", fontSize: "0.98rem", color: "#555", paddingLeft: "15px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0, color: "#1a7b42" }}>•</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.25rem", marginBottom: "15px", color: "#222", fontWeight: "600" }}>Qualitative Research Assistance</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {["Grounded theory development", "Narrative design (case studies)", "Ethnographic analysis", "Transcripts & visuals", "Content evaluation"].map((li, i) => (
                                    <li key={i} style={{ marginBottom: "10px", fontSize: "0.98rem", color: "#555", paddingLeft: "15px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0, color: "#1a7b42" }}>•</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.25rem", marginBottom: "15px", color: "#222", fontWeight: "600" }}>Quantitative Research Assistance</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {["Correlational research frameworks", "Survey-based study design", "Questionnaire development", "Experimental models", "Hypothesis testing"].map((li, i) => (
                                    <li key={i} style={{ marginBottom: "10px", fontSize: "0.98rem", color: "#555", paddingLeft: "15px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0, color: "#1a7b42" }}>•</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.25rem", marginBottom: "15px", color: "#222", fontWeight: "600" }}>Mixed Methods & Action Research</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {["Integration of qualitative & quantitative", "Action research designs", "Enhanced data triangulation", "Flexible methodologies", "Theoretical & practical focus"].map((li, i) => (
                                    <li key={i} style={{ marginBottom: "10px", fontSize: "0.98rem", color: "#555", paddingLeft: "15px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0, color: "#1a7b42" }}>•</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default Methodology;
