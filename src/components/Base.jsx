import { Header } from "./Header";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { About } from "./About";

function Base() {
  return (
    <div className="bg-violet-50">
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  )
};

export { Base };
