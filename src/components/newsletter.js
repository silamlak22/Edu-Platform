import '../styles/newsletter.css';
import Edunewsletter from './edunewsletter';
const Newsletter = () => {
    return (
        <>
            <div className="section-padding newsletter">
                <div className="container">
                    <div className="section-header">
                        <h3 className="border-left">Subscribe to Newsletter</h3>
                    </div>
                    <div className='row'>
                       <div className='col-md-6>'>
                            <p className='newsletter-text'>
                                Photographers have the gift of capturing
                                important moments in time. A photography
                                logo is similar, in that it captures
                                the style and eye of the picture-taker.
                            </p>

                            <Edunewsletter colAuto='' btnbg='transparent'/>
                        </div>
                    </div>

                    <div className="newsletter-phone-img"></div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;