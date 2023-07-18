import { useEffect, useState } from "react";

const Header = () => {
  const [sideBar, setSideBar] = useState(true);

  const handleNavLink = () => {
    // console.log(e);
    setSideBar(false);
  };

  useEffect(() => {
    setSideBar(false);
  }, []);

  /* get  current color */
  function getCurrentColor() {
    let theme = window.matchMedia("(prefers-color-scheme : dark)").matches
      ? "dark"
      : "light";

    localStorage.getItem("theme")
      ? /* @ts-ignore */
        (theme = localStorage.getItem("theme"))
      : null;

    return theme;
  }

  window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentColor());
  });

  /* @ts-ignore */

  function loadTheme(theme) {
    const root = document.querySelector(":root");

    if (theme === "light") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    root?.setAttribute("color-scheme", `${theme}`);
  }

  const changeTheme = (e) => {
    let theme = getCurrentColor();

    // console.log(theme);

    if (theme === "dark") {
      theme = "light";
    } else if (theme === "light") {
      theme = "dark";
    }
    e.target.classList.toggle("theme__icon__dark");
    localStorage.setItem("theme", theme);
    loadTheme(theme);
  };

  return (
    <>
      <header id="home">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <a href="/" className="navbar__link">
                <h1 className="navbar__text">
                  Sam<span className="navbar__text2">eer</span>
                </h1>
              </a>

              <div className="navbar__align">
                <section className="menu" onClick={() => setSideBar(true)}>
                  <div className="bar-1"></div>
                  <div className="bar-2"></div>
                  <div className="bar-3"></div>
                </section>

                <div
                  className={`  ${
                    sideBar ? "overlay overlay__hide    " : "overlay  "
                  }  `}
                >
                  <button
                    className="btn--close"
                    onClick={() => setSideBar(false)}
                  >
                    &times;
                  </button>

                  <section
                    className="theme__icon"
                    onClick={(e) => changeTheme(e)}
                  ></section>
                  <ul className="navbar__links">
                    <li>
                      <a
                        href="#home"
                        className="scroll__link"
                        onClick={() => handleNavLink()}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="scroll__link"
                        onClick={() => handleNavLink()}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#skills"
                        className="scroll__link"
                        onClick={() => handleNavLink()}
                      >
                        {" "}
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="scroll__link"
                        onClick={() => handleNavLink()}
                      >
                        {" "}
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="scroll__link"
                        onClick={() => handleNavLink()}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>

                  <ul className="navbar__social__icons">
                    <li>
                      <a
                        href="https://github.com/sameerahmed976"
                        className="social__icon"
                      >
                        <i className="fab fa-github-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mohammed-sameer-ahmed976/"
                        className="social__icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
