import './WhatweDo.css';
import Youtube from './Youtube';

function WhatweDo() {
    return (
        <>
        <div className="WhatweDo">
            <div className="WhatweDo-wrapper">
                <div className="WhatweDo-img">
                        <Youtube />   
                </div>
                <div className="WhatweDo-text">
                    <h3>WHAT WE DO</h3>
                    <p>All-round out-of-home advertising solutions which include branding, brand activation, consultancy and OOH advertising on billboard, lampost, shopping malls, superstores, street, road shows, digital OOH media, etc.</p>
                </div>
            </div>
            <div className="WhatweDo-wrapper">
                <div className="Why-us-text">
                    <h3>WHY WORK WITH US?</h3>
                    <p>We are the leading digital out-of-home advertising agency in Nigeria with a network of outdoor advertising media nationwide and portfolio of projects for customers in all sectors across traditional OOH advertising platforms.</p>
                </div>
                <div className="Why-us-img">
                    <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutImage3.f33824be.png&w=1920&q=75" alt="works" />
                </div>
            </div>
            
        </div>
        </>
    )
}
export default WhatweDo;