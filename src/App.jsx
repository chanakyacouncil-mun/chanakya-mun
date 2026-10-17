
import { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Globe2,
  CalendarDays,
  BookOpen,
  Users
} from 'lucide-react';

const BROCHURE_URL =
  'https://drive.google.com/file/d/1ChDsQg5mgs1BUsv8aG48RJZXtixpHa05/view?usp=drivesdk';

const REGISTER_URL =
  'https://champarena.co.in/e/the-chanakya-council-mun';

const TEAM_URL =
  'https://forms.gle/MZjSKYZZB7yfbQjr7';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a
          className="brand-mini"
          href="#top"
          aria-label="The Chanakya Council home"
        >
          
          />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
          <span className="menu-label">MENU</span>
        </button>

        {menuOpen && (
          <nav className="dropdown">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Brochure <ArrowUpRight size={15} />
            </a>

            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>

            <a
              href={TEAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join our team
            </a>
          </nav>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div
          className="architecture arch-left"
          aria-hidden="true"
        >
          <div className="dome" />
          <div className="pillars" />
        </div>

        <div
          className="architecture arch-right"
          aria-hidden="true"
        >
          <div className="tower-top" />
          <div className="tower-body" />
        </div>
            
            />
          </div>

          <p className="eyebrow">
            MODEL UNITED NATIONS
          </p>

          <h1 id="hero-title">
            CHANAKYA <span>MUN</span>
          </h1>

          <p className="date-line">
            <span>
              16<sup>th</sup> &amp; 17<sup>th</sup>
            </span>
            <br />
            January 2027
          </p>

          <p className="hindi-title" lang="hi">
            चाणक्य MUN
          </p>

          <p className="motto" lang="hi">
            नीति से नेतृत्व, तर्क से विजय
          </p>

          <p className="motto-translation">
            Strategy to lead. Reason to prevail.
          </p>

          <div className="actions">
            <a
              className="pill pill-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
            >
              Register <ArrowUpRight size={16} />
            </a>

            <a
              className="pill pill-outline"
              href={TEAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join Our Team <ArrowUpRight size={16} />
            </a>
          </div>

          <a
            className="location-card"
            href={BROCHURE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="location-icon">
              <Globe2 size={23} />
            </span>

            <span>
              <strong>Online Conference</strong>
              <small>Join from anywhere</small>
            </span>

            <ArrowUpRight
              className="card-arrow"
              size={18}
            />
          </a>

          <a
            className="brochure-link"
            href={BROCHURE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen size={16} />
            View Conference Brochure
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="hero-footnote">
          <span>POLICY · DIPLOMACY · LEADERSHIP</span>
          <span>16—17 JANUARY 2027</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-mark">
          <img
            src="/chanakya-logo.png"
            alt="The Chanakya Council"
          />
        </div>

        <p className="section-kicker">
          A PLATFORM FOR IDEAS
        </p>

        <h2>
          Think deeply. Speak boldly.
          <br />
          <em>Lead thoughtfully.</em>
        </h2>

        <p className="about-copy">
          Step into diplomacy, challenge perspectives,
          and turn informed debate into meaningful
          solutions at The Chanakya Council Model
          United Nations.
        </p>

        <div className="feature-row">
          <div>
            <CalendarDays />
            <strong>Two days</strong>
            <span>16–17 January 2027</span>
          </div>

          <div>
            <Globe2 />
            <strong>Online</strong>
            <span>Participate from anywhere</span>
          </div>

          <div>
            <Users />
            <strong>One community</strong>
            <span>Debate, collaborate, lead</span>
          </div>
        </div>

        <a
          className="bottom-cta"
          href={REGISTER_URL}
          target="_blank"
          rel="noreferrer"
        >
          Take your place at the table
          <ArrowUpRight size={17} />
        </a>
      </section>

      <footer>
        <span>THE CHANAKYA COUNCIL · MUN 2027</span>

        <a
          href={BROCHURE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Brochure
        </a>

        <span lang="hi">
          नीति से नेतृत्व, तर्क से विजय
        </span>
      </footer>
    </main>
  );
          }
