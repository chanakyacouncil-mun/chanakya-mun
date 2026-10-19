
import React from "react";
import {
  Home,
  CircleHelp,
  ArrowUpRight,
} from "lucide-react";

const BROCHURE_URL =
  "https://drive.google.com/file/d/1ChDsQg5mgs1BUsv8aG48RJZXtixpHa05/view";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHp8VdJ5KmRHe-iog6ss5duwlU9GV-p1h1y-eOZM6_35EVeQ/viewform";

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
            <Home size={19} strokeWidth={2.2} />
          </a>

          <a
            className="icon-link"
            href="#about"
            aria-label="About Chanakya MUN"
            title="About"
          >
            <CircleHelp size={19} strokeWidth={2} />
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

          <div className="slogan" id="about">
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

          <p className="footer-note">
            Where ideas shape tomorrow.
          </p>
        </div>
      </section>
    </main>
  );
}
