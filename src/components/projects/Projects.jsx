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
                      href="https://workout-tracker-list.netlify.app/"
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
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
