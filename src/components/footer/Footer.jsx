const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <section className="footer__container">
          <ul className="footer__navbar__links">
            <li>
              <a href="#home" className="scroll__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="scroll__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="scroll__link">
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#projects" className="scroll__link">
                Projects
              </a>
            </li> */}
            <li>
              <a href="#contact" className="scroll__link">
                Contact
              </a>
            </li>
          </ul>

          <ul className="footer__links footer__center">
            <li>
              <a
                href="https://github.com/sameerahmed976"
                className="resume__icon"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohammed-sameer-ahmed976/"
                className="resume__icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sameer.ahmed.9763"
                className="resume__icon"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sameer_976/"
                className="resume__icon"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </li>
          </ul>

          <p className="footer__text">
            © <span className="date"></span> Built By Sameer. All Rights
            Reserved
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
