import "../styles/contact.css";
const Contact = () => {
  return (
    <>
      <section className="section-padding contact">
        <div className="section-header text-center">
          <h2 className="border-center">Find The Nearest Branch To You</h2>
        </div>

        <div className="contact-container">
          <div className="container">
            <div className="row">
              <div className="contact-text col-sm-5">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <div className="form-container">
                  <div className="edu-select">
                    <select>
                      <option value="ethio" selected>
                        Ethiopia
                      </option>
                      <option value="us">United state</option>
                      <option value="ky">Kenya</option>
                      <option value="ind">India</option>
                      <option value="paks">Pakistan</option>
                      <option value="ban">Bangiladish</option>
                    </select>
                  </div>

                  <div className="edu-select">
                    <select>
                      <option value="NY" selected>
                        New York
                      </option>
                      <option value="us">United state</option>
                      <option value="ky">Kenya</option>
                      <option value="ind">India</option>
                      <option value="paks">Pakistan</option>
                      <option value="ban">Bangiladish</option>
                    </select>
                  </div>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div
                  className="more-text"
                  style={{ color: "#23d789", cursor: "pointer" }}
                >
                  More
                </div>

                <div className="address-detail mt-3">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Address : </span> Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                </div>

                <div className="tel-detail mt-3">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Tel : </span>{" "}
                    +1-800-xxxx-xxxx-xxx1 +1-800-xxxx-xxxx-xxx2
                  </p>
                </div>
              </div>
              <div className="edu-map col-sm-7"> </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
