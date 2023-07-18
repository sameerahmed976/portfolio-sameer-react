const Skills = () => {
  return (
    <>
      <section className="section skills" id="skills">
        <section className="section__title">
          <h2 className="skills__title">Skills and Tools</h2>
          <div className="underline"></div>
        </section>

        <section className="section__center skills__container">
          <article className="skills__frontend">
            <h2 className="skills__frontend__title">Frontend Tools</h2>
            <ul>
              <li className="skills__check">
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                React
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Bootstrap
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Html
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Css
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                JavaScript
              </li>
            </ul>
          </article>
          <article className="skills__backend">
            <h2 className="skills__backend__title">Backend Tools</h2>
            <ul>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Nodejs
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Express.js
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                MongoDB
              </li>
            </ul>
          </article>

          <article className="skills__tools">
            <h2 className="skills__other__tools">Other Tools</h2>
            <ul>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Git
              </li>
              <li className="skills__check">
                {" "}
                <img
                  src="/check-circle.svg"
                  alt="check circle"
                  className="skills__circle"
                />
                Postman
              </li>
            </ul>
          </article>
        </section>
      </section>
    </>
  );
};

export default Skills;
