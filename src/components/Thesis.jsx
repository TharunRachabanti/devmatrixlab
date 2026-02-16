import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const Thesis = () => {
    const services = [
        {
            title: "100% Original Work, Every Time",
            desc: "We take academic integrity seriously. Every thesis is crafted from scratch with genuine research and unique insights. You’ll receive a single-digit plagiarism report along with your document."
        },
        {
            title: "Experts in Every Field",
            desc: "With 100+ subject specialists, we ensure your work is handled by professionals who deeply understand your domain — from engineering to social sciences."
        },
        {
            title: "Abstract Delivered in 48 Hours",
            desc: "We deliver a research-aligned abstract within 48 hours of registration, giving your project a strong start without delays."
        },
        {
            title: "Complete Paper in 100 Hours",
            desc: "Once your abstract is approved, our experts deliver a complete research paper within just 100 hours, with academic depth and precision."
        },
        {
            title: "Daily Progress Updates",
            desc: "Stay informed with consistent daily updates on your paper’s progress, ensuring transparency and clarity throughout the process."
        },
        {
            title: "Plagiarism Report Included",
            desc: "Every project includes a detailed plagiarism report free of cost, ensuring originality and academic compliance."
        },
        {
            title: "Customized to Journal Guidelines",
            desc: "We strictly follow journal submission guidelines including citations, references, and formatting to maximize publication chances."
        },
        {
            title: "Confidentiality You Can Count On",
            desc: "Your data, ideas, and documents are protected with strict confidentiality protocols. Your research remains private and secure with DevMatrixLab."
        }
    ];

    return (
        <PageTemplate title="Thesis Writing Service" subtitle="Expert Guidance | Affordable | Trusted by 1000+ Students" bgImage="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "60px", alignItems: "center" }}>
                <div style={{ flex: "1 1 300px", background: "#c4ff4d", padding: "40px", textAlign: "center", fontWeight: "bold", fontSize: "22px", color: "black", borderRadius: "8px" }}>
                    HIRE AFFORDABLE <br /> THESIS WRITING <br /> SERVICE
                </div>
                <div style={{ flex: "2 1 400px" }}>
                    <h2 style={{ color: "var(--highlight-color)", marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Thesis Writing Service</h2>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        Did you know that nearly 70% of PhD students struggle midway through their thesis?
                        The constant pressure to meet academic standards, organize complex ideas, and maintain
                        originality can quickly become overwhelming. That’s exactly where DevMatrixLab’s expert
                        thesis writing service makes all the difference.
                    </p>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        For many scholars, having professional guidance has been the turning point in their
                        research journey. At DevMatrixLab, we specialize in bringing clarity, structure, and
                        academic precision to your work, ensuring that your thesis is not just complete, but impactful.
                    </p>
                    <div style={{ background: "#f7f7f7", padding: "15px", borderLeft: "4px solid #6bb800", marginBottom: "20px" }}>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Daily progress updates</p>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Zero plagiarism guarantee</p>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Publication support</p>
                    </div>
                    <p style={{ fontStyle: "italic", fontWeight: "bold", marginTop: "20px" }}>“Focus On Your Research, We’ll Handle the Writing”</p>
                </div>
            </div>

            <section style={{ marginBottom: "60px" }}>
                <h2 style={{ textAlign: "center", color: "var(--highlight-color)", fontSize: "2.5rem", marginBottom: "40px", fontWeight: "bold" }}>Why DevMatrixLab best in Thesis writing?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                            style={{
                                background: "#fff",
                                padding: "25px",
                                borderRadius: "15px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                border: "1px solid #eee"
                            }}
                        >
                            <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "var(--highlight-color)", fontWeight: "bold" }}>{service.title}</h3>
                            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#555" }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", background: "#f0f8f5", padding: "40px", borderRadius: "12px" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Thesis Topic Assistance" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
                </div>
                <div style={{ flex: "1 1 400px" }}>
                    <h2 style={{ color: "var(--highlight-color)", fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>DevMatrixLab Is Here To Help You Anytime</h2>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        Struggling to choose the right thesis topic for your area of interest? Don’t worry. Our Thesis Writing Services at <strong>DevMatrixLab</strong> are here to guide you. Our experts help you select a relevant and research-worthy topic that perfectly aligns with your field.
                    </p>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        If you're not satisfied with the initial title suggestions, we provide detailed topic proposals for better clarity. Our subject matter experts deliver <strong>100% plagiarism-free</strong> and high-quality thesis content to ensure academic excellence.
                    </p>
                </div>
            </section>

        </PageTemplate>
    );
};

export default Thesis;
