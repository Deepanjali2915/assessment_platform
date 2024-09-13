import Timer from "./Timer";
import Filter from "./Filter";
import Questions from "./Questions";
import "./assessment.css"

const Assessment = () => {
    return (
        <div className="main-assesment-cantainer">
            <div className="assesment-cantainer">
                <div className="timer-filter" >
                    <Timer />
                    <Filter />
                </div>
                <div className="main-questions">
                    <Questions />
                </div>
            </div>
        </div>
    );
};

export default Assessment;

