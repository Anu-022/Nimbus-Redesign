import './ContactForm.css'
function ContactForm() {
    return (
        <div className="ContactForm">
            <h3>Contact Us </h3>
            <p><i className="fa-solid fa-phone"></i>
                (+234)-706-327-4951</p>
            <p>
            <i className="fa-solid fa-envelope"></i>wale@nimbus.com.ng</p>
            <form className="form">
                    <label>
                        <span className="input-details">Name</span>
                        <input type="text" className="user-input" placeholder='Full Name' />
                    </label>
                    <label>
                        <span className="input-details">Email</span>
                        <input type="email" className="user-input" placeholder='Email Address' />
                    </label>
                    <label>
                        <span className="input-details">Subject</span>
                        <input type="text" className="user-input"/>
                    </label>
                    <label className="textarea">
                        <span className="input-details">Message</span>
                        <textarea name="message" className="message-box"  placeholder='Tell us about your project'></textarea>
                    </label> 
                    
                        <input type="submit" className= "btn submit-btn" value="Send Message" />
               
                </form>   
             
        </div>

    )

}

export default ContactForm