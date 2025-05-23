const Edunewsletter = (props) => {
  const buttonbg = props.btnbg;
  const bordercolor = props.btnbg === "transparent" ? "#fff" : buttonbg;
  const colAuto = props.colAuto === "" ? "-auto" : "";
  return (
    <>
      <div className="row newsletter-form">
        <div className="col">
          <input
            type="email"
            placeholder="Your E-Mail"
            className="form-control"
          />
        </div>

        <div className={"col" + colAuto}>
          <button
            className="cta  cta1 cta-transparent"
            style={{
              backgroundColor: "#3b3486",
              border: "2px solid" + "#3b3486",
              color: "white",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
};
export default Edunewsletter;
