import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const ResearchProposal = () => {
    return (
        <PageTemplate title="Research Proposal" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/research-proposal-writing.jpg">

            <section style={{ marginBottom: "60px", background: "linear-gradient(135deg, #f0fdfa, #ecfdf5)", padding: "80px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: "2.5rem", color: "#0f766e", fontWeight: "700", marginBottom: "30px" }}
                    >
                        Research Proposal
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333", textAlign: "justify", maxWidth: "1000px", margin: "0 auto" }}
                    >
                        <p style={{ marginBottom: "25px" }}>
                            A research proposal is more than just a formal document — it is often the key to securing
                            sponsorship and institutional approval. Proposals are evaluated on the basis of
                            <strong> cost, feasibility, prior research, and the potential impact</strong> they can create.
                            A strong proposal addresses crucial aspects such as the objectives of the study, the
                            estimated <strong>time and expenses</strong>, existing work in the field, and the benefits
                            that the research can bring to the organization, academic community, and sponsors.
                        </p>
                        <p style={{ marginBottom: "25px" }}>
                            One of the most essential components of a research proposal is the formulation of
                            <strong> research questions</strong>. These questions guide the entire direction of the study
                            and help in defining what exactly the research aims to explore. Well-framed research
                            questions allow reviewers to assess the feasibility of the project, anticipate possible
                            conclusions, and provide meaningful feedback for refinement. They also give structure to
                            the proposal, making it clear and convincing.
                        </p>
                        <p>
                            Ultimately, a strong research proposal not only demonstrates the <strong>importance and
                                novelty</strong> of the study but also reassures sponsors and stakeholders of its
                            <strong> value, impact, and execution plan</strong>. With clear goals, realistic timelines,
                            and well-structured questions, it sets the foundation for a successful research journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "linear-gradient(135deg, #f9fafb, #eef2ff)", padding: "80px 20px" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: "center", marginBottom: "50px" }}
                    >
                        <h2 style={{ fontSize: "2.3rem", color: "#0f766e", fontWeight: "700", marginBottom: "20px" }}>What is a Research Paper?</h2>
                        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", textAlign: "justify", maxWidth: "900px", margin: "0 auto" }}>
                            A research paper is a detailed academic document that explores, analyzes, and interprets
                            a specific topic or question. It is based on original research, evidence, and analysis.
                            A research proposal, on the other hand, is a plan written before conducting research,
                            mostly for sponsorship and approval purposes. Proposals are evaluated on the
                            <strong> cost, feasibility, and potential impact</strong> of the research.
                        </p>
                    </motion.div>

                    <h2 style={{ textAlign: "center", fontSize: "2.3rem", color: "#0f766e", fontWeight: "700", marginBottom: "40px" }}>How to Write a Research Proposal?</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" }}>
                        {[
                            { title: "1. Title Page", desc: "Includes the research title, your name, institution, and contact details." },
                            { title: "2. Summary", desc: "A brief overview of your research aim, scope, and expected outcomes." },
                            { title: "3. Introduction", desc: "Explains the background, importance, and objectives of your research." },
                            { title: "4. Literature Review", desc: "Summarizes existing research and highlights gaps your study will address." },
                            { title: "5. Methodology", desc: "Outlines the research design, methods, data collection, and analysis plan." },
                            { title: "6. Timeline", desc: "Provides a clear schedule of tasks and milestones for your research." },
                            { title: "7. Reference Section", desc: "Lists all academic sources cited in your proposal." },
                            { title: "8. Appendices", desc: "Includes supplementary materials like questionnaires, charts, or raw data." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                                style={{ background: "#fff", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
                            >
                                <h3 style={{ fontSize: "1.3rem", color: "#0f766e", marginBottom: "10px", fontWeight: "600" }}>{item.title}</h3>
                                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: "60px", padding: "50px 20px" }}>
                <div style={{ maxWidth: "1100px", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/imag/res2.jpg" alt="Research Proposal Format" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Research Proposal Format</h2>
                        <p style={{ fontSize: "1.1rem", marginBottom: "15px", color: "#555" }}>
                            A research proposal should not be longer than <strong>200 words</strong>.
                            It should clearly explain the proposed research work in a concise and professional manner.
                        </p>
                        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#555" }}>
                            The research proposal provides a broad summary of the current study, the challenges addressed,
                            and the expected outcomes of the research. It also highlights how the research can contribute
                            to knowledge and practice.
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", color: "#444" }}>
                            {["📑 Table of Content", "📖 Introduction", "📚 Literature Review", "🧪 Method", "💡 Discussion"].map((li, i) => (
                                <li key={i} style={{ marginBottom: "10px", paddingLeft: "10px" }}>{li}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default ResearchProposal;
