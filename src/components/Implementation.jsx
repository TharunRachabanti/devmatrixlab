import React from "react";
import PageTemplate from "./PageTemplate";
import { motion } from "framer-motion";

const Implementation = () => {
    return (
        <PageTemplate title="Implementation Service in Hyderabad" subtitle="Welcome to DevMatrixLab" bgImage="/imag/implemantation.123.jpg">

            <section style={{ marginBottom: "60px", background: "#f9fdfc", padding: "60px 20px", borderRadius: "12px" }}>
                <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "40px" }}>Why Choose <span style={{ color: "#009688" }}>Implementation Services?</span></h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                    {[
                        { title: "Seamless Project Execution", desc: "We convert your academic and research ideas into real, functional solutions with precise implementation strategies." },
                        { title: "Customized Solutions", desc: "Each project is tailored to your requirements, ensuring functionality, efficiency, and alignment with your goals." },
                        { title: "Technical Expertise", desc: "Our team leverages cutting-edge technology and industry best practices to deliver high-quality implementation results." },
                        { title: "Support for Complex Projects", desc: "We handle sophisticated tasks across software development, research tools, and AI-based solutions for scholars and businesses." },
                        { title: "Quality Assurance", desc: "Every implementation is thoroughly tested for accuracy, performance, and scalability to ensure optimal results." },
                        { title: "End-to-End Service", desc: "From planning to execution, we manage the entire lifecycle of your project, giving you peace of mind and reliable results." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}
                        >
                            <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "10px", color: "#00796b" }}>{item.title}</h3>
                            <p style={{ color: "#444", lineHeight: "1.6", fontSize: "0.95rem" }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: "60px", background: "#f9f9f9", padding: "60px 20px", borderRadius: "12px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "40px", color: "#333" }}>Why <span style={{ color: "#4CAF50" }}>DevMatrixLab</span> is the Right Partner for Your Implementation Needs</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
                    {[
                        { title: "Expert-Driven Solutions", desc: "Projects are executed by experts ensuring clarity, precision, and functional excellence." },
                        { title: "Customized for Scholars & Businesses", desc: "Solutions are tailored to research, software, and AI projects, keeping your goals and workflow in focus." },
                        { title: "On-Time Delivery", desc: "We respect deadlines and ensure every project is delivered on schedule with quality assurance." },
                        { title: "Clear & Supportive Communication", desc: "Our team provides regular updates, guidance, and technical support throughout the project lifecycle." },
                        { title: "Trusted by Professionals Worldwide", desc: "DevMatrixLab is relied upon by researchers and businesses globally for effective implementation services." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
                            style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)", textAlign: "left" }}
                        >
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#222" }}>{item.title}</h3>
                            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: "50px", fontSize: "1.2rem", fontStyle: "italic", color: "#4CAF50", borderLeft: "4px solid #4CAF50", paddingLeft: "15px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    <p>“Turn Your Ideas into Reality with DevMatrixLab’s Expert Implementation Services.”</p>
                </div>
            </section>

        </PageTemplate>
    );
};

export default Implementation;
