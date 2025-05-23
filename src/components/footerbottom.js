import "../styles/footer.css";

const currentYear = new Date().getFullYear();
const Footerbottom = () => {
  return (
    <>
      <div
        className="fooetr-bottom"
        style={{
          backgroundColor: "#1e1e2f",
          height: "50px",
          lineHeight: "50px",
          borderTop: "1px solid #cecece",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <p style={{ fontSize: "12px" }}>
                Copyright &copy; {currentYear}, All rights reserved.
              </p>
            </div>

            <div className="col">
              <p style={{ textAlign: "right", fontSize: "12px" }}>
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerbottom;
