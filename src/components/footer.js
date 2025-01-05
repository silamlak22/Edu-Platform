import '../styles/footer.css';

const Footer = () => {
    return (
        <section className="footer section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">Navigate</div>
                        <div className="row">
                            {/* <div className='col'>
                            <link to='/'>Home</link>
                            <link to='/fields'>Science Fields</link>
                            <link to='/'>Course Types</link>
                            <link to='/facilities'>Facilities</link>
                        </div>
                        <div className='col'>
                            <link to='/'>Awards</link>
                            <link to='/'>Branches</link>
                            <link to='/'>Contact Us</link>
                        </div> */}
                            </div>

                         
                    </div>

                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">Stay Connected</div>
                        <p className="text-light1 footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <p><i className='fas fa-envelope'></i>
                            <span className='ms-2'>
                            mail@eduPlateouhost.edu
                        </span>
                        </p>

                        <div className='footer-header footer-text-bold'>
                            <span></span>Follow Us On :
                            <div className='social-iconsms-2' style={{color:'#fff'}}>
                                        <div className='social'>
                                            <i className='fa-brands fa-facebook-f'></i>
                                        </div>

                                        <div className='social'>
                                            <i className='fa-brands fa-twitter'></i>
                                        </div>

                                        <div className='social'>
                                            <i className='fa-brands fa-linkedin-in'></i>
                                        </div>
                                    </div>
                               
                        </div>
                        
                    </div>

                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">About EduPlateou</div>
                        <p className="text-light1 footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="footer-text-bold">
                            More
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;