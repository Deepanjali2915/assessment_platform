import Timer from "./Timer";
import Filter from "./Filter";
import Questions from "./Questions";
import "./assessment.css"
import Submit_button from "./Submit_button";

const Assessment = () => {
    return (
        <div className="main-assesment-cantainer">
            <div className="assesment-cantainer">
                <div className="desktop-timer-filter" >
                    <Timer />
                    <Filter />
                </div>
                <div className="main-questions" >
                    {/* <Timer/> */}
                    <Questions />
                    <Submit_button />
                </div>
            </div>
        </div>
    );
};

export default Assessment;

