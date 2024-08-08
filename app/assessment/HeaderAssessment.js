import Pagination from "./Pagination";

const HeaderAssessment = () => {
    return (
        <>
            <div className="header-assessment" >
                <div className="main-header" >
                    <div className="logo-pagination" >
                        <img className="logo" src="Logo.png" />
                        <Pagination />
                    </div>
                    {/* <div className="paginationdiv" >
                       
                    </div> */}
                    <div className="submitdiv" >
                        <button className="submitbutton">Submit</button>
                    </div>
                </div >
            </div>
        </>
    );
};

export default HeaderAssessment;  