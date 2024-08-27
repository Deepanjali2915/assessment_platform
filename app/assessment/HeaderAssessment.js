import Pagination from "./Pagination";
import Header from "../instructon/Header";
import "./header_assessment.css";
import Mobile_pagination from "./mobile_pagination";

const HeaderAssessment = () => {
    return (
        <>
            <div className="header-assessment-desktop" >
                <div className="main-header" >
                    <div className="logo-pagination" >
                        <img className="logo" src="Logo.png" />
                        <Pagination />
                    </div>
                    <div className="submit-div" >
                        <a href="/submitted">
                            <button className="submit-button">Submit</button>
                        </a>
                    </div>
                </div >
            </div>
            <div className="header-assessment-mobile" >
                <Header />
                <Mobile_pagination />
            </div>
        </>
    );
};

export default HeaderAssessment;