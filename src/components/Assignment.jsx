import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const Assignment = () => {
    const services = [
        {
            title: "Record Writing & Assignment Help",
            img: "/imag/assign1.jpg",
            desc: "Our Record Writing & Assignment Help services offer precise, plagiarism-free, and timely academic support tailored to your specific requirements. We cover a wide range of subjects and academic levels.",
        },
        {
            title: "Creative Arts & Crafts Help",
            img: "/imag/assign2.jpg",
            desc: "Bring your imagination to life with our expert guidance in academic arts, crafts, and creative project execution. We provide personalized support for projects, assignments, and presentations.",
        },
        {
            title: "Dissertation & Thesis Writing Help",
            img: "/imag/assign3.jpg",
            desc: "Our Dissertation & Thesis Writing Help provides end-to-end research support, guiding you through topic selection, literature review, methodology, data analysis, and structured writing.",
        },
        {
            title: "PDF Editing & Documentation",
            img: "/imag/assign4.jpg",
            desc: "Our PDF Editing & Documentation services provide professional support for editing, formatting, and converting documents to meet academic and official standards.",
        },
        {
            title: "Academic Drawing & Illustration Help",
            img: "/imag/assign5.jpg",
            desc: "Our Academic Drawing & Illustration Help provides precise, high-quality illustrations, diagrams, and technical drawings tailored for assignments, projects, and research work.",
        },
        {
            title: "Overseas Assignment Help",
            img: "/imag/assign6.jpg",
            desc: "Our Overseas Assignment Help offers specialized support for international students, ensuring your academic work meets global standards. We provide personalized guidance across a wide range of subjects.",
        },
    ];

    return (
        <PageTemplate
            title="Assignment Writing Service"
            subtitle="Assignment Writing Consultancy in Hyderabad | Research and AI-driven Guidance"
            bgImage="/imag/assignment_header_hq.jpg"
            metaDesc="Professional Assignment Writing Services in Hyderabad. Plagiarism-free, high-quality assignment help for essays, case studies, and technical papers."
            keywords="Assignment Writing, Assignment Help Hyderabad, Academic Writing, Essay Writing, Case Study Help, Plagiarism Free Assignments, Online Assignment Help"
        >
            {/* Intro Section - Matching Thesis Structure */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "60px", alignItems: "center" }}>
                <div style={{ flex: "1 1 300px", background: "#c4ff4d", padding: "40px", textAlign: "center", fontWeight: "bold", fontSize: "22px", color: "black", borderRadius: "8px" }}>
                    HIRE AFFORDABLE <br /> ASSIGNMENT WRITING <br /> SERVICE
                </div>
                <div style={{ flex: "2 1 400px" }}>
                    <h2 style={{ color: "var(--highlight-color)", marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Assignment Writing Service That Makes Success Simple</h2>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        At <strong>DevMatrixLab</strong>, we provide top-quality <strong>Assignment Writing Services</strong> designed
                        to reduce stress and boost academic performance. With our expert team of writers,
                        students receive personalized, plagiarism-free, and research-driven assignments
                        across all domains of study.
                    </p>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        Whether it’s <strong>essays, case studies, reports, technical papers, or project-based assignments</strong>,
                        we ensure high-quality work delivered on time. Trusted by hundreds of students
                        across India and abroad, we focus on <strong>clarity, originality, and academic accuracy</strong>.
                    </p>
                    <div style={{ background: "#f7f7f7", padding: "15px", borderLeft: "4px solid #6bb800", marginBottom: "20px" }}>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Structured Research & Analysis</p>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ 100% Original & Plagiarism-Free Work</p>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Timely Delivery & Deadline Commitment</p>
                        <p style={{ margin: "5px 0", fontWeight: "500" }}>✔ Free Revisions for Complete Satisfaction</p>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Link to="/contact" style={{ display: "inline-block", background: "#001f3f", color: "#fff", padding: "12px 24px", textDecoration: "none", borderRadius: "6px", fontSize: "16px", fontWeight: "bold" }}>GET ASSIGNMENT HELP NOW</Link>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <section style={{ marginBottom: "60px" }}>
                <h2 style={{ textAlign: "center", color: "var(--highlight-color)", fontSize: "2.5rem", marginBottom: "40px", fontWeight: "bold" }}>Our Expert Services</h2>
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
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                border: "1px solid #eee"
                            }}
                        >
                            <img src={service.img} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <div style={{ padding: "25px" }}>
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "var(--highlight-color)", fontWeight: "bold" }}>{service.title}</h3>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#555" }}>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Online Assignment Help - Matching Thesis Bottom Section */}
            <section style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", background: "#f0f8f5", padding: "40px", borderRadius: "12px", marginBottom: "60px" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <img src="/imag/assignment_online_help_hq.jpg" alt="Online Assignment Help" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
                </div>
                <div style={{ flex: "1 1 400px" }}>
                    <h2 style={{ color: "var(--highlight-color)", fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>Online Assignment Help</h2>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        In today's digital learning environment, online assignments, quizzes, and timed assessments are increasingly common.
                        <strong>DevMatrixLab</strong> offers specialized support for online coursework, ensuring you meet technical requirements
                        and submit high-quality work within tight deadlines.
                    </p>
                    <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
                        Whether it's a virtual lab, a coding challenge, or a comprehensive
                        online exam, our experts are equipped to guide you through every step, helping you achieve top grades with confidence.
                    </p>
                </div>
            </section>

            {/* About Us - Simplified to match clean aesthetic */}
            <section style={{ marginBottom: "60px", padding: "40px", background: "#fff", borderRadius: "12px", border: "1px solid #eee" }}>
                <h2 style={{ textAlign: "center", color: "var(--highlight-color)", fontSize: "2rem", marginBottom: "30px", fontWeight: "bold" }}>About Us</h2>
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <p style={{ fontSize: "16px", marginBottom: "30px", lineHeight: "1.7", color: "#333" }}>
                        <strong>DevMatrixLab</strong> is a professional academic consultancy based in Hyderabad,
                        dedicated to helping students and researchers achieve success with high-quality academic
                        writing and project support. We specialize in assignments, dissertations, publications,
                        and creative academic services tailored to global standards.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {["Experienced Academic Experts", "100% Original & Plagiarism-Free Work", "Affordable & Student-Friendly Pricing", "End-to-End Guidance"].map((item, i) => (
                            <span key={i} style={{ background: "#e6fffa", color: "#00695c", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
                                ✔ {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default Assignment;
