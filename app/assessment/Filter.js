
import "./filter.css";

const Filter = () => {
    return (
        <>
            <div className="main-desktop-filter">
                <div className="div-margin" >
                    <div className="filter-name">filters</div>
                    <div className="question-score">Question-Score</div>
                    <div className="main-marks">
                        <div className="All" >
                            All
                        </div>
                        <div className="marks" >
                            10
                        </div>
                        <div className="marks" >
                            15
                        </div>
                        <div className="marks" >
                            20
                        </div>
                    </div>
                    <div className="question-score">Questions Attempted</div>
                    <div className="all-attempted">
                        <div className="how-attempted" >
                            All(40)
                        </div>
                        <div className="attempted" >
                            Attempted (3)
                        </div>
                        <div className="attempted" >
                            Unattempted (37)
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-filter" >
                <img className="filter" src="Mobile.png" />
            </div>
        </>
    );
};

export default Filter;  