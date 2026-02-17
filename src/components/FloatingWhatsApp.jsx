import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/919347967147"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                backgroundColor: "#25D366",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                zIndex: 1000,
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "2rem"
            }}
        >
            <FaWhatsapp />
            <span style={{ position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: "0" }}>Chat on WhatsApp</span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
