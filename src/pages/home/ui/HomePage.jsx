import Hero from "../../../widgets/hero/ui/Hero";
import About from "../../../widgets/about/ui/About";
import Projects from "../../../widgets/projects/ui/Projects";
import GitHubInsights from "../../../features/github-insights/ui/GitHubInsights";
import Education from "../../../widgets/education/ui/Education";
import Certificates from "../../../widgets/certificates/ui/Certificates";

export default function HomePage() {
  return (
    <main className="content">
      <Hero />
      <About />
      <Projects />
      <GitHubInsights />
      <Education />
      <Certificates />
    </main>
  );
}
