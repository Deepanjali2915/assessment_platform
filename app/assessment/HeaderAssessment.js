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
                    <div className="submit-div" >
                        <button className="submit-button">Submit</button>
                    </div>
                </div >
            </div>
        </>
    );
};

export default HeaderAssessment;  



// display: flex;
// width: 30px;
// padding: 7px 10px 6px 10px;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 10px;