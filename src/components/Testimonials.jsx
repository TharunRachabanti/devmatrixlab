import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Dr. Priya Sharma",
            role: "PhD in Computer Science",
            university: "IIT Delhi",
            rating: 5,
            text: "DevMatrixLab helped me complete my PhD thesis with exceptional quality. Their expertise in research methodology and academic writing is unmatched."
        },
        {
            name: "Raj Kumar",
            role: "PhD in Biotechnology",
            university: "University of Hyderabad",
            rating: 5,
            text: "The team's dedication and professionalism are outstanding. They guided me through every step of my research journey, from topic selection to final publication."
        },
        {
            name: "Anjali Reddy",
            role: "PhD in Management",
            university: "JNTU Hyderabad",
            rating: 5,
            text: "Absolutely brilliant service! My thesis was accepted on the first submission. The quality of work and attention to detail exceeded my expectations."
        },
        {
            name: "Vikram Singh",
            role: "PhD in Mechanical Engineering",
            university: "NIT Warangal",
            rating: 5,
            text: "DevMatrixLab's technical expertise and timely delivery helped me publish in SCI journals. Their support was invaluable throughout my PhD journey."
        },
        {
            name: "Lakshmi Menon",
            role: "PhD in Electronics",
            university: "Anna University",
            rating: 5,
            text: "Professional, reliable, and result-oriented. They helped me achieve my academic goals with their comprehensive research support and guidance."
        }
    ];

    return (
        <section className="section-padding" style={{
            background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
            overflow: "hidden",
            position: "relative"
        }}>
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div className="badge badge-accent" style={{ marginBottom: "var(--space-4)" }}>
                        Testimonials
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: "800",
                        color: "var(--primary-900)",
                        marginBottom: "var(--space-4)",
                        lineHeight: "1.2"
                    }}>
                        Success <span className="text-gradient">Stories</span> From Our Scholars
                    </h2>
                    <p style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        color: "var(--text-secondary)",
                        fontSize: "1.125rem",
                        lineHeight: "1.7"
                    }}>
                        Hear from PhD scholars who achieved their academic dreams with our expert guidance and support
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
                    gap: "2rem",
                    marginBottom: "3rem"
                }}>
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            style={{
                                background: "white",
                                borderRadius: "var(--radius-xl)",
                                padding: "2.5rem",
                                boxShadow: "var(--shadow-lg)",
                                border: "1px solid var(--border-light)",
                                position: "relative",
                                transition: "all var(--transition-normal)",
                                cursor: "pointer"
                            }}
                        >
                            {/* Quote Icon */}
                            <div style={{
                                position: "absolute",
                                top: "1.5rem",
                                right: "1.5rem",
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "var(--gradient-primary)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: 0.1
                            }}>
                                <FaQuoteRight style={{ fontSize: "1.5rem", color: "white" }} />
                            </div>

                            {/* Avatar & Info */}
                            <div style={{ marginBottom: "1.5rem" }}>
                                <div style={{
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "50%",
                                    background: index % 2 === 0 ? "var(--gradient-primary)" : "var(--gradient-accent)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.75rem",
                                    fontWeight: "800",
                                    color: "white",
                                    fontFamily: "var(--font-heading)",
                                    boxShadow: "var(--shadow-md)",
                                    marginBottom: "1rem"
                                }}>
                                    {testimonial.name.charAt(0)}
                                </div>

                                <h4 style={{
                                    color: "var(--heading-color)",
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    marginBottom: "0.25rem",
                                    fontFamily: "var(--font-heading)"
                                }}>
                                    {testimonial.name}
                                </h4>
                                <p style={{
                                    color: "var(--accent-color)",
                                    fontSize: "0.9375rem",
                                    fontWeight: "600",
                                    marginBottom: "0.125rem"
                                }}>
                                    {testimonial.role}
                                </p>
                                <p style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.875rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                }}>
                                    <FaGraduationCap style={{ color: "var(--highlight-color)" }} />
                                    {testimonial.university}
                                </p>
                            </div>

                            {/* Stars */}
                            <div style={{
                                display: "flex",
                                gap: "0.25rem",
                                marginBottom: "1rem"
                            }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} style={{
                                        color: "#FFD700",
                                        fontSize: "1rem",
                                        filter: "drop-shadow(0 2px 3px rgba(255, 215, 0, 0.3))"
                                    }} />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p style={{
                                color: "var(--text-main)",
                                fontSize: "1rem",
                                lineHeight: "1.7",
                                marginBottom: "0"
                            }}>
                                "{testimonial.text}"
                            </p>

                            {/* Verified Badge */}
                            <div style={{
                                marginTop: "1.5rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                background: "var(--surface-light)",
                                borderRadius: "var(--radius-full)",
                                fontSize: "0.875rem",
                                color: "var(--accent-color)",
                                fontWeight: "600"
                            }}>
                                <FaCheckCircle style={{ color: "var(--highlight-color)" }} />
                                Verified Scholar
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Slider for remaining testimonials */}
                {testimonials.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto 3rem",
                            position: "relative"
                        }}
                    >
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            style={{ padding: "20px 0 60px" }}
                        >
                            {testimonials.slice(3).map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{
                                        background: "white",
                                        borderRadius: "var(--radius-xl)",
                                        padding: "3rem",
                                        boxShadow: "var(--shadow-lg)",
                                        border: "1px solid var(--border-light)",
                                        textAlign: "center"
                                    }}>
                                        <div style={{
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            background: "var(--gradient-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "2rem",
                                            fontWeight: "800",
                                            color: "white",
                                            fontFamily: "var(--font-heading)",
                                            boxShadow: "var(--shadow-lg)",
                                            margin: "0 auto 1.5rem"
                                        }}>
                                            {testimonial.name.charAt(0)}
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            gap: "0.25rem",
                                            marginBottom: "1.5rem",
                                            justifyContent: "center"
                                        }}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} style={{
                                                    color: "#FFD700",
                                                    fontSize: "1.125rem",
                                                    filter: "drop-shadow(0 2px 3px rgba(255, 215, 0, 0.3))"
                                                }} />
                                            ))}
                                        </div>

                                        <p style={{
                                            color: "var(--text-main)",
                                            fontSize: "1.125rem",
                                            lineHeight: "1.8",
                                            fontStyle: "italic",
                                            marginBottom: "2rem"
                                        }}>
                                            "{testimonial.text}"
                                        </p>

                                        <h4 style={{
                                            color: "var(--heading-color)",
                                            fontSize: "1.375rem",
                                            fontWeight: "700",
                                            marginBottom: "0.25rem",
                                            fontFamily: "var(--font-heading)"
                                        }}>
                                            {testimonial.name}
                                        </h4>
                                        <p style={{
                                            color: "var(--accent-color)",
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            marginBottom: "0.25rem"
                                        }}>
                                            {testimonial.role}
                                        </p>
                                        <p style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.9375rem"
                                        }}>
                                            {testimonial.university}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                )}

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "2rem",
                        maxWidth: "900px",
                        margin: "0 auto"
                    }}
                >
                    {[
                        { number: "500+", label: "Happy Students" },
                        { number: "98%", label: "Success Rate" },
                        { number: "4.9/5", label: "Average Rating" },
                        { number: "100+", label: "Universities" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                textAlign: "center",
                                padding: "2rem 1.5rem",
                                background: "white",
                                borderRadius: "var(--radius-lg)",
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--border-light)",
                                transition: "all var(--transition-normal)"
                            }}
                        >
                            <div style={{
                                fontSize: "2.75rem",
                                fontWeight: "800",
                                background: "var(--gradient-primary)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                marginBottom: "0.5rem",
                                fontFamily: "var(--font-heading)"
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                color: "var(--text-secondary)",
                                fontSize: "1rem",
                                fontWeight: "600"
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: var(--accent-color);
                    background: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    box-shadow: var(--shadow-md);
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 14px;
                }
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: var(--accent-color);
                    opacity: 0.4;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--accent-color);
                }
                .badge-accent {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: rgba(10, 77, 78, 0.1);
                    color: var(--accent-color);
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: 1px solid rgba(10, 77, 78, 0.2);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
