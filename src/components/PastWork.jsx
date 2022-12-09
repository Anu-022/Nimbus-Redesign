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
                <svg class="left-arrow" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.09717 0L10 1.9975L3.81916 8.5L10 15.0025L8.09717 17L0 8.5L8.09717 0Z" fill="#272d4a"/>
        </svg>
        <svg class="right-arrow" width="10" height="17" viewBox="0 0 10 17" fill="#none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.90283 0L0 1.9975L6.18084 8.5L0 15.0025L1.90283 17L10 8.5L1.90283 0Z" fill="#272d4a"/>
            </svg>  
            </div>   
        </div>

        </>
    )
}
export default PastWork;