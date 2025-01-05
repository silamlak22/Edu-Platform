import "../styles/awards.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Awards = () => {

    const setting = {
        slidesToShow: 5,
        dots: true,
        speed: 500,
        slidesToScroll: 1,
        prevArrow: (
            <button type="button" className="slick-prev">
                <img src="images/slider/left.png"/>
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next">
                <img src="images/slider/right.png"/>
            </button>
        ) ,
    }
    return (
        <>
            <div className="section-padding awards">
                <div className="section-header text-center">
                    <h2 className="border-center"> Award Winner For Creative Education Systems</h2>
                </div>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
                        tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus,
                        <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
                        tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus,
                </p>

                
        <div className="awards-container container">
                    <Slider {...setting}
                        className="slick-awards">
                    <div className="award-item">
                        <img src="images/awards/1.jpg" alt="awardimage1"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/2.jpg" alt="awardimage2"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/3.jpg" alt="awardimage3"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/4.jpg" alt="awardimage4"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/5.jpg" alt="awardimage5"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/6.jpg" alt="awardimage6"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/1.jpg" alt="awardimage7"/>
                    </div>

                    <div className="award-item">
                        <img src="images/awards/2.jpg" alt="awardimage8"/>
                    </div>

                    </Slider>
            </div>
            </div>
        </>
    );
};

export default Awards;