import { useSelector } from "react-redux";
import '../styles/power.css';
const Power = () => {

    const powers = useSelector(state => state.powerreducer.powers);
    
    return (
        <>
            <section className="section-padding text-center"> 
                <div className="section-header">
                    <h2>Get Aquainted with the  Power of Education</h2>
                </div>
                <div className="container section-content">
                    <div className="row">
                        {
                            powers.map((power) => (
                                <div className="col-md-3 power">
                                    <div className="icon-holder mx-auto">
                                        <i className={power.icon}></i>
                                    </div>
                                    <h4 className="power-heading">{power.heading}</h4>
                                    <p className="power-desc text-light1">{power.desc}</p>
                                </div>
                            ))}
                    </div>
                </div>
        </section>
        </>
    );
}

export default Power;