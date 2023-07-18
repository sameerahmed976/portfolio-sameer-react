import { useEffect } from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  function scrollToToP() {
    const slideTop = document.querySelector(".slide__top");

    slideTop?.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    window.addEventListener("scroll", function () {
      // if (window.pageYOffset > 10) {
      //   header?.classList.add("header__fixed");
      // } else {
      //   header?.classList.remove("header__fixed");
      // }
      if (window.pageYOffset > 80) {
        slideTop?.classList.add("slide__top__active");
      } else {
        slideTop?.classList.remove("slide__top__active");
      }
    });
  }

  useEffect(() => {
    scrollToToP();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}

        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Slide to up */}
        <ScrollToTop />
      </main>
      <footer>
        {/* footer */}
        <Footer />
      </footer>
    </>
  );
}

export default App;
