import "./PastWork.css";

function PastWork() {
    return (
        <>
        <div className="PastWork">
            <h3>Some of Our Works</h3>
            <p>We offer out-of-home advertising, branding and activation consultancy.</p>
            <div className="works-wrapper">
                <div className="works">
                    <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FadvertisingImg.296810ac.png&w=1920&q=75" alt="past-works" className="workImg"/>
                    <div className="work-label">Mall Screens</div>
                </div>
                <div className="works">
                    <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FguerrilaImg.e756f067.JPG&w=1920&q=75" alt="past-works" className="workImg"/>
                    <div className="work-label">Branding</div>
                </div>
                <div className="works">
                   <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbrandingImg.5fed78da.png&w=1920&q=75" alt="past-works" className="workImg"/>
                   <div className="work-label">Activation</div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default PastWork;