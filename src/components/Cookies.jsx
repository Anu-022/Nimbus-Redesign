import './Cookies.css';
function Cookies() {
      
    return (
        <>
          <div className="Cookies">
            <div className="Cookies-text">
                <p>We use cookies to improve user experience and analyze website traffic. By clicking “Accept,“ you agree to our website's cookie use as described in our <a className='cookies-highlight'>Cookie Policy</a>.</p>
                <a className='decline-cookies'> Decline</a>
                <button className="cookies-btn">Allow</button>
            </div>
          </div>
        </>

    )
}

export default Cookies;