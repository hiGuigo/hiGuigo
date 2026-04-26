import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import GitHubInsights from "./components/sections/GitHubInsights";

import "./app.css";
import Education from "./components/sections/Education";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <Background />
        <Hero />
        <About />
        <Projects />
        <GitHubInsights />
        <Education />
        <Certificates />
      </main>

      <Footer />
    </>
  );
}

export default App;