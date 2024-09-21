import Timer from "./Timer";
import Filter from "./Filter";
import Question from "./Question";
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
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </div>
    );
};

export default Assessment;

