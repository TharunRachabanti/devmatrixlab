import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const AZDevelopment = () => {
    const projects = [
        {
            title: "Web Development",
            img: "/imag/development2.jpg",
            desc: "We deliver responsive and high-performance websites tailored for businesses, startups, and academic projects. Our expertise covers e-commerce portals, corporate websites, CMS, and enterprise web applications.",
        },
        {
            title: "Mobile Application Development",
            img: "/imag/development3.jpg",
            desc: "We build native and cross-platform mobile applications for Android and iOS with a focus on intuitive UI/UX design, performance optimization, and seamless backend integration.",
        },
        {
            title: "Software Development",
            img: "/imag/development4.jpg",
            desc: "We provide custom software solutions for businesses, startups, and academic projects, including desktop applications, automation tools, management systems, and specialized software platforms.",
        },
        {
            title: "AI & Machine Learning",
            img: "/imag/development5.jpg",
            desc: "We develop intelligent AI systems and machine learning solutions to help businesses, researchers, and students make data-driven decisions and automate complex processes.",
        },
        {
            title: "Data Science & Analytics",
            img: "/imag/development6.jpg",
            desc: "We provide data-driven solutions that help businesses, researchers, and students extract meaningful insights from complex datasets using tools like Python, R, SQL, Power BI, and Tableau.",
        },
        {
            title: "Cloud & Cybersecurity",
            img: "/imag/development7.jpg",
            desc: "We provide secure and scalable cloud solutions along with comprehensive cybersecurity strategies for businesses, startups, and academic projects.",
        },
        {
            title: "IoT & Embedded Systems",
            img: "/imag/development8.jpg",
            desc: "We develop smart IoT solutions and embedded systems that enable real-time monitoring, automation, and intelligent decision-making for industrial, academic, and research projects.",
        },
        {
            title: "Blockchain & Web3",
            img: "/imag/development9.jpg",
            desc: "We specialize in next-generation blockchain and Web3 solutions that enable secure, transparent, and decentralized digital systems for businesses, startups, and academic projects.",
        },
    ];

    return (
        <PageTemplate
            title="Welcome to A-Z Development"
            subtitle=""
            bgImage="/imag/a to z development.png"
        >
            {/* About Section */}
            <section style={{ marginBottom: "60px", padding: "60px 20px", background: "#f2f5f3" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
                    <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                        <img
                            src="/imag/development1.jpg"
                            alt="DevMatrixLab Development"
                            style={{ width: "100%", maxWidth: "500px", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                        />
                    </div>
                    <div style={{ flex: "1 1 500px" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#369631", marginBottom: "20px" }}>About A to Z Development</h2>
                        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333", textAlign: "justify", padding: "20px", background: "#6ff360", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
                            DevMatrixLab is your <b>end-to-end IT development partner</b>, providing
                            comprehensive solutions from A to Z. We specialize in <b>software and web development,
                                mobile applications, cloud computing, AI & machine learning, data science, IoT,
                                embedded systems, blockchain, and Web3 solutions</b>.
                            Our team works closely with clients and students alike to deliver <b>customized,
                                scalable, and innovative solutions</b> that solve real-world problems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ marginBottom: "60px", padding: "60px 20px", background: "#f4f8f4" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#369631", marginBottom: "10px" }}>Services in A to Z Development</h2>
                <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px", color: "#555", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    DevMatrixLab offers complete end-to-end IT solutions for businesses, students, and researchers.
                    From ideation to deployment, we handle software, web, mobile, cloud, AI, IoT, and blockchain development.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1000px", margin: "0 auto" }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.18)" }}
                            style={{ background: "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", cursor: "pointer", border: "1px solid #eee" }}
                        >
                            <img src={project.img} alt={project.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "var(--highlight-color)", fontWeight: "bold" }}>{project.title}</h3>
                                <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Simple FAQ Section */}
            <section style={{ padding: "60px 20px", background: "#eefaf6" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#369631", marginBottom: "40px", fontWeight: "bold" }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ background: "#fff", padding: "15px", borderRadius: "8px" }}>
                        <p><strong>What types of projects do you handle?</strong></p>
                        <p style={{ marginTop: "5px" }}>We handle a wide range of projects including web development, mobile apps, software, AI & ML, IoT, cloud, data science, and blockchain/Web3 solutions.</p>
                    </div>
                    <div style={{ background: "#fff", padding: "15px", borderRadius: "8px" }}>
                        <p><strong>Do you provide source code?</strong></p>
                        <p style={{ marginTop: "5px" }}>Yes, we provide full source code and documentation for all our development projects.</p>
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default AZDevelopment;
