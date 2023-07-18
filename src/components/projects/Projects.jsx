const Projects = () => {
  return (
    <>
      <section className="section projects" id="projects">
        <section className="section__title">
          <h2 className="projects__title">Projects</h2>
          <div className="underline"></div>
        </section>
        <section className="section__center">
          <section className="projects__container">
            <article className="projects__card">
              <div className="projects__card__inner">
                <div className="projects__card__front">
                  <img
                    src="/frontend__bootcamp.png"
                    alt="project 1"
                    className="projects__image"
                  />
                </div>
                <div className="projects__card__back">
                  <div className="projects__btn__group">
                    <a
                      href="https://frontend-bootcamp-bootstrap5.vercel.app/"
                      target="_blank"
                      className="btn--demo"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/sameerahmed976/frontend-bootcamp-bootstrap5"
                      target="_blank"
                      className="btn--code"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github-square btn--github"></i>{" "}
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
