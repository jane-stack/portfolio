function Footer () {

    return (
        <div className="footer-logos">
            <br/>
            <div className="footer-div">
                <a href="https://www.linkedin.com/in/stack-dev/" target="_blank" rel="noreferrer">
                    <img src="./Linkedin-logo-png.png" alt="linkedinlogo" height="15" />
                </a>
            </div>

            <br />
            <div className="footer-div">
                <a href="https://github.com/jane-stack" target="_blank" rel="noreferrer">
                    <img src="./githublogo.png" alt="githublogo" height="15" /> 
                </a>
            </div>

            <br />
            <div className="footer-div">
                <a href="https://dev.to/janestack" target="_blank" rel="noreferrer">
                    {/* <img src="./3031814.avif" alt="githublogo" height="25" />  */}
                    <strong>DEV</strong>
                </a>
            </div>
        </div>
    )
}

export default Footer;