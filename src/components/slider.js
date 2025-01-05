import { Swiper } from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import anime, { easing } from "animejs/lib/anime";
import "../styles/slider.css";

Swiper.use([Navigation, Pagination]);
const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      autoplay: {
        delay: 6000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {
        init: () => {
          anime({
            targets: ".swiper-slide-active h1",
            translateY: [-30, 0],
            duration: 1500,
            delay: 0,
            opacity: [0, 1],
          });

          anime({
            targets: ".swiper-slide-active p",
            duration: 1500,
            delay: 500,
            opacity: [0, 1],
          });

          anime({
            targets: ".swiper-slide-active .cta-buttons",
            translateY: [30, 0],
            duration: 1000,
            opacity: [0, 1],
          });

          anime({
            targets: ".image-container img",
            translateX: [300, 0],
            opacity: [0, 1],
            delay: 1500,
            duration: 1500,
          });
          anime({
            targets: ".swiper-slide-active",
            backgroundSize: [100, 130],
            duration: 5990,
            easing: "linear",
          });
        },
      },
    });

    swiper.on("slideChangeTransitionEnd", () => {
      anime({
        targets: ".swiper-slide-active h1",
        translateY: [-30, 0],
        duration: 1500,
        delay: 0,
        opacity: [0, 1],
      });

      anime({
        targets: ".swiper-slide-active p",
        duration: 1500,
        delay: 500,
        opacity: [0, 1],
      });

      anime({
        targets: ".swiper-slide-active .cta-buttons",
        translateY: [30, 0],
        duration: 1000,
        opacity: [0, 1],
      });

      anime({
        targets: ".image-container img",
        translateX: [300, 0],
        opacity: [0, 1],
        delay: 1500,
        duration: 1500,
      });

      anime({
        targets: ".swiper-slide-active",
        backgroundSize: [100, 130],
        duration: 5990,
        easing: "linear",
      });
    });

    swiper.on("slideChangeTransitionStart", () => {
      anime({
        targets: ".swiper-slide .content>*",
        opacity: [1, 0],
        duration: 0.00001,
      });

      anime({
        targets: ".image-container img",
        opacity: [1, 0],
      });

      anime({
        targets: ".swiper-slide-active",
        backgroundSize: [130, 100],
        duration: 0.00001,
      });
    });
  }, []);

  return (
    <section className="slider">
      <div className="swiper">
        <div className="swiper-wrapper">
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      */}

          <div className="swiper-slide slide1">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="content">
                  <h1>
                    The way to Reach the <span className="primary">Summit</span>
                  </h1>
                  <p>
                    Photographers have the gift of capturing important moments
                    in time. A photography logo is similar, in that it captures
                    the style and eye of the picture-taker.
                  </p>
                  <div className="cta-buttons">
                    <span className="btn btn-primary cta1 cta">LEARN MORE</span>
                    <span className="btn btn-primary cta2 cta ms-3">
                      CONTACT US
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-container d-flex align-items-end justify-content-center">
                  <img src="images/slider/main-guy.png" alt="main-guy" />
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      */}

          <div className="swiper-slide slide2">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="content">
                  <h1>
                    The way to Reach the <span className="primary">Summit</span>
                  </h1>
                  <p>
                    Photographers have the gift of capturing important moments
                    in time. A photography logo is similar, in that it captures
                    the style and eye of the picture-taker.
                  </p>
                  <div className="cta-buttons">
                    <span className="btn btn-primary cta1 cta">LEARN MORE</span>
                    <span className="btn btn-primary cta2 cta ms-3">
                      CONTACT US
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-container d-flex align-items-end justify-content-center">
                  <img
                    src="images/slider/guy-with-book.png"
                    alt="guy-with-book"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      */}

          <div className="swiper-slide slide3">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="content">
                  <h1>
                    The way to Reach the <span className="primary">Summit</span>
                  </h1>
                  <p>
                    Photographers have the gift of capturing important moments
                    in time. A photography logo is similar, in that it captures
                    the style and eye of the picture-taker.
                  </p>
                  <div className="cta-buttons">
                    <span className="btn btn-primary cta1 cta">LEARN MORE</span>
                    <span className="btn btn-primary cta2 cta ms-3">
                      CONTACT US
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-container d-flex align-items-end justify-content-center">
                  <img
                    src="images/slider/lady-with-book.png"
                    alt="lady-with-book"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      */}
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
};
export default Slider;
