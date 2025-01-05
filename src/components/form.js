import { useState } from 'react';
import '../styles/form.css';
const Form = () => {
    
    const [first, setFirst] = useState('');
    const [firstnameerror, setFirstnameerror] = useState('');
   function firstnamechange(event) {
        setFirst(event.target.value);
        if (first.length >= 5 && firstnameerror !== '') {
            setFirstnameerror('');
        }
    }
    
    function firstnameblur(event) {
        if (first.length < 5) {
            setFirstnameerror('First Name should have a minimum of 5 characters')
        } else {
            setFirstnameerror("");
        }
    }

    function eduformsubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <section className="section-padding edu-form">
                <div className="container">
                    <div className="row edu-form-content">
                        <div className="col-sm-7">
                            <div className="form-location-content">
                                <div className='section-header'>
                                    <h3 className="border-left">
                                        Ask Something or Leave a Message
                                    </h3>
                                </div>
                                    <p className='text-light1'>
                                        Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has
                                        roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                
                                    <p className='edu-bold'>
                                        Main Branch :
                                </p>
                                
                                <p>
                                    <span className='edu-address'>
                                        <i className='fas fa-map-marked-alt' />  </span>
                                    <span className='text-light1'>
                                        The standard chunk of Lorem Ipsum used since the
                                        1500s is reproduced.
                                    </span>
                                    
                                </p>

                                <p><span className='edu-phone'>
                                    <i className='fas fa-phone' />
                                </span>
                                    <span className='text-light1'>
                                        +1-800-xxxx-xxxx-xxx1 +1-800-xxxx-xxxx-xxx2
                                    </span>
                                </p>

                                <p>
                                    <span className='edu-mail'>
                                         <i className='fas fa-envelope' />
                                    </span>
                                    <span className='text-light1'>
                                        mail@eduPlateouhost.edu
                                    </span>
                                        
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-container">
                                     
                                <form  onSubmit={eduformsubmit}>
                                    <input
                                        type='text'
                                        className='form-control first-name edu-form-input p-32'
                                        name="first name"
                                        placeholder='First-name'
                                        onChange={firstnamechange}
                                        onBlur={firstnameblur}
                                        required
                                        style={
                                            firstnameerror !== ""
                                                ? { border: "2px solid red" }
                                                : { border: 'none' }
                                        }
                                        />
                                    <p>{firstnameerror} and First name has length of { first.length}</p>
                                    
                                    <input
                                           type='text'
                                           className='form-control last-name edu-form-input p-32'
                                           name="last name"
                                           placeholder='Last-name'
                                           required />
                                    
                                    <input
                                           type='email'
                                           className='form-control email edu-form-input p-32'
                                           name="email"
                                           placeholder='Email'
                                           required />
                                    
                                    <textarea
                                           className='form-control edu-form-textarea message p-32'
                                           rows={8}
                                           placeholder="Your Message">
                                    </textarea>

                                    <input
                                           type='submit'
                                           className='cta cta1  edu-form-submit'
                                           value="SUBMIT"/>
                                           
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Form;