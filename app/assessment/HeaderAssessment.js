import Pagination from "./Pagination";
import Header from "../components/Header";

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
                        <button className="submit-button">Submit</button>
                    </div>
                </div >
            </div>
            <div className="header-assessment-mobile" >
                <div className="mobile-header" >
                    <Header />
                </div>
                <div className="mobile-pagination" >
                </div>
            </div>
        </>
    );
};

export default HeaderAssessment;



