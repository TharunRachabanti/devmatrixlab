import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const ResearchPaper = () => {
    return (
        <PageTemplate title="Research Paper Writing" subtitle="PhD Consultancy in Hyderabad" bgImage="/imag/research_paper_hq.jpg">

            <section style={{ marginBottom: "60px" }}>
                <h2 style={{ color: "#008080", textAlign: "center", marginBottom: "20px", fontSize: "2rem" }}>Why Choose DevMatrixLab for Research Papers?</h2>
                <p style={{ textAlign: "justify", lineHeight: "1.7", marginBottom: "30px", fontSize: "1rem" }}>
                    Writing a review paper requires expertise, precision, and academic excellence. At <strong>DevMatrixLab</strong>, we provide comprehensive support to researchers, scholars, and students in creating impactful review papers that meet international publication standards.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
                    {[
                        { title: "1. Expert Guidance", desc: "Our team of PhD scholars and subject matter experts ensure that your review paper is scientifically accurate, well-structured, and thoroughly researched." },
                        { title: "2. 100% Original & Plagiarism-Free", desc: "We strictly maintain academic integrity. Every review paper undergoes plagiarism checks to ensure uniqueness and credibility." },
                        { title: "3. Journal-Ready Formatting", desc: "We prepare your review paper according to the latest journal guidelines, ensuring seamless acceptance and submission." },
                        { title: "4. Continuous Support", desc: "Our experts provide end-to-end support, from topic selection and literature review to editing and proofreading." },
                        { title: "5. Affordable & Timely Delivery", desc: "We value your time and budget. With affordable packages and strict deadlines, your review paper will always be delivered on schedule." }
                    ].map((item, index) => (
                        <div key={index} style={{ padding: "15px", background: "#f5f5f5", borderRadius: "8px", borderLeft: "4px solid #7ab800" }}>
                            <h3 style={{ color: "#7ab800", marginBottom: "8px", fontSize: "1.1rem" }}>{item.title}</h3>
                            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)" }}>
                <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "10px" }}>Get the <span style={{ color: "#28a745" }}>Best PhD</span> support team</h2>
                <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #28a745, #007bff)", margin: "10px auto 20px" }}></div>
                <p style={{ textAlign: "justify", fontSize: "16px", color: "#444", marginBottom: "20px" }}>
                    Writing a high-quality research paper requires precision, dedication, and academic expertise.
                    At <strong>DevMatrixLab</strong>, we understand that every paper reflects your scholarly identity,
                    which is why we never compromise on standards. Our team of experienced research paper writers
                    focuses on creating well-structured, original, and impactful content.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop" alt="Research Paper Writing" style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)" }}>
                <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "10px" }}>Reason to choose <span style={{ color: "#28a745" }}>research paper</span> writing services</h2>
                <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #28a745, #007bff)", margin: "10px auto 20px" }}></div>
                <p style={{ textAlign: "justify", fontSize: "16px", color: "#444", marginBottom: "20px" }}>
                    At <strong>DevMatrixLab</strong>, our experts simplify this journey by offering structured guidance,
                    in-depth research support, and precise academic writing. We ensure your paper is
                    <strong> 100% plagiarism-free, logically organized, and aligned with international publication standards</strong>,
                    making your work stand out with clarity and credibility.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/imag/research%20service.jpg" alt="Research Services" style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                </div>
            </section>

            <section style={{ background: "#f9f9f9", padding: "50px 20px", textAlign: "center", borderRadius: "12px" }}>
                <h2 style={{ fontSize: "2rem", color: "#009688", fontWeight: "700", marginBottom: "10px" }}>
                    Trusted <span style={{ color: "#4caf50" }}>Research Paper</span> Writing Services
                </h2>
                <div style={{ width: "80px", height: "3px", background: "#4caf50", margin: "15px auto 40px" }}></div>

                <div style={{ display: "flex", flexDirection: "column", gap: "25px", maxWidth: "800px", margin: "0 auto" }}>
                    {[
                        { title: "Personalized Support", desc: "Every scholar has unique academic goals, and we recognize that no two research journeys are the same. Our dedicated experts provide personalized one-on-one guidance." },
                        { title: "Authentic & High-Quality Work", desc: "We ensure that every research paper is 100% plagiarism-free and supported by authentic, credible references from reputed journals and publications." },
                        { title: "Deadline-Focused Delivery", desc: "Deadlines should never come in the way of quality research. Our team is committed to delivering every paper within the promised timeframe." }
                    ].map((box, i) => (
                        <div key={i} style={{ background: "#4caf50", padding: "25px", borderRadius: "10px", textAlign: "left", color: "white", transition: "transform 0.3s ease", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                            <h3 style={{ color: "#003d33", fontSize: "1.3rem", marginBottom: "12px" }}>{box.title}</h3>
                            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{box.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </PageTemplate>
    );
};

export default ResearchPaper;
