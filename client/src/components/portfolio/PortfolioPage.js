import FileForm from "./FileForm";
import LastestImage from "./LastestImage";

function PortfolioPage () {

    return (
        <div>
            <div className="upload-project">
                <FileForm />
                <LastestImage />
            </div>
        </div>
    )
}

export default PortfolioPage;