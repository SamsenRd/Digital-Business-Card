import React from "react"

export default function Info(){
    return(
        <div>
            <img src="images/cropped-headshot.png" alt="Samanta's headshot" width="317px" className="info-img" />
            <div className="info-details">
                <h1 className="info-title">Samantha Foigel</h1>
                <p className="info-role">Front-End Developer</p>
                <small className="info-portfolio"><a href="https://samantha-foigel-portfolio.netlify.app/" target="_blank">samanthafoigel.website</a></small>
            </div>
            <div className="info-btns">
                <a href="mailto: abc@example.com">
                    <button className="info-btn-content">
                        <img src="images/envelope-solid.svg" alt="mail icon" className="info-img-mail" width="17.5px" /> 
                        <p className="info-btn-name">Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/samantha-foigel-86b556163/" target="_blank">
                    <button className="info-btn-content-linkedin">
                        <img src="images/linkedin-icon.svg" alt="linkedin icon" className="info-img-linkedin" /> 
                        <p className="info-btn-name linkedin">LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    )
}