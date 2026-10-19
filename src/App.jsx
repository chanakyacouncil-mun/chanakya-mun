
import React from "react";
import {
  Home,
  CircleHelp,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const BROCHURE_URL =
  "https://drive.google.com/file/d/1ChDsQg5mgs1BUsv8aG48RJZXtixpHa05/view";

const REGISTER_URL =
  "https://champarena.co.in/e/the-chanakya-council-mun";

const faqs = [
  {
    question: "What is Chanakya MUN?",
    answer:
      "Chanakya MUN is a youth-led Model United Nations organization dedicated to helping students discover their potential through diplomacy, debate, public speaking, and critical thinking. Inspired by the values of strategic thought, leadership, and reasoned decision-making, Chanakya MUN provides a platform for young minds to explore global issues, represent perspectives, negotiate solutions, and develop the confidence to lead. Our vision is to nurture informed, articulate, and responsible future leaders.",
  },
  {
    question: "Who is the Founder of Chanakya MUN?",
    answer:
      "Chanakya MUN was founded by Shivansh Dixit, a 13-year-old passionate about Model United Nations, diplomacy, and leadership. Driven by a love for debate, policy discussions, and intellectual growth, Shivansh envisioned a platform where young people could express their ideas, challenge perspectives, and learn to lead with confidence. Through Chanakya MUN, he aims to make meaningful MUN experiences accessible to ambitious students and inspire the next generation of thoughtful leaders.",
  },
  {
    question: "Where is Chanakya MUN taking place?",
    answer:
      "Chanakya MUN is being conducted entirely online, allowing delegates to participate remotely from their own locations. You can engage in committee discussions, exchange ideas, collaborate with fellow delegates, and experience the spirit of Model United Nations without travelling to a physical venue. Check the official conference announcements and brochure for the online platform, schedule, and participation instructions.",
  },
];

function FAQSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-layout">
        <div className="faq-visual">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning and collaborating together"
            loading="lazy"
          />

          <div className="faq-image-caption">
            <span>CHANAKYA MUN</span>
            <p>Ideas. Diplomacy. Leadership.</p>
          </div>
        </div>

        <div className="faq-content">
          <p className="faq-eyebrow">KNOW US BETTER</p>

          <h2 className="faq-heading">
            Frequently Asked Questions
          </h2>

          <p className="faq-intro">
            Everything you need to know about Chanakya MUN.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                className="faq-item"
                key={faq.question}
                open={index === 0}
              >
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="faq-chevron"
                    size={21}
                  />
                </summary>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-more-link"
          >
            Explore our brochure
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="page" id="home">
      <div className="paper-grain" aria-hidden="true" />

      <header className="topbar">
        <a
          className="wordmark"
          href="#home"
          aria-label="Chanakya MUN home"
        >
          <span className="wordmark-title">
            CHANAKYA
          </span>

          <span className="wordmark-subtitle">
            MODEL UNITED NATIONS
          </span>
        </a>

        <nav className="nav-actions" aria-label="Main navigation">
          <a
            className="icon-link"
            href="#home"
            aria-label="Home"
            title="Home"
          >
            <Home size={19} />
          </a>

          <a
            className="icon-link"
            href="#faq"
            aria-label="Frequently asked questions"
            title="About Chanakya MUN"
          >
            <CircleHelp size={19} />
          </a>

          <a
            className="pill pill-dark"
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Brochure
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="event-title">
        <div className="hero-content">
          <p className="eyebrow">
            A forum for ideas, diplomacy &amp; leadership
          </p>

          <div className="ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <h1 id="event-title">
            CHANAKYA <span>MUN</span>
          </h1>

          <p className="hindi-title" lang="hi">
            चाणक्य MUN
          </p>

          <p className="event-type">
            MODEL UNITED NATIONS
          </p>

          <div className="date-block">
            <p className="date-line">
              16<sup>th</sup> &amp; 17<sup>th</sup>
            </p>

            <p className="month-line">
              January 2027
            </p>
          </div>

          <div className="slogan">
            <p className="slogan-hindi" lang="hi">
              नीति से नेतृत्व, तर्क से विजय
            </p>

            <p className="slogan-english">
              Leadership through policy, victory through reasoning
            </p>
          </div>

          <a
            className="pill pill-register"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
            <ArrowUpRight size={16} />
          </a>

          <a className="scroll-cue" href="#faq">
            <span>DISCOVER CHANAKYA MUN</span>
            <ChevronDown size={17} />
          </a>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}

