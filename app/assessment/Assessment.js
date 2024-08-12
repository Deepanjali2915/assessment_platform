import Timer from "./Timer";
import Filter from "./Filter";
import Questions from "./Questions";

const Assessment = () => {
    return (
        <div className="main-assesment-cantainer">
            <div className="assesment-cantainer">
                <div className="timer-and-filter" >
                    <Timer/>
                    <Filter/>
                </div>
                <div className="questions" >
                    <Questions/>
                </div>
            </div>
        </div>

    );
};

export default Assessment;  