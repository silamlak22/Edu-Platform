import { useSelector } from 'react-redux';
import '../styles/fields.css';
import { Link } from 'react-router-dom';


const Fields = () => {

    const fields = useSelector(state=>state.fieldreducer.fields)
    return (
        <>
            <section className="fields-upper section-padding text-center">
                <div className="section-header">
                    <h2 className="border-center">We Teach Many Fields of Science</h2>
                </div>
                <p className="text-light1 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
                    tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus,
                    <br/>
                    metus nisi ultricies quam, id dapibus ex turpis in nulla.
                </p>
            </section>
            <section className="fields-lower">
                <div className='fields-content'>
                    <div className='container'>
                        <div className='row'>
                            {fields.map((field) => (
                                <div className='col-md-4'>
                                    <div className='field-content'>
                                        <img src={field.image} />
                                        <div className='field-padding'>
                                        <h4>{field.heading}</h4>
                                            <p className='text-light1'>{field.desc}</p>
                                            <Link to={'/fields/' + field.heading} className='read-more'>
                                                Reade More
                                            </Link>
                                        </div>
                                    </div>
                                 </div>     
                             ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Fields;