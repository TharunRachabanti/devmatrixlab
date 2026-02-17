import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaUserGraduate, FaLightbulb, FaPen, FaEdit, FaFileAlt,
    FaBook, FaJournalWhills, FaGlobe, FaClipboardList, FaCode, FaRobot
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Admission Assistance",
            icon: FaUserGraduate,
            desc: "Expert guidance for PhD admission, helping you select the right program and streamline the application process.",
            link: "/contact",
            color: "#0a4d4e",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Topic Selection",
            icon: FaLightbulb,
            desc: "We assist in selecting a research topic that aligns with your interests and academic goals for a strong PhD foundation.",
            link: "/research-topics",
            color: "#1a7f7f",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
            title: "Thesis Writing",
            icon: FaPen,
            desc: "High-quality, structured, and plagiarism-free PhD thesis writing services ensuring academic standards are met.",
            link: "/services/thesis",
            color: "#6ab800",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
        },
        {
            title: "Proofreading & Editing",
            icon: FaEdit,
            desc: "Enhance the quality of your thesis with expert proofreading, correcting grammatical errors and improving clarity.",
            link: "/services/proofreading",
            color: "#8dd000",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
        },
        {
            title: "Synopsis Writing",
            icon: FaFileAlt,
            desc: "Concise and comprehensive overviews of your PhD research, capturing key objectives and methodology.",
            link: "/services/research-proposal",
            color: "#0a4d4e",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
        },
        {
            title: "Literature Review",
            icon: FaBook,
            desc: "Critical analysis of existing work to establish the context and significance of your research.",
            link: "/services/literature-review",
            color: "#1a7f7f",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
        },
        {
            title: "Scopus/SCI Paper",
            icon: FaJournalWhills,
            desc: "Publish your research in reputed journals. We help structure findings and adhere to journal guidelines.",
            link: "/journal/scopus",
            color: "#6ab800",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80"
        },
        {
            title: "Journal Publication",
            icon: FaGlobe,
            desc: "Navigate the publication process smoothly with guidance on formatting, submission, and reviewer responses.",
            link: "/services/journal-publication",
            color: "#8dd000",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
        },
        {
            title: "Research Proposal",
            icon: FaClipboardList,
            desc: "Plagiarism-free proposals outlining objectives and methodology to increase approval chances.",
            link: "/services/research-proposal",
            color: "#0a4d4e",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
        },
        {
            title: "A-Z Development",
            icon: FaCode,
            desc: "Complete end-to-end software development services from concept to deployment for research projects.",
            link: "/a-z-development",
            color: "#1a7f7f",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
        },
        {
            title: "AI Plagiarism Reduction",
            icon: FaRobot,
            desc: "Advanced AI-powered plagiarism detection and reduction services ensuring 100% original content.",
            link: "/services/plagiarism-reduction",
            color: "#6ab800",
            image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="services" className="section-padding" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)" }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>
                        Comprehensive <span className="text-gradient">PhD Support</span> Services
                    </h2>
                    <p style={{ maxWidth: "700px", margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
                        From admission to publication, we provide end-to-end support for your entire research journey.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {services.map((service, index) => (
                        <Link to={service.link} key={index} style={{ textDecoration: "none" }}>
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                                className="service-card"
                                style={{
                                    background: "white",
                                    borderRadius: "var(--radius-xl)",
                                    boxShadow: "var(--shadow-lg)",
                                    minHeight: "380px",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    border: "1px solid var(--border-light)",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                {/* Background Image with Overlay */}
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "180px",
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}>
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `linear-gradient(135deg, ${service.color}cc 0%, ${service.color}99 100%)`
                                    }}></div>
                                </div>

                                {/* Icon - Overlapping Image */}
                                <div style={{
                                    position: "relative",
                                    marginTop: "140px",
                                    marginLeft: "2rem",
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "16px",
                                    background: "white",
                                    boxShadow: "var(--shadow-lg)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: service.color,
                                    fontSize: "1.75rem",
                                    zIndex: 2
                                }}>
                                    <service.icon />
                                </div>

                                {/* Content */}
                                <div style={{
                                    padding: "1.5rem 2rem 2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1
                                }}>
                                    <h3 style={{
                                        fontSize: "1.375rem",
                                        fontWeight: "700",
                                        marginBottom: "0.75rem",
                                        color: "var(--heading-color)",
                                        fontFamily: "var(--font-heading)"
                                    }}>
                                        {service.title}
                                    </h3>

                                    <p style={{
                                        color: "var(--text-secondary)",
                                        lineHeight: "1.6",
                                        fontSize: "0.9375rem",
                                        marginBottom: "0",
                                        flex: 1
                                    }}>
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Hover Arrow Indicator */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "1.5rem",
                                    right: "2rem",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background: `${service.color}15`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: service.color,
                                    fontSize: "0.875rem",
                                    transition: "all 0.3s ease"
                                }}>
                                    →
                                </div>

                                <style>{`
                                    .service-card:hover {
                                        box-shadow: var(--shadow-xl);
                                    }
                                `}</style>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Services;
