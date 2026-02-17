import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PageTemplate = ({ title, subtitle, bgImage, metaDesc, keywords, children }) => {
    useEffect(() => {
        document.title = `DevMatrix | ${title}`;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = metaDesc || "DevMatrixLab - Professional PhD Assistance & Tech Solutions";

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || "PhD assistance, thesis writing, research guidance, Hyderabad, DevMatrixLab";

    }, [title, metaDesc, keywords]);

    return (
        <div className="page-content">
            {/* Page Header */}
            <header
                style={{
                    position: "relative",
                    height: "300px",
                    background: bgImage ? `url(${bgImage}) no-repeat center center/cover` : "var(--accent-color)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.6)"
                    }}
                ></div>

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: "3rem", marginBottom: "10px", color: "white" }}
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ fontSize: "1.2rem", color: "#e0e0e0" }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="section-padding" style={{ background: "#f9f9f9", minHeight: "60vh" }}>
                <div className="container page-card">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PageTemplate;
