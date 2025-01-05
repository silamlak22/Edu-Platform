import '../styles/doctoral.css';
const Doctoral = () => {
    return (
        <>
            <section className="section-padding doctoral">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">
                                <h3 className='border-left'> From Diploma to postdoctoral</h3>
                            </div>
                            <p className='doctoral-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin eu tincidunt tellus. Pellentesque varius, quam accumsan
                                luctus finibus, metus nisi ultricies quam, id dapibus ex turpis
                                in nulla.
                            </p>
                            <button className='cta cta1 doctoral-button'>Read More</button>

                        </div>
                    </div>
                </div>
                <div className='doctoral-right'>

                </div>
            </section>
        </>
    );
};

export default Doctoral;