import Timer from "./Timer";
import Filter from "./Filter";
import Questions from "./Questions";
import "./assessment.css"

const Assessment = () => {
    return (
        <div className="main-assesment-cantainer">
            <div className="assesment-cantainer">
                <div className="desktop-timer-filter" >
                    <Timer />
                    <Filter />
                </div>
                <div className="questions" >
                    <div className="mobile-timer-filter" >
                        <div className="mobile-timer" >
                        </div>
                        <div className="mobile-filter" >
                            <img className="filter" src="Mobile.png" />
                        </div>
                    </div>
                    <Questions />
                </div>
            </div>
        </div>
    );
};

export default Assessment;

