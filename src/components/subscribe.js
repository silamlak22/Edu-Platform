import Edunewsletter from "./edunewsletter";

const Subscribe = () => {
    return (
        <>
        <section style={{padding:"50px 0",background:'#d9d9d9'}}>
                <p style={{ fontWeight: 'bold' ,textAlign:'center'}}>
                    Subscribe to Newsletter to get Notified of Hot News
                </p>
                   
                <div style={{ width: '50%', margin: '0 auto' }}>
                        <Edunewsletter btnbg='#23d789' colAuto='auto'/>
                </div>
                
        </section>
        </>
    );

};

export default Subscribe;