import { useState } from "react";
import "./App.css";
import logoImg from "./logo.png"; // make sure logo.png is in src/

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return (
          <div className="page-content">
            <h2>About Us</h2>
            <p>
              The Open Roots Initiative is a free, hands-on sustainability
              education program that combines gardening, basic science, and
              renewable energy engineering to serve youth and communities. We
              create accessible learning gardens where participants—primarily
              children and young people, but open to all ages—learn through
              direct experience: touching soil, building wind turbines, tracing
              water cycles, and harvesting food they can take home.
            </p>
          </div>
        );

      case "curriculum":
        return (
          <div className="page-content">
            <h2>Our Curriculum</h2>

            <div className="card">
              <h3>Module 1: The Living Soil</h3>
              <p>
                Biology + Chemistry • Composting • Carbon Cycle • Worm Bins
                <br />
                Take-home: Small bag of compost
              </p>
            </div>

            <div className="card">
              <h3>Module 2: The Water Journey</h3>
              <p>
                Hydrology • Irrigation Testing • Solar Stills
                <br />
                Take-home: Illustrated water cycle card
              </p>
            </div>

            <div className="card">
              <h3>Module 3: The Energy Shift</h3>
              <p>
                Wind Turbines • Solar Ovens • Renewable Engineering
                <br />
                Take-home: Mini blade kit, Certificate of Completion
              </p>
            </div>

            <div className="card">
              <h3>Module 4: The Food Connection</h3>
              <p>
                Nutrition • Food Systems • Seed Saving • Garden Harvest
                <br />
                Take-home: Fresh vegetables, seed packet
              </p>
            </div>
          </div>
        );

      case "getinvolved":
        return (
          <div className="page-content">
            <h2>Get Involved</h2>
            <div className="card">
              <h3>Volunteer With Us</h3>
              <p>
                Support workshops, mentor students, and help expand our reach.
              </p>
            </div>
            <div className="card">
              <h3>Community Partnerships</h3>
              <p>
                Schools, local organizations, and families can collaborate to
                bring sustainability education to their communities.
              </p>
            </div>
          </div>
        );

      case "sponsorship":
        return (
          <div className="page-content">
            <h2>Sponsorship & Funding</h2>
            <p>
              Your support helps provide materials, build tools, and expand
              access to environmental education. We welcome grant partners,
              sponsors, and community investors.
            </p>
          </div>
        );

      case "faq":
        return (
          <div className="page-content">
            <h2>Frequently Asked Questions</h2>
            <p>
              <strong>Who can participate?</strong> Students, families, schools.
            </p>
            <p>
              <strong>Do I need experience?</strong> No experience required.
            </p>
            <p>
              <strong>How do I join?</strong> Contact us below.
            </p>
          </div>
        );

      case "contact":
        return (
          <div className="page-content">
            <h2>Contact Us</h2>
            <p>Email: theopenrootsinitative@gmail.com</p>
            <p>Phone: 587-899-5868</p>
            <p>Email to get in contact or for any questions.</p>
          </div>
        );

      default:
        return (
          <>
            <section className="hero">
              <img src={logoImg} alt="Open Roots Initiative Logo" className="hero-logo" />
              <div className="hero-content">
                <h1>The Open Roots Initiative</h1>
                <p>
                  The Open Roots Initiative is a free, hands-on sustainability
                  education program for youth and communities. Participants
                  learn by planting, building, and experimenting with soil,
                  water, energy, and food systems. Our mission: to make
                  sustainability education tangible, accessible, and
                  community-driven.
                </p>
                <button onClick={() => setPage("getinvolved")}>Get Involved</button>
              </div>
            </section>

            <section className="page-content">
              <h2>Our Focus Areas</h2>
              <div className="grid">
                <div className="card">🌱 Soil & Ecology</div>
                <div className="card">💧 Water Systems</div>
                <div className="card">⚡ Renewable Energy</div>
                <div className="card">🥕 Food & Nutrition</div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="nav-inner">
          <div className="logo" onClick={() => setPage("home")}>
            <img src={logoImg} alt="Logo" className="logo-image" />
            <span>The Open Roots Initiative</span>
          </div>
          <nav>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("curriculum")}>Curriculum</button>
            <button onClick={() => setPage("getinvolved")}>Get Involved</button>
            <button onClick={() => setPage("sponsorship")}>Funding</button>
            <button onClick={() => setPage("faq")}>FAQ</button>
            <button onClick={() => setPage("contact")}>Contact</button>
          </nav>
        </div>
      </header>

      <main className="content">{renderPage()}</main>

      <footer className="footer">
        © {new Date().getFullYear()} The Open Roots Initiative
      </footer>
    </div>
  );
}

export default App;





