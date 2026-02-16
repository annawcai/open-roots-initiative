import { useState } from "react";
import "./App.css";
import logoImg from "./logo.png"; // <-- your real logo here

function App() {
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return (
          <div className="page-container">
            <h2>About Us</h2>
            <p>
              Open Roots Initiative is a community-driven sustainability education program reconnecting people to soil, water, energy, and food systems. Through hands-on workshops and collaborative learning, we empower communities to build practical environmental literacy and long-term resilience.
            </p>
          </div>
        );

      case "curriculum":
        return (
          <div className="page-container">
            <h2>Our Curriculum</h2>

            <div className="card">
              <h3>Module 1: The Living Soil</h3>
              <p>Biology + Chemistry • Composting • Carbon Cycle • Worm Bins</p>
              <p>Take-home: Small bag of compost</p>
            </div>

            <div className="card">
              <h3>Module 2: The Water Journey</h3>
              <p>Hydrology • Irrigation Testing • Solar Stills • Hand-Pump Experience</p>
              <p>Take-home: Illustrated water cycle card</p>
            </div>

            <div className="card">
              <h3>Module 3: The Energy Shift</h3>
              <p>Wind Turbines • Solar Ovens • Renewable Engineering</p>
              <p>Capstone: Assemble wind-powered water pump</p>
              <p>Take-home: Mini blade kit, Certificate of Completion</p>
            </div>

            <div className="card">
              <h3>Module 4: The Food Connection</h3>
              <p>Nutrition • Food Systems • Seed Saving • Garden Harvest</p>
              <p>Take-home: Fresh vegetables, seed packet</p>
            </div>
          </div>
        );

      case "getinvolved":
        return (
          <div className="page-container">
            <h2>Get Involved</h2>

            <div className="card">
              <h3>Volunteer</h3>
              <p>Support workshops, mentor students, and help expand our reach.</p>
            </div>

            <div className="card">
              <h3>Partner with Us</h3>
              <p>
                Schools, local organizations, and families can collaborate to bring sustainability education to their communities.
              </p>
            </div>

            <div className="card newsletter-card">
              <h3>Subscribe to Our Newsletter</h3>
              {submitted ? (
                <p>Thank you! You'll receive our updates.</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        );

      case "sponsorship":
        return (
          <div className="page-container">
            <h2>Sponsorship & Funding</h2>
            <p>
              Your support helps provide materials, build tools, and expand access to environmental education. We welcome grant partners, sponsors, and community investors.
            </p>
          </div>
        );

      case "faq":
        return (
          <div className="page-container">
            <h2>Frequently Asked Questions</h2>
            <p><strong>Who can participate?</strong> Students, families, schools.</p>
            <p><strong>Do I need experience?</strong> No experience required.</p>
            <p><strong>How do I join?</strong> Contact us below.</p>
          </div>
        );

      case "contact":
        return (
          <div className="page-container">
            <h2>Contact Us</h2>
            <p>Email: theopenrootsinitative@gmail.com</p>
            <p>Phone: 587-899-5868</p>
            <p>Email to get in contact or for any questions.</p>
          </div>
        );

      default:
        return (
          <div className="page-container">
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
          </div>
        );
    }
  };

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="nav-inner">
          <div className="logo">
            <img src={logoImg} alt="Open Roots Initiative Logo" className="logo-image" />
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

