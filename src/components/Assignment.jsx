import React from "react";
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
            bgImage="/imag/assignments.jpg"
        >
            {/* Intro Section */}
            <section style={{ padding: "60px 20px", background: "linear-gradient(135deg, #ffb84d, #ff9933)", color: "#222", textAlign: "center", borderRadius: "12px", marginBottom: "60px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "20px", color: "#000" }}>Assignment Writing Service That Makes Success Simple</h2>
                    <h1 style={{ fontSize: "34px", fontWeight: "900", marginBottom: "20px", color: "#222" }}>End-to-End Academic Assignment Help by DevMatrixLab</h1>
                    <p style={{ fontSize: "16px", marginBottom: "15px", textAlign: "justify" }}>
                        At <strong>DevMatrixLab</strong>, we provide top-quality <strong>Assignment Writing Services</strong> designed
                        to reduce stress and boost academic performance. With our expert team of writers,
                        students receive personalized, plagiarism-free, and research-driven assignments
                        across all domains of study.
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: "15px", textAlign: "justify" }}>
                        Whether it’s <strong>essays, case studies, reports, technical papers, or project-based assignments</strong>,
                        we ensure high-quality work delivered on time. Trusted by hundreds of students
                        across India and abroad, we focus on <strong>clarity, originality, and academic accuracy</strong>.
                    </p>
                    <div style={{ textAlign: "left", display: "inline-block", margin: "20px auto" }}>
                        <p>✔ Structured Research & Analysis</p>
                        <p>✔ 100% Original & Plagiarism-Free Work</p>
                        <p>✔ Timely Delivery & Deadline Commitment</p>
                        <p>✔ Free Revisions for Complete Satisfaction</p>
                        <p>✔ Affordable & Student-Friendly Pricing</p>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <a href="/contact" style={{ display: "inline-block", background: "#001f3f", color: "#fff", padding: "14px 28px", textDecoration: "none", borderRadius: "6px", fontSize: "16px", fontWeight: "bold" }}>📘 GET ASSIGNMENT HELP NOW</a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ marginBottom: "60px" }}>
                <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "900", marginBottom: "40px", color: "#001f3f" }}>Our Expert Services</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", cursor: "pointer", border: "1px solid #eee" }}
                        >
                            <img src={service.img} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#2ae430", fontWeight: "bold" }}>{service.title}</h3>
                                <p style={{ fontSize: "15px", textAlign: "justify", color: "#444", lineHeight: "1.6" }}>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Online Assignment Help */}
            <section style={{ padding: "60px 20px", background: "#f9f9f9", textAlign: "center", marginBottom: "60px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "20px", color: "#001f3f" }}>Online Assignment Help</h2>
                    <p style={{ fontSize: "16px", marginBottom: "30px", textAlign: "justify", color: "#333", lineHeight: "1.7" }}>
                        In today's digital learning environment, online assignments, quizzes, and timed assessments are increasingly common.
                        <strong>DevMatrixLab</strong> offers specialized support for online coursework, ensuring you meet technical requirements
                        and submit high-quality work within tight deadlines. Whether it's a virtual lab, a coding challenge, or a comprehensive
                        online exam, our experts are equipped to guide you through every step, helping you achieve top grades with confidence.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section style={{ padding: "60px 20px", background: "#fff", textAlign: "center", marginBottom: "60px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "20px", color: "#ff6600" }}>About Us</h2>
                    <p style={{ fontSize: "16px", marginBottom: "30px", textAlign: "justify", color: "#333", lineHeight: "1.7" }}>
                        <strong>DevMatrixLab</strong> is a professional academic consultancy based in Hyderabad,
                        dedicated to helping students and researchers achieve success with high-quality academic
                        writing and project support. We specialize in assignments, dissertations, publications,
                        and creative academic services tailored to global standards.
                    </p>

                    <div style={{ marginBottom: "30px", textAlign: "left" }}>
                        <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#001f3f" }}>🎯 Our Mission</h3>
                        <p style={{ fontSize: "15px", textAlign: "justify", color: "#444", lineHeight: "1.6" }}>
                            To empower students and researchers by providing reliable, plagiarism-free,
                            and timely academic assistance that fosters excellence and innovation.
                            Our goal is to simplify complex academic challenges and turn them into milestones of success.
                        </p>
                    </div>

                    <div style={{ textAlign: "left" }}>
                        <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#001f3f" }}>✨ Why Choose Us?</h3>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {["Experienced Academic Experts", "100% Original & Plagiarism-Free Work", "Affordable & Student-Friendly Pricing", "End-to-End Guidance from Proposal to Publication", "Trusted by 1000+ Students Worldwide"].map((item, i) => (
                                <li key={i} style={{ fontSize: "15px", marginBottom: "8px", color: "#333" }}>✔ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </PageTemplate>
    );
};

export default Assignment;
