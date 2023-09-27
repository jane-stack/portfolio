// import FileForm from "./FileForm";
// import LastestImage from "./LastestImage";

function PortfolioPage () {

    return (
        <div>
            <div className="upload-project">
                {/* <FileForm />
                <LastestImage /> */}
                <div className="project-img">
                    <h4>Social Media Demo</h4>
                    <img src="socialmedia.png" alt="project1" width="200"/>
                </div>
                <div className="project-img">
                    <h4>Rapi Car Rental</h4>
                    <img src="rapirental.png" alt="project2" width="200"/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;