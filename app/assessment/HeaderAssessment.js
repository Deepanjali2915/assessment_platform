import Pagination from "./Pagination";
import Header from "../instructon/Header";
import "./header_assessment.css";

const HeaderAssessment = () => {
    return (
        <>
            <div className="header-assessment-desktop" >
                <div className="main-header" >
                    <div className="logo-pagination" >
                        {/* <img className="logo" src="Logo.png" /> */}
                        <Header/>                    
                        <Pagination />
                    </div>
                    <div className="submit-div" >
                        <a href="/submitted">
                            <button className="submit-button">Submit</button>
                        </a>
                    </div>
                </div >
            </div>
            {/* <div className="header-assessment-mobile" >
                <div className="mobile" ><Header /></div>
                <div className="mobilePagination" ><Pagination /></div>
            </div> */}
        </>
    );
};

export default HeaderAssessment;