import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCogs, FaBrain, FaDatabase, FaShieldAlt, FaMicrochip, FaLink, FaQuoteLeft } from "react-icons/fa";

const AZDevelopment = () => {
    const projects = [
        {
            title: "Web Development",
            img: "/imag/development2.jpg",
            icon: <FaLaptopCode size={40} color="#369631" />,
            desc: "We deliver responsive and high-performance websites tailored for businesses, startups, and academic projects. Our expertise covers e-commerce portals, corporate websites, content management systems (CMS), and enterprise web applications built with modern frameworks like React, Angular, Vue, and Node.js. Every project is designed with SEO-friendly structure, mobile optimization, fast loading, and secure architecture."
        },
        {
            title: "Mobile Application Development",
            img: "/imag/development3.jpg",
            icon: <FaMobileAlt size={40} color="#369631" />,
            desc: "We build native and cross-platform mobile applications for Android and iOS with a focus on intuitive UI/UX design, performance optimization, and seamless backend integration. Our expertise covers React Native, Flutter, Swift, Kotlin and integrates with databases, APIs, and cloud services to create robust, scalable, and secure apps."
        },
        {
            title: "Software Development",
            img: "/imag/development4.jpg",
            icon: <FaCogs size={40} color="#369631" />,
            desc: "We provide custom software solutions for businesses, startups, and academic projects, including desktop applications, automation tools, management systems, and specialized software platforms. Our team works with technologies like Python, Java, C#, .NET, and Electron to create robust, scalable, and secure software tailored to client requirements."
        },
        {
            title: "AI & Machine Learning",
            img: "/imag/development5.jpg",
            icon: <FaBrain size={40} color="#369631" />,
            desc: "We develop intelligent AI systems and machine learning solutions to help businesses, researchers, and students make data-driven decisions and automate complex processes. Our expertise includes predictive modeling, natural language processing, computer vision, chatbots, recommendation engines, and AI-powered automation tools built using Python, TensorFlow, PyTorch, and scikit-learn."
        },
        {
            title: "Data Science & Analytics",
            img: "/imag/development6.jpg",
            icon: <FaDatabase size={40} color="#369631" />,
            desc: "We provide data-driven solutions that help businesses, researchers, and students extract meaningful insights from complex datasets. Our services include data cleaning, statistical analysis, visualization dashboards, predictive modeling, and business intelligence solutions using tools like Python, R, SQL, Power BI, and Tableau."
        },
        {
            title: "Cloud & Cybersecurity",
            img: "/imag/development7.jpg",
            icon: <FaShieldAlt size={40} color="#369631" />,
            desc: "We provide secure and scalable cloud solutions along with comprehensive cybersecurity strategies for businesses, startups, and academic projects. Our services include cloud architecture design, deployment, migration, and management across platforms like AWS, Azure, and Google Cloud, ensuring reliability, performance, and scalability."
        },
        {
            title: "IoT & Embedded Systems",
            img: "/imag/development8.jpg",
            icon: <FaMicrochip size={40} color="#369631" />,
            desc: "We develop smart IoT solutions and embedded systems that enable real-time monitoring, automation, and intelligent decision-making for industrial, academic, and research projects. Our expertise includes sensor integration, microcontroller programming, wireless communication, IoT device management, and edge computing, using platforms like Arduino, Raspberry Pi, ESP32, and STM32."
        },
        {
            title: "Blockchain & Web3",
            img: "/imag/development9.jpg",
            icon: <FaLink size={40} color="#369631" />,
            desc: "We specialize in next-generation blockchain and Web3 solutions that enable secure, transparent, and decentralized digital systems for businesses, startups, and academic projects. Our expertise includes smart contract development, decentralized applications (DApps), NFT platforms, cryptocurrency solutions, and tokenization using technologies like Ethereum, Solidity, Hyperledger, and Polygon."
        },
    ];

    const testimonials = [
        {
            name: "Abhi Ram",
            feedback: "DevMatrixLab delivered our project flawlessly. The team is highly skilled and responsive. Truly professional!",
            role: "Business Owner"
        },
        {
            name: "Priya Sharma",
            feedback: "Amazing support for our B.Tech project. Guidance and documentation were top-notch. Highly recommend!",
            role: "Student"
        },
        {
            name: "Ajay Kumar",
            feedback: "From idea to deployment, DevMatrixLab handled everything. Excellent AI & ML solutions and data analytics.",
            role: "Startup Founder"
        }
    ];

    return (
        <PageTemplate
            title="Welcome to A-Z Development"
            subtitle="Your Trusted Partner for End-to-End IT Solutions"
            bgImage="/imag/az_development_hq.jpg"
        >
            {/* About Section */}
            <section style={{ marginBottom: "60px", padding: "80px 20px", background: "#f2f5f3" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: "1 1 500px", textAlign: "center" }}
                    >
                        <img
                            src="/imag/az_development_about_hq.jpg"
                            alt="DevMatrixLab Development"
                            style={{ width: "100%", maxWidth: "550px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: "1 1 500px" }}
                    >
                        <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#369631", marginBottom: "25px", fontFamily: "var(--font-heading)" }}>About A to Z Development</h2>
                        <div style={{ padding: "30px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 30px rgba(54, 150, 49, 0.1)", borderLeft: "5px solid #369631" }}>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "#444", textAlign: "justify", marginBottom: "15px" }}>
                                DevMatrixLab is your <b>end-to-end IT development partner</b>, providing
                                comprehensive solutions from A to Z. We specialize in <b>software and web development,
                                    mobile applications, cloud computing, AI & machine learning, data science, IoT,
                                    embedded systems, blockchain, and Web3 solutions</b>.
                            </p>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "#444", textAlign: "justify" }}>
                                Our team works closely with clients and students alike to deliver <b>customized,
                                    scalable, and innovative solutions</b> that solve real-world problems.
                                Beyond development, we offer consultancy, research support, project guidance, and academic assistance.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ marginBottom: "60px", padding: "80px 20px", background: "#fcfdfc" }}>
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
                    <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#369631", marginBottom: "15px" }}>Services in A to Z Development</h2>
                    <p style={{ color: "#666", fontSize: "1.15rem", lineHeight: "1.8" }}>
                        DevMatrixLab offers complete end-to-end IT solutions for businesses, students, and researchers.
                        From ideation to deployment, we transform your vision into reality.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(54, 150, 49, 0.15)" }}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                                border: "1px solid #f0fdf4",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <div style={{ height: "220px", overflow: "hidden" }}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                                />
                            </div>
                            <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                                <div style={{ marginBottom: "15px" }}>{project.icon}</div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#1a2e1a", fontWeight: "700" }}>{project.title}</h3>
                                <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.7", flex: 1, textAlign: "justify" }}>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ marginBottom: "60px", padding: "80px 20px", background: "#f2f5f3" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "800", color: "#369631", marginBottom: "50px" }}>What Our Clients Say</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ background: "#fff", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", position: "relative" }}
                        >
                            <FaQuoteLeft style={{ position: "absolute", top: "30px", left: "30px", fontSize: "30px", color: "#dcfce7" }} />
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                                "{testimonial.feedback}"
                            </p>
                            <div>
                                <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#369631", margin: 0 }}>{testimonial.name}</h4>
                                <span style={{ fontSize: "0.9rem", color: "#888" }}>{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "80px 20px", background: "#fff" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.8rem", color: "#369631", marginBottom: "50px", fontWeight: "800" }}>Frequently Asked Questions</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {[
                            { q: "What types of projects do you handle?", a: "We handle a wide range of projects including web development, mobile apps, software, AI & ML, IoT, cloud, data science, and blockchain/Web3 solutions." },
                            { q: "Do you provide academic project support?", a: "Yes! We assist students with B.Tech, degree, and research projects, including documentation, coding guidance, and report preparation." },
                            { q: "Can you handle end-to-end solutions?", a: "Absolutely! From idea conceptualization to deployment and maintenance, we provide complete A to Z IT solutions." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ background: "#f8fafc", padding: "25px", borderRadius: "15px", border: "1px solid #e2e8f0" }}
                            >
                                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#1e293b", marginBottom: "10px" }}>{item.q}</h3>
                                <p style={{ fontSize: "1.05rem", color: "#64748b", margin: 0 }}>{item.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </PageTemplate>
    );
};

export default AZDevelopment;
