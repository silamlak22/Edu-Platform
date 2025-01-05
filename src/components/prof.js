import '../styles/prof.css';
const Prof = () => {
    return (
        <>
            <section className="section-padding prof">
                <div className="overlay"></div>
                <div className="container prof-content">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="section-header">
                                <h3>We’ve Hired the Most Distinguished Professors</h3>
                            </div>
                            <p className="text-light1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                eu tincidunt tellus. Pellentesque varius, quam accumsan luctus
                                finibus, metus nisi ultricies quam, id dapibus ex turpis in
                                nulla. Donec sit amet fringilla felis. Etiam porttitor accumsan
                                nisi, hendrerit viverra est bibendum id.
                            </p>
                        </div>
                       </div>
                </div>
                <img src="images/prof.png" alt="prof image"/>
            </section>
        </>
    )
};

export default Prof;