import React, { useState, useEffect } from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";
import { FaBookOpen, FaLightbulb, FaUsers, FaCogs, FaLock, FaClock, FaAward, FaRobot } from "react-icons/fa";

const WhyDevMatrixLab = () => {
    const testimonials = [
        { text: "DevMatrixLab guided me from topic selection to journal publication. Truly the No.1 PhD consultancy!", author: "Priya R, Computer Science" },
        { text: "The plagiarism-free writing and step-by-step support gave me full confidence in my research journey.", author: "Ahmed K, Mechanical Engineering" },
        { text: "Their coding and data analysis support helped me finish my thesis on time. Highly recommended!", author: "Sneha M, Data Science" },
        { text: "From proposal writing to final viva support, DevMatrixLab is with you at every stage.", author: "John D, Management Studies" }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const faqs = [
        { q: "Is my data secure?", a: "Yes, DevMatrixLab ensures 100% confidentiality. Your data, research ideas, and documents are never shared with third parties." },
        { q: "How long does proposal writing take?", a: "On average, a research proposal takes 10–15 working days depending on the topic complexity and guidelines." },
        { q: "Do you provide plagiarism report?", a: "Yes, we provide a detailed plagiarism report from reputed tools like Turnitin, ensuring originality." },
        { q: "Can I choose my own research topic?", a: "Absolutely. You can suggest your preferred topic, or we can recommend trending and feasible topics in your domain." },
        { q: "Do you support journal publication?", a: "Yes, our experts provide end-to-end support for publishing in Scopus, SCI, and UGC-listed journals." },
        { q: "Do you help with coding and data analysis?", a: "Yes, we support coding, simulations, and data analysis in MATLAB, Python, NS2, SPSS, and other tools." },
        { q: "How do I track my project progress?", a: "We provide weekly updates and you can connect with our experts via mail, call, or online meetings." },
        { q: "Can you guarantee plagiarism-free work?", a: "Yes, we guarantee plagiarism-free content with unique ideas, backed by plagiarism reports." },
        { q: "Do you provide support till viva?", a: "Yes, we provide complete guidance from proposal to thesis submission and even final viva support." },
        { q: "How do I get started with DevMatrixLab?", a: "You can contact us via website, WhatsApp, or email. Our consultant will discuss your requirements and suggest the next steps." },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <PageTemplate title="Why Devmatrixlab" subtitle="PhD Consultancy in Hyderabad | Research, Journal Publication, and AI-driven Guidance" bgImage="/imag/devmatrixlab.png">

            <section style={{ padding: "60px 20px", background: "linear-gradient(135deg, #ffffff, #f8faff)", textAlign: "center" }}>
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#7ab800", marginBottom: "10px" }}>🚀 Why DevMatrixLab is No.1 in PhD Consultancy</h2>
                    <p style={{ fontSize: "1rem", color: "#4a5568", marginBottom: "40px" }}>We don’t just deliver research papers, we deliver success, confidence, and future-ready scholars.</p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
                        {[
                            { icon: FaBookOpen, title: "1,00,000+ Research Topics", desc: "Access a vast library of trending and emerging PhD research topics." },
                            { icon: FaLightbulb, title: "Novel & Innovative", desc: "Every research idea is plagiarism-free, unique, and backed by novelty reports." },
                            { icon: FaUsers, title: "Skilled Expert Team", desc: "Guidance from PhDs, Postdocs, and industry professionals across multiple fields." },
                            { icon: FaCogs, title: "End-to-End Support", desc: "From topic selection to proposal, coding, publication, and viva preparation." },
                            { icon: FaLock, title: "Confidentiality", desc: "100% data protection and secure handling of your research." },
                            { icon: FaClock, title: "On-Time Delivery", desc: "Structured timelines ensure research is delivered on schedule without quality compromise." },
                            { icon: FaAward, title: "Proven Track Record", desc: "Trusted by thousands of scholars worldwide with a high success rate." },
                            { icon: FaRobot, title: "Tech-Driven", desc: "Use of AI, simulations, and advanced tools for accurate research and coding support." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, background: "#d4f8d4", boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
                                style={{ background: "#fff", padding: "25px", borderRadius: "15px", boxShadow: "0 6px 15px rgba(0,0,0,0.08)", transition: "all 0.4s ease" }}
                            >
                                <card.icon style={{ fontSize: "2rem", color: "#17a854", marginBottom: "15px" }} />
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#7ab800", fontWeight: "bold" }}>{card.title}</h3>
                                <p style={{ fontSize: "0.95rem", color: "#4a5568", lineHeight: "1.5" }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "50px 20px", background: "#f9fff9", textAlign: "center" }}>
                <div style={{ maxWidth: "800px", margin: "auto" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "30px", color: "#1a4d2e", fontWeight: "bold" }}>What Our Scholars Say</h2>
                    <div style={{ position: "relative", minHeight: "200px" }}>
                        {testimonials.map((t, i) => (
                            i === currentTestimonial && (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ padding: "20px", background: "#ffffff", border: "2px solid #c6e6c6", borderRadius: "15px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                                >
                                    <p style={{ fontSize: "18px", fontStyle: "italic", color: "#333" }}>"{t.text}"</p>
                                    <div style={{ margin: "10px 0", fontSize: "20px", color: "#28a745" }}>⭐⭐⭐⭐⭐</div>
                                    <h4 style={{ marginTop: "10px", color: "#1a4d2e", fontWeight: "bold" }}>- {t.author}</h4>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "50px 20px", background: "#f0fff4", textAlign: "center" }}>
                <div style={{ maxWidth: "800px", margin: "auto", textAlign: "left" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "20px", color: "#1a4d2e", textAlign: "center", fontWeight: "bold" }}>Frequently Asked Questions</h2>
                    {faqs.map((item, i) => (
                        <div key={i} style={{ marginBottom: "15px", borderRadius: "10px", background: "#fff", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                            <button
                                onClick={() => toggleFaq(i)}
                                style={{ width: "100%", padding: "18px 20px", background: "#e6f8eb", border: "none", textAlign: "left", fontSize: "1.05rem", fontWeight: "bold", color: "#1a4d2e", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                                {i + 1}. {item.q}
                                <span>{openFaq === i ? "-" : "+"}</span>
                            </button>
                            {openFaq === i && (
                                <div style={{ padding: "18px 20px", color: "#444", lineHeight: "1.6", borderTop: "1px solid #c6e6c6" }}>
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </PageTemplate>
    );
};

export default WhyDevMatrixLab;
