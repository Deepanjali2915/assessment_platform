import Pagination from "./Pagination";
import Header from "../instruction/Header";
import "./header_assessment.css";

const HeaderAssessment = () => {
    return (
        <>
            <div className="header-assessment-desktop" >
                <div className="main-header" >
                    <div className="logo-pagination" >
                        <Header />
                        <Pagination />
                    </div>
                    <div className="submit-div" >
                        <a href="/submitted">
                            <button className="submit-button">Submit</button>
                        </a>
                    </div>
                </div >
            </div>
        </>
    );
};

export default HeaderAssessment;