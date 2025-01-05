import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Fieldsingle = () => {
   
    const paramname = useParams();
    const fieldname = paramname.fieldname;
    const fieldsinfo = useSelector((state)=>state.fieldreducer.fields);
       

    const fieldinfo = fieldsinfo.filter((c) => c.heading == fieldname);
    console.log(fieldinfo[0]);
    return (
        <>
            <div className="field-single">
                   
                
            <h1
                className="text-center py-5 mb-5"
                style={{background: "#555", color:"#fff"}}
            >
                {fieldinfo[0].heading}</h1>
            
            <div className="container">
                <div className="field-image-container mb-5">
                    <img src={ fieldinfo[0].image} className="d-block w-50 mx-auto" />

                </div>

                <p className="text-light1 w-50 mx-auto text-center">{fieldinfo[0].desc}

                </p>

                </div>
                

                
            </div>
            
        </>
    )
};

export default Fieldsingle;