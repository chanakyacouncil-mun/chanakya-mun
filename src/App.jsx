
import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Globe2,
  MapPin,
  Menu,
  BookOpen,
  X,
} from 'lucide-react';

const REGISTER_URL =
  'https://champarena.co.in/e/the-chanakya-council-mun';

const BROCHURE_URL =
  'https://drive.google.com/file/d/1ChDsQg5mgs1BUsv8aG48RJZXtixpHa05/view';

const LOGO_URL = '/chanakya-council-logo.jpg';

const faqs = [
  {
    question: 'What is The Chanakya Council MUN?',
    answer:
      'The Chanakya Council is a Model United Nations conference where students step into the roles of diplomats, research global issues, debate different perspectives, and work together to develop practical solutions.',
  },
  {
    question: 'Who can participate?',
    answer:
      'Students interested in diplomacy, public speaking, international relations, policy, and debate are welcome. Please check the registration page and conference brochure for the current eligibility and committee details.',
  },
  {
    question: 'How do I register?',
    answer: (
      <>
        Use the{' '}
        <a href={REGISTER_URL} target="_blank" rel="noreferrer">
          official registration page
        </a>{' '}
        to view the available details and complete your registration.
      </>
    ),
  },
  {
    question: 'Where can I find the conference details?',
    answer: (
      <>
        You can read the{' '}
        <a href={BROCHURE_URL} target="_blank" rel="noreferrer">
          conference brochure
        </a>{' '}
        for more information. Please refer to the official
        registration page for the latest updates.
      </>
    ),
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <nav className="floating-nav" aria-label="Main navigation">
          {/* NAVBAR LOGO */}
          <a
            className="nav-wordmark"
            href="#home"
            onClick={closeMenu}
            aria-label="The Chanakya Council home"
          >
            <img
              className="nav-council-logo"
              src={LOGO_URL}
              alt="The Chanakya Council"
            />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>HOME</a>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#brochure" onClick={closeMenu}>BROCHURE</a>

            <a
              className="nav-register"
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              REGISTER <ArrowRight size={14} />
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-eyebrow">THE CHANAKYA COUNCIL</p>

          {/* MAIN LOGO WITH SMALLER CHANAKYA TITLE BELOW */}
          <img
            className="hero-council-logo"
            src={LOGO_URL}
            alt="The Chanakya Council emblem"
          />

          <h1 className="hero-title">CHANAKYA</h1>

          <p className="hero-hindi-title">चाणक्य MUN</p>

          <p className="hero-subtitle">Model United Nation</p>

          <div
            className="hero-date"
            aria-label="Conference dates: 16th and 17th January 2027"
          >
            <div>
              <span>16th and 17th</span>
              <strong>January 2027</strong>
            </div>
          </div>

          <div className="hero-divider" />

          <p className="hero-slogan">
            नीति से नेतृत्व, तर्क से विजय
          </p>

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
              Register <ArrowRight size={16} />
            </a>

            <a
              className="action-button brochure-button"
              href={BROCHURE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Brochure <BookOpen size={16} />
            </a>
          </div>

          <a
            className="location-card"
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="location-icon">
              <MapPin size={23} />
            </span>

            <span className="location-text">
              <strong>Online</strong>
              <span>Join from anywhere</span>
            </span>

            <Globe2 className="location-globe" size={23} />
          </a>
        </div>

        <a className="scroll-cue" href="#about">
          <span>DISCOVER CHANAKYA</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <p className="section-eyebrow">ABOUT THE CONFERENCE</p>

          <h2 className="about-title">
            Ideas into policy.
            <br />
            Voices into change.
          </h2>

          <div className="section-divider" />

          <p className="about-description">
            Chanakya MUN is a platform for aspiring diplomats,
            thoughtful debaters, and future leaders to engage with
            global issues, develop informed perspectives, and
            experience the art of diplomacy.
          </p>

          <p className="about-description">
            Guided by the spirit of strategic thinking and reasoned
            debate, we aim to cultivate leadership through policy
            and victory through reasoning.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <CalendarDays size={25} />
              <div>
                <span>CONFERENCE DATES</span>
                <strong>16–17 January 2027</strong>
              </div>
            </div>

            <div className="detail-item">
              <Globe2 size={25} />
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
            Become a Delegate <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-heading">
            <p className="section-eyebrow">NEED TO KNOW</p>

            <h2>Frequently Asked Questions</h2>

            <p>
              Quick answers to help you get ready for the conference.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                className="faq-item"
                key={faq.question}
                defaultOpen={index === 0}
              >
                <summary className="faq-question">
                  {faq.question}
                </summary>

                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE SECTION */}
      <section className="brochure-section" id="brochure">
        <div className="brochure-inner">
          <div className="brochure-icon">
            <BookOpen size={25} />
          </div>

          <p className="section-eyebrow">
            YOUR GUIDE TO THE CONFERENCE
          </p>

          <h2>Explore the Brochure</h2>

          <p>
            Find the conference information, review the details,
            and get ready to take part in the conversation.
          </p>

          <a
            className="action-button brochure-cta"
            href={BROCHURE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open Conference Brochure <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          CHANAKYA
        </a>

        <p className="footer-hindi">चाणक्य परिषद</p>

        <p className="footer-tagline">
          नीति से नेतृत्व, तर्क से विजय
        </p>

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
          © {new Date().getFullYear()} The Chanakya Council.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
            }
