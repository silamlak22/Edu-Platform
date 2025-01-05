import Power from "../components/power";
import Slider from "../components/slider";
import Prof from "../components/prof";
import Fields from "../components/fields";
import Doctoral from "../components/doctoral";
import Class from "../components/class";
import Newsletter from "../components/newsletter";
import Awards from "../components/awards";
import Facilities from "../components/facilities";
//import Contact from "../components/contact";
import Form from "../components/form";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import Footerbottom from "../components/footerbottom";

const Main = () => {
  return (
    <>
      <Slider></Slider>
      <Power />
      <Prof />
      <Fields />
      <Doctoral />
      <Class />
      <Newsletter />
      <Facilities />
      <Awards />
      {/* <Contact/> */}
      <Form />
      <Subscribe />
      <Footer />
      <Footerbottom />
    </>
  );
};

export default Main;
