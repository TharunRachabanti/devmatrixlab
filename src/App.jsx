import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

// Page Components
import Projects from './components/Projects';
import Thesis from './components/Thesis';
import Dissertation from './components/Dissertation';
import ResearchPaper from './components/ResearchPaper';
import Proofreading from './components/Proofreading';
import Implementation from './components/Implementation';
import LiteratureReview from './components/LiteratureReview';
import Methodology from './components/Methodology';
import JournalPublication from './components/JournalPublication';
import ResearchProposal from './components/ResearchProposal';
import SCIJournals from './components/SCIJournals';
import ScopusJournals from './components/ScopusJournals';
import Assignment from './components/Assignment';
import AZDevelopment from './components/AZDevelopment';
import ResearchTopics from './components/ResearchTopics';
import WhyDevMatrixLab from './components/WhyDevMatrixLab';
import ContactPage from './components/ContactPage';

// Layout Component
const Layout = ({ children }) => {
  return (
    <div style={{ overflowX: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <div id="about"></div>
    <Services />
    <Testimonials />
    <Team />
    <WhyChooseUs />
    <FAQ />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/a-z-development" element={<AZDevelopment />} />
          <Route path="/research-topics" element={<ResearchTopics />} />
          <Route path="/why-devmatrixlab" element={<WhyDevMatrixLab />} />

          {/* Service Routes */}
          <Route path="/services/thesis" element={<Thesis />} />
          <Route path="/services/dissertation" element={<Dissertation />} />
          <Route path="/services/research-paper" element={<ResearchPaper />} />
          <Route path="/services/proofreading" element={<Proofreading />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/literature-review" element={<LiteratureReview />} />
          <Route path="/services/methodology" element={<Methodology />} />
          <Route path="/services/research-proposal" element={<ResearchProposal />} />
          <Route path="/services/journal-publication" element={<JournalPublication />} />

          {/* Journal Routes */}
          <Route path="/journal/sci" element={<SCIJournals />} />
          <Route path="/journal/scopus" element={<ScopusJournals />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
