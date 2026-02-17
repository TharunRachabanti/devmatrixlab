import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [journalDropdown, setJournalDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNav(false);
    setServicesDropdown(false);
    setJournalDropdown(false);
  }, [location]);

  const handleScrollLink = (link) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const servicesLinks = [
    { name: "Thesis Writing", path: "/services/thesis" },
    { name: "Dissertation", path: "/services/dissertation" },
    { name: "Research Paper", path: "/services/research-paper" },
    { name: "Proofreading", path: "/services/proofreading" },
    { name: "Implementation", path: "/services/implementation" },
    { name: "Literature Review", path: "/services/literature-review" },
    { name: "Methodology", path: "/services/methodology" },
    { name: "Research Proposal", path: "/services/research-proposal" },
    { name: "Plagiarism Reduction", path: "/services/plagiarism-reduction" },
    { name: "A-Z Development", path: "/a-z-development" },
  ];

  const journalLinks = [
    { name: "Journal Publication", path: "/services/journal-publication" },
    { name: "SCI Journals", path: "/journal/sci" },
    { name: "Scopus Journals", path: "/journal/scopus" },
  ];

  return (
    <div>
      {/* Premium Top Bar */}
      <div className="desktop-only" style={{
        background: "linear-gradient(135deg, #0a4d4e 0%, #1a7f7f 50%, #0d5f5f 100%)",
        color: "white",
        padding: "12px 0",
        fontSize: "13px",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          <div style={{ display: "flex", gap: "30px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="mailto:devmatrixlab@gmail.com" style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s ease",
              opacity: 0.95,
              fontWeight: "500"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.95";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <FaEnvelope style={{ fontSize: "13px" }} />
              <span>devmatrixlab@gmail.com</span>
            </a>
            <a href="tel:+919347967147" style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s ease",
              opacity: 0.95,
              fontWeight: "500"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.95";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <FaPhoneAlt style={{ fontSize: "13px" }} />
              <span>+91 9347967147</span>
            </a>
          </div>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            {[
              { icon: FaFacebook, href: "#", label: "Facebook" },
              { icon: FaTwitter, href: "#", label: "Twitter" },
              { icon: FaInstagram, href: "#", label: "Instagram" },
              { icon: FaLinkedin, href: "#", label: "LinkedIn" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                style={{
                  color: "white",
                  fontSize: "15px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: 0.9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Main Navbar */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: scrolled ? "1px solid rgba(10, 77, 78, 0.08)" : "1px solid rgba(0,0,0,0.03)"
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: scrolled ? '72px' : '85px',
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "0 20px"
        }}>

          {/* Premium Logo */}
          <div
            style={{
              cursor: 'pointer',
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              alignItems: "center"
            }}
            onClick={() => navigate("/")}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src="/imag/devmatrixlab.png"
              alt="DevMatrixLab"
              style={{
                height: scrolled ? "clamp(36px, 8vw, 48px)" : "clamp(42px, 10vw, 58px)",
                objectFit: "contain",
                transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
              }}
            />
          </div>

          {/* Premium Desktop Menu */}
          <ul className="hidden md:flex" style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center',
            margin: 0,
            listStyle: "none",
            padding: 0
          }}>
            <li>
              <RouterLink to="/" className="premium-nav-link">Home</RouterLink>
            </li>
            <li>
              {isHome ? (
                <ScrollLink to="about" smooth={true} duration={500} className="premium-nav-link cursor-pointer">
                  About Us
                </ScrollLink>
              ) : (
                <RouterLink to="/#about" className="premium-nav-link">About Us</RouterLink>
              )}
            </li>

            {/* Premium Services Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <span className="premium-nav-link cursor-pointer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Services
                <FaChevronDown style={{
                  fontSize: "9px",
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: servicesDropdown ? "rotate(180deg)" : "rotate(0)"
                }} />
              </span>
              <AnimatePresence>
                {servicesDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 15, x: "-50%" }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="premium-dropdown"
                  >
                    {servicesLinks.map((link, idx) => (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <RouterLink to={link.path} className="premium-dropdown-item">
                          <span className="dropdown-item-content">
                            {link.name}
                            <FaArrowRight className="dropdown-arrow" />
                          </span>
                        </RouterLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Premium Journal Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setJournalDropdown(true)}
              onMouseLeave={() => setJournalDropdown(false)}
            >
              <span className="premium-nav-link cursor-pointer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Journals
                <FaChevronDown style={{
                  fontSize: "9px",
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: journalDropdown ? "rotate(180deg)" : "rotate(0)"
                }} />
              </span>
              <AnimatePresence>
                {journalDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 15, x: "-50%" }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="premium-dropdown"
                  >
                    {journalLinks.map((link, idx) => (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <RouterLink to={link.path} className="premium-dropdown-item">
                          <span className="dropdown-item-content">
                            {link.name}
                            <FaArrowRight className="dropdown-arrow" />
                          </span>
                        </RouterLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li><RouterLink to="/projects" className="premium-nav-link">Projects</RouterLink></li>
            <li><RouterLink to="/assignment" className="premium-nav-link">Assignment</RouterLink></li>
            <li><RouterLink to="/why-devmatrixlab" className="premium-nav-link">Why Us</RouterLink></li>

            {/* Premium CTA Button */}
            <li>
              <RouterLink
                to="/contact"
                className="premium-cta-button"
              >
                <span className="cta-text">Contact Us</span>
                <FaArrowRight className="cta-icon" />
              </RouterLink>
            </li>
          </ul>

          {/* Premium Mobile Menu Toggle */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer"
            style={{
              color: nav ? 'white' : 'var(--accent-color)',
              padding: '10px',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              background: nav ? "linear-gradient(135deg, #0a4d4e 0%, #1a7f7f 100%)" : "rgba(10, 77, 78, 0.05)",
              boxShadow: nav ? "0 4px 12px rgba(10, 77, 78, 0.3)" : "none"
            }}
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)",
                borderTop: "1px solid var(--border-light)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
              }}
            >
              <div className="container" style={{ padding: "24px 20px" }}>
                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}>
                  <li>
                    <RouterLink to="/" className="premium-mobile-link">Home</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/#about" className="premium-mobile-link">About Us</RouterLink>
                  </li>
                  <li>
                    <div
                      className="premium-mobile-link premium-mobile-dropdown-trigger"
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <span>Services</span>
                      <FaChevronDown style={{
                        fontSize: "10px",
                        transition: "transform 0.3s ease",
                        transform: servicesDropdown ? "rotate(180deg)" : "rotate(0)"
                      }} />
                    </div>
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{
                            paddingLeft: "20px",
                            marginTop: "8px",
                            overflow: "hidden"
                          }}
                        >
                          {servicesLinks.map((link) => (
                            <li key={link.path}>
                              <RouterLink to={link.path} className="premium-mobile-sublink">{link.name}</RouterLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li>
                    <div
                      className="premium-mobile-link premium-mobile-dropdown-trigger"
                      onClick={() => setJournalDropdown(!journalDropdown)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <span>Journals</span>
                      <FaChevronDown style={{
                        fontSize: "10px",
                        transition: "transform 0.3s ease",
                        transform: journalDropdown ? "rotate(180deg)" : "rotate(0)"
                      }} />
                    </div>
                    <AnimatePresence>
                      {journalDropdown && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{
                            paddingLeft: "20px",
                            marginTop: "8px",
                            overflow: "hidden"
                          }}
                        >
                          {journalLinks.map((link) => (
                            <li key={link.path}>
                              <RouterLink to={link.path} className="premium-mobile-sublink">{link.name}</RouterLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li><RouterLink to="/projects" className="premium-mobile-link">Projects</RouterLink></li>
                  <li><RouterLink to="/assignment" className="premium-mobile-link">Assignment</RouterLink></li>
                  <li><RouterLink to="/why-devmatrixlab" className="premium-mobile-link">Why Us</RouterLink></li>
                  <li style={{ marginTop: "8px" }}>
                    <RouterLink to="/contact" className="premium-mobile-cta">
                      Contact Us
                      <FaArrowRight style={{ fontSize: "12px" }} />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        /* Premium Navigation Links */
        .premium-nav-link {
          color: var(--text-main);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 10px 0;
          letter-spacing: 0.01em;
        }
        
        .premium-nav-link:hover {
          color: var(--accent-color);
        }
        
        .premium-nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-color) 0%, var(--highlight-color) 100%);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        
        .premium-nav-link:hover::after {
          width: 100%;
        }

        /* Premium Dropdown */
        .premium-dropdown {
          position: absolute;
          top: calc(100% + 20px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          min-width: 260px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
          border-radius: 16px;
          padding: 12px;
          list-style: none;
          margin: 0;
          z-index: 10001;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.98);
        }
        
        .premium-dropdown::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background: white;
          border-left: 1px solid rgba(0,0,0,0.04);
          border-top: 1px solid rgba(0,0,0,0.04);
        }

        .dropdown-item-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .dropdown-arrow {
          font-size: 11px;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-dropdown-item {
          display: block;
          padding: 12px 18px;
          color: var(--text-main);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-dropdown-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-color) 0%, var(--highlight-color) 100%);
          transform: scaleY(0);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 2px 2px 0;
        }
        
        .premium-dropdown-item:hover {
          background: linear-gradient(to right, rgba(10, 77, 78, 0.06) 0%, rgba(10, 77, 78, 0.02) 100%);
          color: var(--accent-color);
          padding-left: 24px;
        }
        
        .premium-dropdown-item:hover::before {
          transform: scaleY(1);
        }

        .premium-dropdown-item:hover .dropdown-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Premium CTA Button */
        .premium-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #6ab800 0%, #8dd000 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(106, 184, 0, 0.3);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.02em;
        }

        .premium-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .premium-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(106, 184, 0, 0.4);
          background: linear-gradient(135deg, #5ca700 0%, #7cc000 100%);
        }

        .premium-cta-button:hover::before {
          opacity: 1;
        }

        .premium-cta-button:active {
          transform: translateY(-1px);
        }

        .cta-icon {
          font-size: 12px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-cta-button:hover .cta-icon {
          transform: translateX(4px);
        }

        /* Premium Mobile Styles */
        .premium-mobile-link {
          display: block;
          padding: 14px 18px;
          color: var(--text-main);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          background: transparent;
          border-left: 3px solid transparent;
        }
        
        .premium-mobile-link:hover {
          background: linear-gradient(to right, rgba(10, 77, 78, 0.06) 0%, rgba(10, 77, 78, 0.02) 100%);
          color: var(--accent-color);
          border-left-color: var(--accent-color);
          padding-left: 22px;
        }

        .premium-mobile-dropdown-trigger {
          cursor: pointer;
        }

        .premium-mobile-sublink {
          display: block;
          padding: 10px 16px;
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 4px;
        }
        
        .premium-mobile-sublink:hover {
          background: rgba(10, 77, 78, 0.04);
          color: var(--accent-color);
          padding-left: 20px;
        }

        .premium-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #6ab800 0%, #8dd000 100%);
          color: white;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(106, 184, 0, 0.3);
        }

        .premium-mobile-cta:active {
          transform: scale(0.98);
          box-shadow: 0 2px 8px rgba(106, 184, 0, 0.3);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .hidden.md\\:flex {
            display: none !important;
          }
          .md\\:hidden {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .hidden.md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .premium-nav-link {
            font-size: 14px;
          }
          
          .premium-dropdown {
            min-width: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
