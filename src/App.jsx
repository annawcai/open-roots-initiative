import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return (
          <>
            <h2>About Us</h2>
            <p>
              Open Roots Initiative is a community-driven sustainability
              education program reconnecting people to soil, water, energy,
              and food systems. Through hands-on workshops and collaborative
              learning, we empower communities to build practical environmental
              literacy and long-term resilience.
            </p>
          </>
        );

      case "curriculum":
        return (
          <>
            <h2>Our Curriculum</h2>

            <div className="card">
              <h3>Module 1: The Living Soil</h3>
              <p>Biology + Chemistry • Composting • Carbon Cycle • Worm Bins</p>
            </div>

            <div className="card">
              <h3>Module 2: The Water Journey</h3>
              <p>Hydrology • Irrigation Testing • Solar Stills</p>
            </div>

            <div className="card">
              <h3>Module 3: The Energy Shift</h3>
              <p>Wind Turbines • Solar Ovens • Renewable Engineering</p>
            </div>

            <div className="card">
              <h3>Module 4: The Food Connection</h3>
              <p>Nutrition • Food Systems • Seed Saving • Garden Harvest</p>
            </div>
          </>
        );

      case "getinvolved":
        return (
          <>
            <h2>Get Involved</h2>

            <div className="card">
              <h3>Volunteer With Us</h3>
              <p>Support workshops, mentor students, and help expand our reach.</p>
            </div>

            <div className="card">
              <h3>Community Partnerships</h3>
              <p>
                Schools, local organizations, and families can collaborate
                to bring sustainability education to their communities.
              </p>
            </div>
          </>
        );

      case "sponsorship":
        return (
          <>
            <h2>Sponsorship & Funding</h2>
            <p>
              Your support helps provide materials, build tools, and expand
              access to environmental education. We welcome grant partners,
              sponsors, and community investors.
            </p>
          </>
        );

      case "faq":
        return (
          <>
            <h2>Frequently Asked Questions</h2>
            <p><strong>Who can participate?</strong> Students, families, schools.</p>
            <p><strong>Do I need experience?</strong> No experience required.</p>
            <p><strong>How do I join?</strong> Contact us below.</p>
          </>
        );

      case "contact":
        return (
          <>
            <h2>Contact Us</h2>
            <p>Email: theopenrootsinitative@gmail.com</p>
            <p>Phone: 587-899-5868</p>
            <p>Email to get in contact or for any questions.</p>
          </>
        );

      default:
        return (
          <>
            <section className="hero">
              <div className="hero-content">
                <h1>Open Roots Initiative</h1>
                <p>
                  Growing community resilience through hands-on sustainability education.
                </p>
                <button onClick={() => setPage("getinvolved")}>
                  Get Involved
                </button>
              </div>
            </section>

            <section className="section">
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
        <div className="logo">
          <div className="logo-circle">🌿</div>
          <span>Open Roots Initiative</span>
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
        © {new Date().getFullYear()} Open Roots Initiative
      </footer>
    </div>
  );
}

export default App;

