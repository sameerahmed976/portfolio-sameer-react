const Hero = () => {
  return (
    <>
      <section className="section hero">
        <section className="section__center hero__container">
          <article className="hero__content">
            <h1 className="hero__title">Hello,I&apos;m Sameer</h1>

            <p className="hero__text">I&apos;m JavaScript,REACT Developer</p>

            <a
              href="/mohammed_sameer_ahmed_javascript_react _developer.pdf"
              download
              className="btn btn--download"
            >
              Download Resume
            </a>

            <ul className="social__icons__resume">
              <li>
                <a
                  href="https://github.com/sameerahmed976"
                  className="resume__icons"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammed-sameer-ahmed976/"
                  className="resume__icons"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </article>
          <section className="hero__image__container">
            <img src="/Photo.png" alt="Sameer Photo" className="hero__image" />
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
