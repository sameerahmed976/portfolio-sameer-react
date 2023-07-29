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
            {/* workout  mern  app*/}
            <article className="projects__card">
              <div className="projects__card__inner">
                <div className="projects__card__front">
                  <img
                    src="/workout-tracker.png"
                    alt="workout tracker"
                    className="projects__image"
                  />
                </div>
                <div className="projects__card__back">
                  <div className="projects__btn__group">
                    <a
                      href="https://workout-tracker-ixpy.onrender.com"
                      target="_blank"
                      className="btn--demo"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href=" https://github.com/sameerahmed976/workout-frontend"
                      target="_blank"
                      className="btn--code"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github-square btn--github"></i>{" "}
                      Source Code -frontend
                    </a>
                    <a
                      href="https://github.com/sameerahmed976/workout-backend"
                      target="_blank"
                      className="btn--code"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github-square btn--github"></i>{" "}
                      Source Code -backend
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* cocktail shop search */}
            <article className="projects__card">
              <div className="projects__card__inner">
                <div className="projects__card__front">
                  <img
                    src="/github__finder.png"
                    alt="project 2"
                    className="projects__image"
                  />
                </div>
                <div className="projects__card__back">
                  <div className="projects__btn__group">
                    <a
                      href="https://github-finder-react-self.vercel.app/"
                      target="_blank"
                      className="btn--demo"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/sameerahmed976/github__finder__react"
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
            {/* github finder search */}
            <article className="projects__card">
              <div className="projects__card__inner">
                <div className="projects__card__front">
                  <img
                    src="/cocktail search.png"
                    alt="project 2"
                    className="projects__image"
                  />
                </div>
                <div className="projects__card__back">
                  <div className="projects__btn__group">
                    <a
                      href="https://cocktail-shop-react.vercel.app/"
                      target="_blank"
                      className="btn--demo"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/sameerahmed976/cocktail__shop__cart-react"
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

            {/* awesome photo*/}
            <article className="projects__card">
              <div className="projects__card__inner">
                <div className="projects__card__front">
                  <img
                    src="/awesome___photo.png"
                    alt="project 1"
                    className="projects__image"
                  />
                </div>
                <div className="projects__card__back">
                  <div className="projects__btn__group">
                    <a
                      href="https://awesome-photo-search.vercel.app/"
                      target="_blank"
                      className="btn--demo"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/sameerahmed976/photos-app-react"
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

            {/* frontend bootcamp*/}
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
