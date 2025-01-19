import Header from "./components/Header";

function App() {
  return (
    <>
      <main>
        <Header />
        <section className="hero">
          <div className="hero_content">
            <p className="hero_title_top">
              <span className="badge">New</span>
              <span>Monograph Dashboard</span>
            </p>
            <h1>Powerful insights into your team</h1>
            <p className="hero_desc">
              Project planning and time tracking for agile teams
            </p>
            <div className="hero_cta">
              <a href="">Schedule a demo</a>
              <p>
                to see a <span className="hide-on-mobile">live </span>preview
              </p>
            </div>
          </div>
          <img src="assets/images/illustration-devices.svg" alt="Hero Image" />
        </section>
      </main>
    </>
  );
}

export default App;
