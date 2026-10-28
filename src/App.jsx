
import { useState } from "react";
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Globe,
  ChevronDown,
  Leaf,
  Scissors,
  Quote,
} from "lucide-react";

const REGISTER_URL =
  "https://champarena.co.in/e/the-chanakya-council-mun";

const BROCHURE_URL =
  "https://drive.google.com/file/d/1ChDsQg5mgs1BUsv8aG48RJZXtixpHa05/view";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <header className="floating-nav">
          <a
            className="nav-wordmark"
            href="#home"
            onClick={closeMenu}
            aria-label="Chanakya MUN home"
          >
            <span className="nav-wordmark-main">CHANAKYA</span>
            <span className="nav-wordmark-sub">चाणक्य MUN</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>

            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <FileText size={16} />
              Brochure
            </a>

            <a
              className="nav-register"
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Register <ArrowUpRight size={16} />
            </a>
          </nav>
        </header>

        <div className="hero-content">
          <p className="hero-eyebrow">
            POLICY · DIPLOMACY · LEADERSHIP
          </p>

          <h1 className="hero-title">CHANAKYA</h1>
          <p className="hero-hindi-title">चाणक्य MUN</p>
          <p className="hero-subtitle">Model United Nations</p>

          <div className="hero-date">
            <div>
              <span>16th and 17th</span>
              <strong>January 2027</strong>
            </div>
          </div>

          <div className="hero-divider" />

          <h2 className="hero-slogan">
            नीति से नेतृत्व, तर्क से विजय
          </h2>

          <p className="hero-english-slogan">
            Leadership through policy, victory through reasoning
          </p>

          <div className="hero-actions">
            <a
              className="action-button register-button"
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              Register <ArrowUpRight size={17} />
            </a>

            <a
              className="action-button brochure-button"
              href={BROCHURE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={17} />
              Brochure
            </a>
          </div>

          <div className="location-card">
            <div className="location-icon">
              <MapPin size={24} strokeWidth={1.9} />
            </div>

            <div className="location-text">
              <strong>Online</strong>
              <span>Join from anywhere</span>
            </div>

            <Globe className="location-globe" size={23} />
          </div>

          <a className="scroll-cue" href="#about">
            <span>Discover Chanakya</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </section>

      {/* ABOUT CHANAKYA MUN — REPLACEMENT SECTION */}
      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-visual">
            <img
              className="about-photo"
              src={ABOUT_IMAGE}
              alt="People working together and exchanging ideas"
              loading="lazy"
            />

            <div className="about-quote-card">
              <div className="quote-mark">
                <Quote size={28} />
              </div>

              <blockquote>
                “Great leaders are not born with answers;
                they are shaped by the courage to ask better questions.”
              </blockquote>

              <div className="quote-credit">
                <span />
                THE SPIRIT OF CHANAKYA MUN
              </div>
            </div>

            <div className="about-image-label">
              <Leaf size={15} />
              THINK. DEBATE. LEAD.
            </div>
          </div>

          <div className="about-copy">
            <p className="section-eyebrow">
              THE CHANAKYA COUNCIL
            </p>

            <h2 className="about-title">
              About
              <br />
              <span>Chanakya MUN</span>
            </h2>

            <div className="section-divider about-divider" />

            <p className="about-lead">
              Where young minds meet the world's most pressing
              questions.
            </p>

            <p className="about-description">
              Chanakya MUN is a platform for aspiring diplomats,
              thoughtful debaters, and future leaders to explore
              global issues, challenge perspectives, and discover
              the power of informed dialogue.
            </p>

            <p className="about-description">
              Inspired by the strategic wisdom of Chanakya, we
              believe that leadership begins with knowledge,
              progress begins with discussion, and meaningful
              change begins with the courage to think differently.
            </p>

            <div className="about-principles">
              <div className="principle-item">
                <div className="principle-icon">
                  <Leaf size={19} />
                </div>
                <div>
                  <strong>Think beyond boundaries</strong>
                  <span>Explore issues with curiosity and perspective.</span>
                </div>
              </div>

              <div className="principle-item">
                <div className="principle-icon">
                  <Scissors size={19} />
                </div>
                <div>
                  <strong>Debate with purpose</strong>
                  <span>Turn arguments into dialogue and ideas into policy.</span>
                </div>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <CalendarDays size={22} />
                <div>
                  <span>CONFERENCE DATES</span>
                  <strong>16–17 January 2027</strong>
                </div>
              </div>

              <div className="detail-item">
                <Globe size={22} />
                <div>
                  <span>CONFERENCE MODE</span>
                  <strong>Online</strong>
                </div>
              </div>
            </div>

            <a
              className="action-button register-button about-register"
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join Chanakya MUN
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-heading">
            <p className="section-eyebrow">HAVE QUESTIONS?</p>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about Chanakya MUN.</p>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">
                What is Chanakya MUN?
              </summary>
              <p className="faq-answer">
                Chanakya MUN is a Model United Nations conference
                where participants explore global issues, practise
                diplomacy, develop public-speaking skills, and
                engage in thoughtful debate and policy-making.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Who founded Chanakya MUN?
              </summary>
              <p className="faq-answer">
                Chanakya MUN was founded by Shivansh Dixit, a
                young enthusiast passionate about Model United
                Nations, diplomacy, and helping young people
                develop leadership and critical-thinking skills.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                When is Chanakya MUN taking place?
              </summary>
              <p className="faq-answer">
                Chanakya MUN is scheduled for 16th and 17th
                January 2027.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Where will the conference take place?
              </summary>
              <p className="faq-answer">
                The conference will take place online, allowing
                participants to join from anywhere.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                How can I register?
              </summary>
              <p className="faq-answer">
                You can register using our online registration form.{" "}
                <a href={REGISTER_URL} target="_blank" rel="noreferrer">
                  Register here
                </a>.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Where can I find the brochure?
              </summary>
              <p className="faq-answer">
                Read the conference brochure for more information
                about Chanakya MUN.{" "}
                <a href={BROCHURE_URL} target="_blank" rel="noreferrer">
                  View the brochure
                </a>.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* BROCHURE SECTION */}
      <section className="brochure-section" id="brochure">
        <div className="brochure-inner">
          <div className="brochure-icon">
            <FileText size={27} />
          </div>

          <p className="section-eyebrow">YOUR NEXT STEP</p>
          <h2>Explore the Brochure</h2>

          <p>
            Discover the conference details and prepare for
            your Chanakya MUN experience.
          </p>

          <a
            className="action-button brochure-cta"
            href={BROCHURE_URL}
            target="_blank"
            rel="noreferrer"
          >
            View Brochure <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <a className="footer-brand" href="#home">CHANAKYA</a>
        <p className="footer-hindi">चाणक्य MUN</p>
        <p className="footer-tagline">नीति से नेतृत्व, तर्क से विजय</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#faq">FAQs</a>
          <a href={BROCHURE_URL} target="_blank" rel="noreferrer">
            Brochure
          </a>
          <a href={REGISTER_URL} target="_blank" rel="noreferrer">
            Register
          </a>
        </div>

        <p className="footer-copyright">
          © 2027 Chanakya MUN. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
