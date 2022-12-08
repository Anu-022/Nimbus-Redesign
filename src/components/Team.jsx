import './Teams.css';
function Team() {
    return (
        <>
           <div className="Team">
                <h3>Our Team</h3>
                <p>We are a team of experts working collaboratively to empower you with opportunities to reach your customers and grow your bottom line</p>
            </div> 
            <div className="team-image">
            <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnimbusTeamImage.b4b0b08e.png&w=1920&q=75" alt='team-image' />
            </div> 
            <button className="btn team-btn">View Full Profile</button>  
            
        </>
    )
}
export default Team;