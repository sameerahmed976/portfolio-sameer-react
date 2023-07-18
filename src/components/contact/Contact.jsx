const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <section className="section__title">
          <h2 className="contact__heading">Contact Me</h2>
          <div className="underline"></div>
        </section>
        <section className="section__center form__center">
          <div>
            <img
              src="/support.jpg"
              alt="background"
              className="background__image"
            />
          </div>

          <form
            className="form"
            action="https://formspree.io/f/xgebwqvy"
            method="POST"
          >
            <div className="form__group__container">
              <div className="form__group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form__control"
                  placeholder="enter your name"
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__control"
                  placeholder="enter your email"
                  required
                />
              </div>
            </div>

            <div className="form__group">
              <textarea
                id="textArea"
                cols="30"
                rows="10"
                className="form__textArea"
                name="message"
                placeholder="enter your message"
                required
              ></textarea>
            </div>

            <button className="btn btn--message" type="submit">
              Message
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Contact;
